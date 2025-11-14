import Hero from "./hero/Hero";
import MesTechnos from "./mes-technos/MesTechnos";
import ParcoursContact from "./parcours-contact/ParcoursContact";
import ProjetsFavoris from "./projets-favoris/ProjetsFavoris";

export default function Portfolio() {
  return (
    <>
      <Hero />
      <ProjetsFavoris />
      <MesTechnos />
      <ParcoursContact />
    </>
  );
}
