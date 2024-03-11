import React from 'react'
import './CardAlerts.css'
import { BsEyeFill } from "react-icons/bs";
import { BiSolidNavigation } from "react-icons/bi";

function CardAlerts({item}) {
  return (
    <div className='card-alert'>
        <h2 className='card-alert-tittle'>{item.id} - {item.sala}</h2>
        <BsEyeFill className='icon-eye' />
        <div className='card-nav'>
            <BiSolidNavigation className='icon-nav'/>                        
            <h1 className='text-nav'>Setor {item.setor} - {item.local}</h1>
        </div>
    </div>
  )
}

export default CardAlerts