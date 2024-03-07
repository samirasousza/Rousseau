import React from 'react'
import Card from './Card'
import './Home.css'
import Sidebar from '../../components/Sidebar'


const Home = (props) => {
  return (
    <div className='Container'>
      <Sidebar />
      <h1>Visão Geral</h1>
      <div className='cards'>
      <Card name={props.name} temp={props.temp} umid={props.umid} />
      </div>
    </div>
  )
}

export default Home