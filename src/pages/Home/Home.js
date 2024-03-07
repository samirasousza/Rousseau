import React from 'react'
import Card from './Card'
import './Home.css'
import Sidebar from '../../components/Sidebar'
import { TbTriangleInvertedFilled } from "react-icons/tb"; 
import Alerts from './Alerts';


const Home = (props) => {
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
                <Card sala={props.sala} temp={props.temp} umid={props.umid} />
                <Card sala={props.sala} temp={props.temp} umid={props.umid} />
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