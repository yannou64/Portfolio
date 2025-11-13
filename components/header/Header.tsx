'use client';

import style from "./header.module.scss";
import { useEffect, useState, useRef, useContext } from "react";
import Image from "next/image";
import {useRouter} from "next/navigation";
import iconeAboutMe from "@/public/images/iconeAboutMe.svg";
import iconeCommuniquer from "@/public/images/iconeCommuniquer.svg";
import iconeProjet from "@/public/images/iconeProjet.svg";
import iconeStack from "@/public/images/iconeStack.svg";
import iconeLogout from "@/public/images/iconeLogout.svg";
import iconeEdition from "@/public/images/iconeEdition.svg";
import AuthContext from "@/app/context/AuthContext";

export default function Header() {
  const router = useRouter();
  const { isAdmin } = useContext(AuthContext);
  const [isMenuBurgerOpen, setIsMenuBurgerOpen] = useState(false);
  const burger_icone = useRef<HTMLDivElement>(null);
  const nav = useRef<HTMLDivElement>(null);
  const [widthDevice, setWidthDevice] = useState(0);
  const mobile = 491;
  const desktop = 1000;
  const isMobile = widthDevice < mobile;

  // met à jour widthDevice au montage + resize
  useEffect(() => {
    const handleResize = () => setWidthDevice(window.innerWidth);
    handleResize(); // initialise la valeur au montage
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Gestion du cas où un admin n’est pas sur desktop
  useEffect(() => {
    if (isAdmin && widthDevice > 0 && widthDevice < desktop) {
      router.replace("/logout");
    }
  }, [widthDevice, isAdmin, router]);

  // toggle du menu burger
  function handleBurgerMenu() {
    setIsMenuBurgerOpen((prev) => !prev);
  }
 
  return (
    // Si admin identifié on charge le style adminStyle
    <header className={`${style.header} ${isAdmin ? style.header_admin : ""} `}>
      {/* Pour accéder à la page login, on double clique sur le h1 */}
      <a
        className={style.logo}
        href="#hero"
        onClick={() => {
          isMenuBurgerOpen && handleBurgerMenu();
          router.push("/");
        }}
        onDoubleClick={() => !isMobile && router.push("/login")}
      >
        Yannick Biot
      </a>
      {/* Le bouton burger est visible en dessous de 768 px */}
      <button
        className={style.burger_menu}
        aria-label={isMenuBurgerOpen ? "Fermer le menu" : "Ouvrir le menu"}
        aria-expanded={isMenuBurgerOpen}
        aria-controls="menu"
        onClick={handleBurgerMenu}
      >
        <span ref={burger_icone} className={`${style.burger_icone} ${isMobile && isMenuBurgerOpen ? style.open : ""}`} aria-hidden="true">
          <div className={style.burger_line}></div>
          <div className={style.burger_line}></div>
          <div className={style.burger_line}></div>
        </span>
      </button>
      {/* En cliquant sur les icones on va appeler la fonction menuChoice qui va render le composant associé à l'id de l'icone */}
      <nav className={`${style.nav} ${isMenuBurgerOpen ? style.nav_open : ""}`} ref={nav}>
        <ul>
          {/* Projets */}
          {!isAdmin && (
            <li onClick={handleBurgerMenu} title="Mes projets">
              <a href="#liste_projetsFavoris">
                <div>
                  <Image
                    src={iconeProjet}
                    alt="lien vers les projets du portfolio"
                    id="menu_portfolio"
                    className={style.icone}
                  />
                </div>
                <p>Projets réalisés</p>
              </a>
            </li>
          )}
          {/* Technos */}
          {!isAdmin && (
            <li onClick={handleBurgerMenu} title="Ma Stack">
              <a href="#MesTechnos">
                <div>
                  <Image
                    src={iconeStack}
                    alt="lien vers les compétences technique du propriétaire du portfolio"
                    id="menu_portfolio"
                    className={style.icone}
                  />
                </div>
                <p>Stack technique</p>
              </a>
            </li>
          )}
          {/* CV */}
          {!isAdmin && (
            <li onClick={handleBurgerMenu} title="Mon CV">
              <a href="/documents/cv.pdf" target="_blank" rel="noopener noreferrer">
                <div>
                  <Image
                    src={iconeAboutMe}
                    id="menu_cv"
                    className={style.logo_cv + " " + style.icone}
                    alt="Lien vers le telechargement de CV"
                  ></Image>
                </div>
                <p>Parcours</p>
              </a>
            </li>
          )}
          {/* Edition */}
          {isAdmin === true && (
            <li onClick={() => router.push("/edition")}>
              <Image
                src={iconeEdition}
                alt="lien vers la page d'édition du portfolio "
                id="menu_edit"
                className={style.icone}
              />
            </li>
          )}
          {/* Logout */}
          {isAdmin === true && (
            <li onClick={() => router.push("/logout")}>
              <Image src={iconeLogout} alt="lien pour logout" id="menu_logout" className={style.icone} />
            </li>
          )}
          {/* Contact */}
          {isAdmin !== true && (
            <li onClick={handleBurgerMenu} title="Me Contacter">
              <a href="#Contact">
                <div>
                  <Image
                    src={iconeCommuniquer}
                    alt="lien pour contacter le propriétaire du portfolio"
                    id="menu_contact"
                    className={style.icone}
                  />
                </div>
                <p>Me contacter</p>
              </a>
            </li>
          )}
        </ul>
      </nav>
    </header>
  );
}
