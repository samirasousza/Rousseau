import React from 'react'
import './CardAlerts.css'
import { BsEyeFill } from "react-icons/bs";
import { AiFillInfoCircle } from "react-icons/ai";
import { BiSolidNavigation } from "react-icons/bi";

function CardAlerts(props) {
  return (
    <div className='card-alert'>
        <h2>{props.sala}</h2>
        <BsEyeFill className='icon-eye' />
        <div className='card-nav'>
            <BiSolidNavigation className='icon-nav'/>                        
            <h1>Setor {props.setor} - Prédio {props.predio}</h1>
        </div>
    </div>
  )
}

export default CardAlerts