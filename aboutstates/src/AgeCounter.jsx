import React from "react";
import { useState } from "react";
import DisplayAge from "./DisplayAge";

export const AgeCounter = () => {
  let [age, setAge] = useState(30);

  function increaseAge() {
    setAge(age + 1);
    console.log(age);
  }
  return (
    <div>
      <button onClick={increaseAge}>Increase Age</button>
      <DisplayAge age={age} />
    </div>
  );
};
