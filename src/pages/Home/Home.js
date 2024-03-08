import React, { useState } from 'react'
import Card from './Card'
import './Home.css'
import Sidebar from '../../components/Sidebar'
import { TbTriangleInvertedFilled } from "react-icons/tb"; 
import Alerts from './Alerts';


const Home = (props) => {

  const room1 = {
    id: '001',
    setor:'Callidus',
    sala: 'Administração',
    temp: '25',
    umid: '40'
    }

  const room2 = {
    id: '002',
    setor:'Callidus',
    sala: 'Almoxafariado',
    temp: '32',
    umid: '40'
    }
  
    const room3 = {
      id: '003',
      setor:'Callidus',
      sala: 'Gereência de redes',
      temp: '22',
      umid: '40'
    }

    const room4 = {
      id: '004',
      setor:'Callidus',
      sala: 'Sala 4',
      temp: '20',
      umid: '43'
    }

    const room5 = {
      id: '005',
      setor:'Callidus',
      sala: 'Banheiro',
      temp: '23',
      umid: '50'
    }

  const room = [room1, room2, room3, room4, room5]
  // const [room, setRoom] = useState([])

  return (
    <>
    <Sidebar />
    <div className='Home'>
        <h1 className='path' >Home</h1>
        <h1 className='tittle' >Visão Geral</h1>

        <div className='Container'>
            <div className='setor'>
              <TbTriangleInvertedFilled />
              <h1>Setor {props.setor}</h1>
              <TbTriangleInvertedFilled />
            </div>
            <div className='rooms'>
                {room.map((item) => (<Card item={item}/>))}
                {/* <Card sala={props.sala} temp={props.temp} umid={props.umid} /> */}
                {/* <Card sala={props.sala} temp={props.temp} umid={props.umid} /> */}
            </div>
            <div className='alerts'>
                <Alerts sala='002 - Almoxarifado' setor='X' predio='1'/>
            </div>
        </div>
    </div>
    </>
  )
}

export default Home