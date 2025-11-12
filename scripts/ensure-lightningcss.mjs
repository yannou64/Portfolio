import { execSync } from "node:child_process";
import { createRequire } from "node:module";
const require = createRequire(import.meta.url);

function getTarget() {
  const parts = [process.platform, process.arch];

  if (parts[0] === "linux") {
    try {
      const { familySync, MUSL } = require("detect-libc");
      const family = familySync();
      if (family === MUSL) {
        parts.push("musl");
      } else if (process.arch === "arm") {
        parts.push("gnueabihf");
      } else {
        parts.push("gnu");
      }
    } catch {
      // If detect-libc is unavailable, assume gnu to keep the script from breaking installs.
      if (process.arch === "arm") {
        parts.push("gnueabihf");
      } else {
        parts.push("gnu");
      }
    }
  } else if (parts[0] === "win32") {
    parts.push("msvc");
  }

  return parts.join("-");
}

function hasNativeBinding(target) {
  try {
    require.resolve(`lightningcss-${target}`);
    return true;
  } catch {}

  try {
    require.resolve(`lightningcss/lightningcss.${target}.node`);
    return true;
  } catch {}

  return false;
}

function ensureLightningcss() {
  let lightningcssPkg;

  try {
    lightningcssPkg = require("lightningcss/package.json");
  } catch {
    return;
  }

  const target = getTarget();
  if (!target) {
    return;
  }

  if (hasNativeBinding(target)) {
    return;
  }

  const packageName = `lightningcss-${target}`;
  const version = lightningcssPkg.version;

  try {
    execSync(`npm install ${packageName}@${version} --no-save`, {
      stdio: "inherit",
    });
  } catch (error) {
    console.warn(
      `[lightningcss] Failed to install platform package "${packageName}" (v${version}).`,
    );
    console.warn(
      `[lightningcss] Falling back to JavaScript transformer. Set CSS_TRANSFORMER_WASM=1 to enforce the WASM build.`,
    );
    console.warn(error?.stderr?.toString() ?? error?.message ?? error);
  }
}

ensureLightningcss();


