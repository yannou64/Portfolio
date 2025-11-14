import style from "./style.module.scss";
import MyButton from "@/components/myButton/MyButton";
import photoId from "@/public/images/photoIdentite.png";
import Image from "next/image.js";

// erratum
export default function CTAParcours() {
  return (
    <section id="CTAParcours" className={style.CTAParcours}>
      <h2>Mon parcours</h2>
      <div className={style.Description_parcours}>
        <div className={style.photoId}>
          <Image src={photoId} alt="Photo d'identité de yannick biot"/>
        </div>
        <ul>
          <li>
            <strong>2025 - </strong>RNCP Développeur Web Full Stack
          </li>
          <li>
            <strong>2003 -</strong> DUT Technique Commercial
          </li>
          <li>
            <strong>2002 -</strong> DUT Génie Electrique Info Industriel
          </li>
        </ul>
      </div>
      <MyButton lien="/documents/cv.pdf" rel="noopener noreferrer" titre="En savoir +" className={style.myButton} id={undefined} type={undefined}/>
    </section>
  );
}
