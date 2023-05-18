import React from "react";
import s from "./style.module.css";
import { FiveStarRating } from "../fiveStarRating/FiveStarRating";

export const TVShowDetails = ({ tvshow }) => {
  const rating = tvshow.vote_average / 2;
  return (
    <div>
      <div className={s.title}>{tvshow.name}</div>
      <div className={s.rating_container}>
        <FiveStarRating rating={rating} />
        <span className={s.rating}>{rating}/5</span>
      </div>
      <div className={s.overview}>{tvshow.overview}</div>
    </div>
  );
};
