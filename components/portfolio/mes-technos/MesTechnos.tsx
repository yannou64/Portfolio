import style from "./style.module.scss"
// import VignetteTechno from "./vignette-techno/VignetteTechno";

interface MesTechnos {
  technosByCategorie: Array<categorieAndHisTechnos>;
} 

interface categorieAndHisTechnos {
  categorie: string,
  technos: Array<techno>
}

interface techno {
  test: string
}

export default function MesTechnos() {
  return (
    <section className={style.MesTechnos}>
      <h2>Ma Stack</h2>
      <div className={style.container_vignetteTechno}>
        {/* {technosByCategorie.map((categorieAndHisTechnos: categorieAndHisTechnos, index) => (
          <VignetteTechno key={index} categorie={categorieAndHisTechnos.categorie} listeTechnos={categorieAndHisTechnos.technos} />
        ))} */}
      </div>
    </section>
  );
}