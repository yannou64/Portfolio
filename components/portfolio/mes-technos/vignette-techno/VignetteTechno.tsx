"use client"

import style from "./style.module.scss";
import { useRef } from "react";

export default function VignetteTechno() {
  const technos = useRef<HTMLDivElement>(null);



  return (
    <div className={style.vignetteCategorieTechnos}>
      <h3></h3>
      <div className={style.technos} ref={technos}>
      </div>
    </div>
  );
}