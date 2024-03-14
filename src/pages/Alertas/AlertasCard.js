import React from 'react'
import './AlertasCard.css'
import { BsEyeFill } from "react-icons/bs";
import { BiSolidNavigation } from "react-icons/bi";
import { MdOutlineRoomPreferences } from 'react-icons/md';
import { IoWater } from 'react-icons/io5';
import { FaTemperatureFull } from "react-icons/fa6";

function AlertasCard({item}) {
  return (
    <div className='card-alert'>
      <div className='card-alert-top'>
        <h1 className='card-alert-tittle'>{item.alerta}</h1>
        <div className='card-alert-nivel'>
          <h1 className='nivel-text'>nível {item.nivel}</h1>
        </div>
      </div>


      <div className='card-alert-bottom'>
        <div className='cards-alert-info'>
          <div className='card-alert-info'>
              <MdOutlineRoomPreferences className='card-alert-icon'/>     
              <span className='card-alert-text'>{item.id} - {item.sala}</span>
          </div>

          <div className='card-alert-info'>
              <BiSolidNavigation className='card-alert-icon'/>
              <span className='card-alert-text'>{item.setor} - {item.local}</span>
          </div>

          <div className='card-alert-info'>
              <IoWater className='card-alert-icon'/>     
              <span className='card-alert-text'>Umidade: {item.umid}%</span>
          </div>

          <div className='card-alert-info'>
              <FaTemperatureFull className='card-alert-icon'/>     
              <span className='card-alert-text'>Temperatura: {item.temp}°C</span>
          </div>
        </div>

        <div className='card-alert-tempo'>
          <span className='alert-data'>{item.data}</span>
          <span className='alert-hora'>{item.hora}</span>
        </div>

      </div>
    </div>
  )
}

export default AlertasCard;