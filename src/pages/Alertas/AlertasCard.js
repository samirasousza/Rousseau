import React from 'react'
import './AlertasCard.css'
import { BsEyeFill } from "react-icons/bs";
import { BiSolidNavigation } from "react-icons/bi";
import { MdOutlineRoomPreferences } from 'react-icons/md';
import { IoWater } from 'react-icons/io5';
import { FaTemperatureFull } from "react-icons/fa6";

function AlertasCard({alerta}) {

  // const tittleAlerta = (tempAtual, tempMax, umidAtual, umidMax) => {
  //   const nivel = parseInt(numNivel, 10);

  //   if (nivel === 1) {
  //     return 'baixo';
  //   } else if (nivel === 2) {
  //     return 'médio';
  //   } else if (nivel === 3) {
  //     return 'alto';
  //   }
  // }

  const nivelAlerta = (numNivel) => {
    const nivel = parseInt(numNivel, 10);

    if (nivel === 1) {
      return 'baixo';
    } else if (nivel === 2) {
      return 'médio';
    } else if (nivel === 3) {
      return 'alto';
    }
  }

  return (
    <div className='card-alert'>
      <div className='card-alert-top'>
        <h1 className='card-alert-tittle'>item.alerta</h1>
        <div className='card-alert-nivel'>
          <h1 className='nivel-text'>nível {nivelAlerta(alerta.NIVEL)}</h1>
        </div>
      </div>


      <div className='card-alert-bottom'>
        <div className='cards-alert-info'>
          <div className='card-alert-info'>
              <MdOutlineRoomPreferences className='card-alert-icon'/>     
              <span className='card-alert-text'>{alerta.IS_SALA} - {alerta.NOME_SALA}</span>
          </div>

          <div className='card-alert-info'>
              <BiSolidNavigation className='card-alert-icon'/>
              <span className='card-alert-text'>item.setor - item.local</span>
          </div>

          <div className='card-alert-info'>
              <IoWater className='card-alert-icon'/>     
              <span className='card-alert-text'>Umidade: {alerta.UMID_MAX}%</span>
          </div>

          <div className='card-alert-info'>
              <FaTemperatureFull className='card-alert-icon'/>     
              <span className='card-alert-text'>Temperatura: {alerta.TEMP_MAX}°C</span>
          </div>
        </div>

        <div className='card-alert-tempo'>
          <span className='alert-data'>{alerta.DATA_CRIACAO}</span>
          <span className='alert-hora'>{alerta.hora}</span>
        </div>

      </div>
    </div>
  )
}

export default AlertasCard;