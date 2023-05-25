import React, { useState } from "react";
import s from "./style.module.css";
import { Trash } from "react-bootstrap-icons";

export const TextCard = ({
  title,
  subtitle,
  content,
  onClick,
  onClickTrash,
}) => {
  const [isCardHovered, setIsCardHovered] = useState(false);
  const [isTrashHovered, setIsTrashHovered] = useState(false);

  function onClickTrash_(e) {
    onClickTrash(); // This function is helpFull for stop the trash Bubbling
    e.stopPropagation();
  }
  return (
    <div
      onClick={onClick}
      className={`card ${s.container}`}
      style={{ borderColor: isCardHovered ? "#0d6efd" : "transparent" }}
      onMouseEnter={() => setIsCardHovered(true)} // when mouse enter border become blue
      onMouseLeave={() => setIsCardHovered(false)} // when mouse leave border become normal
    >
      <div className="card-body">
        <div className={`${s.title_row}`}>
          <h5 className="card-title">{title}</h5>
          <Trash
            size={20}
            onMouseEnter={() => setIsTrashHovered(true)}
            onMouseLeave={() => setIsTrashHovered(false)}
            style={{ color: isTrashHovered ? "#FF7373" : "b8b8b8" }}
            onClick={onClickTrash_}
          />
        </div>
        <h6 className={`card-subtitle mb-2 text-muted`}>{subtitle}</h6>
        <p className={`card-text ${s.text_content}`}>{content}</p>
      </div>
    </div>
  );
};
