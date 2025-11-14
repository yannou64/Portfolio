import style from "./style.module.scss";
import Image from "next/image";

interface techno {
  image: string;
  alt_img: string;
  _id: string;
}

interface vignetteP {
  titre: string;
  description: string;
  image: string;
  technos: Array<techno>;
  alt: string;
}

export default function VignetteProjet({ titre, description, image, technos, alt }: vignetteP) {
  return (
    <article className={style.vignette}>
      <div className={style.presentation_projet}>
        <h3>{titre}</h3>
        <p>{description}</p>
        <div className={style.listeTechno}>
          {technos.map(techno => (
            <div key={techno._id} className={style.container_image}>
              <Image
                src={process.env.NEXT_PUBLIC_API_URL + "/" + techno.image}
                alt={techno.alt_img}
              />
            </div>
          ))}
        </div>
      </div>
      <a className={style.image_lien_projet} href="#">
        <Image alt={alt} src={image} loading="lazy" />
      </a>
      {/* Pour le responsive  */}
      <div className={style.listeTechno_second_view}>
        {technos.map(techno => (
          <div key={techno._id} className={style.container_image}>
            <Image src={process.env.NEXT_PUBLIC_API_URL + "/" + techno.image} alt={techno.alt_img} />
          </div>
        ))}
      </div>
    </article>
  );
}
