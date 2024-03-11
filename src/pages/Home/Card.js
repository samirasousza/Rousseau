import React from 'react'
import './Card.css'
import { BsEyeFill } from "react-icons/bs";
import { AiFillInfoCircle } from "react-icons/ai";

function Card({item}) {
  return (
        <div className='card-setor'>
            <h2 className='card-setor-tittle'>{item.id} - {item.sala}</h2>
            <BsEyeFill className='icon-eye' />
            <div className='card-tags'>
                <div className='card-tag'>
                    <AiFillInfoCircle className='icon-info' />
                    <div className='tag-dados'>
                        <h1 className='titulo'>Temperatura</h1>
                        <p className='dado'>{item.temp}°C</p>
                    </div>
                </div>

                <div className='card-tag'>
                    <AiFillInfoCircle className='icon-info' />
                    <div className='tag-dados'>
                        <h1 className='titulo'>Umidade</h1>
                        <p className='dado'>{item.umid}%</p>
                    </div>
                </div>
            </div>
        </div>
  )
}

export default Card