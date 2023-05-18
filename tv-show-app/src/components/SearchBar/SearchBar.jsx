import React, { useState } from "react";
import s from "./style.module.css";
import { Search as SearchIcon } from "react-bootstrap-icons";

export const SearchBar = ({ onSubmit }) => {
  const [value, setValue] = useState("");

  function changeHandler(e) {
    console.log(e.target.value);
    setValue(e.target.value);
  }

  function submit(e) {
    if (e.key === "Enter" && e.target.value.trim() !== "") {
      onSubmit(e.target.value);
      setValue("");
    }
  }
  return (
    <div>
      <SearchIcon size={27} className={s.icon} />
      <input
        onKeyUp={submit}
        onChange={changeHandler}
        className={s.input}
        type="text"
        value={value}
        placeholder={"Search a show you like"}
      />
    </div>
  );
};
