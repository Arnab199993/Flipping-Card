import React, { useState } from 'react'
import Card from './Card/Card'
import  "./FlipableCard.css"
import {CSSTransition} from "react-transition-group"
const FlipableCard = () => {
  const [showfront,setshowfront]=useState(false)
  return (
    <div className={'Flipable-Card-Container'}>
      <CSSTransition
      in={showfront}
      timeout={300}
      classNames={"flip"}
      >
      <Card onClick={(()=>{
        setshowfront(!showfront)
      })}/>
      </CSSTransition>
      
      </div>
  )
}

export default FlipableCard