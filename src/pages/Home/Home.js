import React, { useState } from 'react'
import Card from './Card'
import './Home.css'
import Sidebar from '../../components/Sidebar'
import { TbTriangleInvertedFilled } from "react-icons/tb"; 
import { BiSolidError } from "react-icons/bi";
import CardAlerts from './CardAlerts';


const Home = (props) => {

  const room1 = {
    id: '001',
    setor:'Callidus',
    sala: 'Administração',
    temp: '25',
    umid: '40',
    local: 'Prédio 7'
    }

  const room2 = {
    id: '002',
    setor:'Callidus',
    sala: 'Almoxafariado',
    temp: '32',
    umid: '40',
    local: 'Prédio 40000000000'
    }
  
    const room3 = {
      id: '003',
      setor:'Callidus',
      sala: 'Gerência de redes',
      temp: '22',
      umid: '40',
      local: 'Prédio 10'
    }

    const room4 = {
      id: '004',
      setor:'Callidus',
      sala: 'Sala dos professores',
      temp: '20',
      umid: '43',
      local: 'Prédio 900'
    }

    const room5 = {
      id: '005',
      setor:'Callidus',
      sala: 'Banheiro',
      temp: '23',
      umid: '50',
      local: 'Prédio 3'
    }

  const room = [room1, room2, room3, room4, room5]
  // const [room, setRoom] = useState([])

  return (
    <>
    <Sidebar />
    <div className='Home'>
        <h1 className='path' >Home</h1>
        <h1 className='tittle-home' >Visão Geral</h1>

        <div className='Container'>
            <div className='setor'>
              <TbTriangleInvertedFilled className='setor-icon-left' />
              <h1 className='setor-tittle'>Setor {props.setor}</h1>
              <TbTriangleInvertedFilled className='setor-icon-right' />
            </div>
            <div className='Container-room-alerts'>
              <div className='home-rooms'>
                  {room.map((item) => (<Card item={item}/>))}
                  {/* <Card sala={props.sala} temp={props.temp} umid={props.umid} /> */}
                  {/* <Card sala={props.sala} temp={props.temp} umid={props.umid} /> */}
              </div>
              <div className='home-alerts'>
                <div className='alerts-top'>
                  <BiSolidError className='alerts-icon' />
                  <h1 className='alerts-tittle'>Alertas</h1>
                </div>
                <div className='alerts-cards'>
                  {room.map((item) => (<CardAlerts item={item}/>))}
                </div>
              </div>
            </div>
        </div>
    </div>
    </>
  )
}

export default Home