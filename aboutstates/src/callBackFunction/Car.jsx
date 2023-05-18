import React from "react";

const Car = (props) => {
  return (
    <div>
      <p
        onClick={() => {
          props.onCarClick(2);
        }}
      >
        I am the {"<Car/>"}
      </p>
    </div>
  );
};
export default Car;
