import React from "react";
import s from "./style.module.css";

export const ButtonPrimary = ({ children, onClick, isDisable }) => {
  return (
    <button
      disabled={isDisable}
      onClick={onClick}
      type="button"
      className={`btn btn-primary ${s.container}`}
    >
      {children}
    </button>
  );
};
