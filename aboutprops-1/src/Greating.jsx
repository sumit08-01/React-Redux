import React from "react";

export const Greating = (props) => {
  console.log(props);
  return (
    <div>
      <h1>
        Hi this is receiving props{" "}
        <i>
          FirstName : {props.firstName} LastName : {props.lastName} Age :{" "}
          {props.age}
        </i>
        {props.children}
      </h1>
    </div>
  );
};
