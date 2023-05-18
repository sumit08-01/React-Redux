import React from "react";
import { StarFill, StarHalf, Star as StarsEmpty } from "react-bootstrap-icons";

export const FiveStarRating = ({ rating }) => {
  const starList = [];

  //Number of full start count
  const starFillCount = Math.floor(rating); // it's will give the integer value if value is point like 4.5 --> 4

  //Number of half star count
  const hasHalfStar = rating - parseInt(rating) >= 0.5; // this will give the point value like 4.5-4 = .5

  // Number of empty start count
  const emptyStarCount = 5 - starFillCount - (hasHalfStar ? 1 : 0); // totla rating 3.5 = 5 - 3 = 2 if half star then -1 = 1

  // if will push fillstar in array
  for (let i = 1; i <= starFillCount; i++) {
    starList.push(<StarFill key={"star-Fill" + i} />);
  }
  // if will push hasHalfStar in array
  for (let i = 1; i <= hasHalfStar; i++) {
    starList.push(<StarHalf key={"star-hald"} />);
  }

  // if will push emptyStarCount in array
  for (let i = 1; i <= emptyStarCount; i++) {
    starList.push(<StarsEmpty key={"star-empty" + i} />);
  }

  return <div>{starList}</div>;
};
