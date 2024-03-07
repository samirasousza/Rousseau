import React from 'react'
import './Card.css'
import { BsEyeFill } from "react-icons/bs";
import { AiFillInfoCircle } from "react-icons/ai";

function Card(props) {
  return (
        <div className='card'>
            <div className='card-setor'>
                <h2>{props.sala}</h2>
                <BsEyeFill className='icon-eye' />
                <div className='card-tags'>
                    <div className='card-tag'>
                        <h1>Temperatura</h1>
                        <p>{props.temp}°C</p>
                        <AiFillInfoCircle className='icon-info' />
                    </div>

                    <div className='card-tag'>
                        <h1>Umidade</h1>
                        <p>{props.umid}%</p>
                        <AiFillInfoCircle className='icon-info' />
                    </div>
                </div>
            </div>
        </div>

  )
}

export default Card