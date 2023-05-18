import React from "react";
import s from "./style.module.css";

export const Logo = ({ img, name, subtitle }) => {
  return (
    <>
      <div className={s.container}>
        <img className={s.img} src={img} alt="logo" />
        <span className={s.title}>{name}</span>
      </div>
      <div className={s.subtitle}>{subtitle}</div>
    </>
  );
};
