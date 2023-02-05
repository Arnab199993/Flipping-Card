import React from "react";
import "./Card.css";
import "./Flip-transition.css";

const Card = ({ onClick }, props) => {
  return (
    <div className={"Card"} onClick={onClick}>
      <div className={"Card-Back"}>Back Child</div>
      {/* <div className={"Card-Front"}>{props.name}</div> */}
      <div className={"Card-Front"}>Front Child</div>
    </div>
  );
};

export default Card;
