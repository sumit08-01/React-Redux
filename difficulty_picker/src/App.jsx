import { DisplayDifficulty } from "./components/DisplayDifficulty/DisplayDifficulty";
import { MenuList } from "./components/MenuList/MenuList";
import { MenuListItem } from "./components/MenuListitems/MenuListItem";
import s from "./style.module.css";
import { useState } from "react";

function App() {
  const [currentDifficulty, setCurrentDifficulty] = useState("");

  const onMenuListItemClick = (difficulty) => {
    setCurrentDifficulty(difficulty);
  };
  return (
    <>
      <h1>Select your React Difficulty</h1>
      <div className={s.workSpace}>
        {/* <MenuListItem difficulty="low" /> */}
        <MenuList onItemClick={onMenuListItemClick} />
        <DisplayDifficulty difficulty={currentDifficulty} />
      </div>
    </>
  );
}

export default App;
