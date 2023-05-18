import React from "react";
import s from "./style.module.css";
import { SMALL_IMG_COVER_BASE_URL } from "../../config";

const MAX_TITLE_CHAR = 20;

export const TVShowListItem = ({ tvshow, onClick }) => {
  const onClick_ = () => {
    onClick(tvshow);
  };
  console.log(tvshow);
  return (
    <div className={s.container} onClick={onClick_}>
      <img
        className={s.img}
        alt={tvshow.name}
        src={SMALL_IMG_COVER_BASE_URL + tvshow.backdrop_path}
      />
      <div className={s.name}>
        {tvshow.name > MAX_TITLE_CHAR
          ? tvshow.name.slice(0, MAX_TITLE_CHAR) + "..."
          : tvshow.name}
      </div>
    </div>
  );
};
