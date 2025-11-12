// eslint.config.mts
import js from "@eslint/js";
import tseslint from "typescript-eslint";
import pluginReact from "eslint-plugin-react";
import pluginNext from "@next/eslint-plugin-next";
import globals from "globals";
import { defineConfig } from "eslint/config";
import { FlatCompat } from "@eslint/eslintrc";

const compat = new FlatCompat({
  baseDirectory: import.meta.dirname,
});

export default defineConfig([
  // Base JS + TS
  {
    files: ["**/*.{js,mjs,cjs,ts,mts,cts,jsx,tsx}"],
    languageOptions: {
      parser: tseslint.parser,
      globals: {
        ...globals.browser,
        ...globals.node, // ✅ Ajoute Node pour Next
      },
    },
    plugins: {
      js,
      react: pluginReact,
      next: pluginNext,
    },
    extends: [
      js.configs.recommended,
      ...tseslint.configs.recommended,
      ...compat.extends(
        "plugin:react/recommended",
        "plugin:@next/next/core-web-vitals" // ✅ Pour Next.js
      ),
    ],
    settings: {
      react: { version: "detect" },
    },
  },
]);
