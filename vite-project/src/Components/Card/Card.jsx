import React from 'react'
import "./Card.css"
import "./Flip-transition.css"
const Card = ({onClick}) => {
  return (
    <div className={"Card"} onClick={onClick}>
        <div className={"Card-Back"}>Back</div>
        <div className={"Card-Front"}>Front</div>
    </div>
  )
}

export default Card