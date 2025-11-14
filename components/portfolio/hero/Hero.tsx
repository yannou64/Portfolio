import style from "./style.module.scss";
import Reseaux from "@/components/reseaux/Reseaux";
import Image from "next/image";
import heroImage from "@/public/images/avatarDesktop.webp";

export default function Hero() {
  return (
    <section className={style.hero}>
      <div className={style.containerImage}>
        <Image src={heroImage} alt="Mon avatar pour le hero du portfolio" priority />
      </div>
      <div className={style.accroche}>
        <h1 className={style.titre}>Développeur web</h1>
        <p className={style.texte}>
          Passionné par le développement numérique, j’ai entamé ma reconversion en mars 2024.
          Curieux et motivé, j’adore coder et relever des défis. Envie de collaborer avec quelqu’un
          de positif et enthousiaste ? Parlons-en !
        </p>
        <div className={style.alerte}>
          <div className={style.animation}></div>
          <div>Prêt pour de nouvelles opportunités</div>
        </div>
        <Reseaux />
      </div>
    </section>
  );
}
