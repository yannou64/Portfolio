import style from "./style.module.scss";

interface link {
    id: string | undefined  ,
    lien: string | undefined ,
    rel: string | undefined , 
    className: string | undefined ,
    titre: string | undefined ,
    type: string | undefined 
}

export default function MyButton({ id, lien, titre, className }: link) {
  return (
    <a className={style.myLink} href={lien} target="_blank">
      <button form={id} className={`${style.myButton} + " " + ${className}`}>{titre}</button>
    </a>
  );
}