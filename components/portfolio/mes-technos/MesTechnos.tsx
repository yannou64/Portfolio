import style from "./style.module.scss"
import VignetteTechno from "./vignette-techno/VignetteTechno";

export default function MesTechnos({ technosByCategorie = [] }) {
  return (
    <section className={style.MesTechnos}>
      <h2>Ma Stack</h2>
      <div className={style.container_vignetteTechno}>
        {technosByCategorie.map((categorieAndHisTechnos, index) => (
          <VignetteTechno key={index} categorie={categorieAndHisTechnos.categorie} listeTechnos={categorieAndHisTechnos.technos} />
        ))}
      </div>
    </section>
  );
}