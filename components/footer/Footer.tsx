"use client";

import style from "./footer.module.scss";
import Reseaux from "@/components/reseaux/Reseaux";
import { useState, useEffect } from "react";
import Link from "next/link";

export default function Footer() {
  const [year, setYear] = useState(new Date().getFullYear());

  useEffect(() => {
     // défilement en douceur vers le haut
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  return (
    <footer className={style.footer}>
      <p>
        Biot Yannick | {year} - <Link href="/conditions-generales">Conditions Générales</Link>
      </p>
      <Reseaux dark={true} />
      <div>
        Icons made from <a href="https://www.onlinewebfonts.com/icon">svg icons</a>is licensed by CC BY 4.0
      </div>
    </footer>
  );
}
