import React from 'react'
import './Card.css'
import { BsEyeFill } from "react-icons/bs";
import { BiSolidNavigation } from "react-icons/bi";

function Card(props) {
  return (
    <div className='card-alert'>
        <h2 className='card-alert-tittle'>{props.id} - {props.sala}</h2>
        <BsEyeFill className='icon-eye' />
        <div className='card-nav'>
            <BiSolidNavigation className='icon-nav'/>                        
            <h1 className='text-nav'>Setor {props.setor} - {props.local}</h1>
        </div>
    </div>
  )
}

export default Card