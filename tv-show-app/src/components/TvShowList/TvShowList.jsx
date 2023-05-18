import React from "react";
import s from "./style.module.css";
import { TVShowListItem } from "../TVShowListItem/TVShowListItem";

export const TvShowList = ({ tvshowList, onClickItem }) => {
  console.log(tvshowList);

  return (
    <div>
      <div className={s.title}>You are propably Like this : </div>
      <div className={s.list}>
        {tvshowList.map((tvshow) => {
          return (
            <span className={s.tv_show_item} key={tvshow.id}>
              <TVShowListItem tvshow={tvshow} onClick={onClickItem} />
            </span>
          );
        })}
      </div>
    </div>
  );
};
