import React, { useEffect, useState } from 'react'
import './CardAlerts.css'
import { BsEyeFill } from "react-icons/bs";
import { BiSolidNavigation } from "react-icons/bi";
import { apiConnection } from '../../config/httpConnection';

function CardAlerts({item}) {

  // const [alertas, setAlertas] = useState([]);

  // useEffect(() => {
  //   getAlertas();
  // }, []);

  // async function getAlertas() {
  //   const response = await apiConnection.get(`/get-alertas`);
  //   console.log(response);
  //   setAlertas(response.data);
  // };

  return (
    <div className='card-alert-home'>
        <h2 className='card-alert-tittle-home'>{item.ID_SALA} - {item.NOME_SALA}</h2>
        <BsEyeFill className='icon-eye' />
        <div className='card-nav'>
            <BiSolidNavigation className='icon-nav'/>                        
            <h1 className='text-nav'>Setor {item.ID_SETOR} - Prédio 1</h1>
        </div>
    </div>
  )
}

export default CardAlerts