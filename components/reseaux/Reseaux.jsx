import "./reseaux.scss";
import Image from "next/image";
import Link from "next/link";
import logoLinkedin from "@/public/images/iconeLinkedin.png";
import logoGithub from "@/public/images/iconeGithub.png";
import logoInsta from "@/public/images/iconeInstagram.png";
import logoGithubDarkMode from "@/public/images/githubDarkMode.png";

export default function Reseaux({ dark = false }) {
  return (
    <ul className="reseaux-sociaux">
      <li title="Mon linkedin">
        <Link href="https://www.linkedin.com/in/yannick-64-biot/" target="_blank">
          <Image src={logoLinkedin} alt="logo pour le lien vers un compte linkedin" />
        </Link>
      </li>
      <li title="Mon github">
        <Link href="https://github.com/yannou64" target="_blank">
          <Image
            src={dark ? logoGithubDarkMode : logoGithub}
            alt="logo pour le lien vers un compte github"
          />
        </Link>
      </li>
      <li title="Mon instagram">
        <Link href="https://www.instagram.com/yannick.b64/" target="_blank">
          <Image src={logoInsta} alt="logo pour le lien vers un compte Instagram" />
        </Link>
      </li>
    </ul>
  );
}
