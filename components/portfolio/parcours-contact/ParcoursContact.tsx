import style from "./style.module.scss";
import Contact from "@/components/portfolio/parcours-contact/contact/Contact";
import CTAParcours from "./cta-parcours/CtaParcours";

export default function ParcoursContact() {
  return (
    <div className={style.container_pc}>
      <div className={style.container_p}>
        <CTAParcours />
      </div>
      <div className={style.container_c}>
        <Contact />
      </div>
    </div>
  );
}
