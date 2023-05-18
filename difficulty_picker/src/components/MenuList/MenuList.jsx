import React from "react";
import s from "./style.module.css";
import { MenuListItem } from "../MenuListitems/MenuListItem";
import { DIFFICULTIES } from "./constant";

export const MenuList = (props) => {
  return (
    <div className={s.container}>
      {DIFFICULTIES.map((difficulty) => {
        return (
          <MenuListItem
            difficulty={difficulty}
            isSelected={props.difficulty === difficulty}
            onClick={props.onItemClick}
          />
        );
      })}
      {/* <MenuListItem
        difficulty="Low"
        isSelected={props.difficulty === "Low"}
        onClick={props.onItemClick}
      />
      <MenuListItem
        difficulty="Medium"
        isSelected={props.difficulty === "Medium"}
        onClick={props.onItemClick}
      />
      <MenuListItem
        difficulty="High"
        isSelected={props.difficulty === "High"}
        onClick={props.onItemClick}
      />
      <MenuListItem
        isSelected={props.difficulty === "Insane"}
        difficulty="Insane"
        onClick={props.onItemClick}
      /> */}
    </div>
  );
};
