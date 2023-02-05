import React, { useState, useEffect } from "react";
import Card from "./Card/Card";
import "./FlipableCard.css";
import { CSSTransition } from "react-transition-group";
import axios from "axios"
const FlipableCard = () => {
  const [arr, setarr] = useState([])
  const callapi = (() => {
    axios.get("https://rickandmortyapi.com/api/character").then((response) => {
      console.log(response.data.results)
      setarr(response.data.results)
    }).catch((error) => {
      console.log(error)
    })
  })
  useEffect(() => {
    callapi()
  }, [])
  const [showfront, setshowfront] = useState(true);
  return (
    <div className={"Flipable-Card-Container"}>
      <CSSTransition in={showfront} timeout={300} classNames={"flip"}>
        <Card
          onClick={() => {
            setshowfront(!showfront);
            // {
            //   arr.map((ele) => {
            //     return <Card name={ele.name} />
            //   })
            // }
          }}

        />
      </CSSTransition>
    </div>
  );
};

export default FlipableCard;
