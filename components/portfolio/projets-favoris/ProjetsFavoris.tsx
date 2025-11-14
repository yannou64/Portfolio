import style from "./style.module.scss";
// import ProjetCard from "./projet-card/ProjetCard"

export default function ProjetsFavoris() {
  return (
    <section className={style.liste_projetsFavoris}>
      <h2>Mes Projets</h2>
      <div className={style.container_vignetteProjet}>
        {/* {projets.map((projet) => (
          <ProjetCard
            key={projet._id}
            titre={projet.titre_projet}
            description={projet.description_projet}
            image={import.meta.env.VITE_API_URL + "/" + projet.image_projet}
            alt={projet.alt_img_projet}
            technos={projet.ListeTechnos}
          />
        ))} */}
      </div>
    </section>
  );
}