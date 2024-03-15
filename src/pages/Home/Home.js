import React, { useState, useEffect } from 'react'
import Card from './Card'
import './Home.css'
import Sidebar from '../../components/Sidebar'
import { TbTriangleInvertedFilled } from "react-icons/tb"; 
import { BiSolidError } from "react-icons/bi";
import CardAlerts from './CardAlerts';
import { apiConnection } from '../../config/httpConnection';


const Home = () => {

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

    // id_sala
    // id_setor
    // nome_sala
    // desc_sala
    // temp_max
    // temp_min
    // umid_max
    // umid_min
    // status_sala

  const room = [room1, room2, room3, room4, room5]
  // const [room, setRoom] = useState([])

  const [salas, setRooms] = useState([]);
  const [setores, setSetores] = useState([]);
  const [alertas, setAlertas] = useState([]);

  useEffect(() => {
    getSalas();
    getSetores();
    getAlertas();
  }, []);

  async function getSalas() {
    const response = await apiConnection.get(`/get-salas`);
    console.log(response);
    setRooms(response.data);
  };

  async function getSetores() {
    const resposta = await apiConnection.get('/get-setores');
    console.log(resposta);
    setSetores(resposta.data)
  };

  async function getAlertas() {
    const response = await apiConnection.get(`/get-alertas`);
    console.log(response);
    setAlertas(response.data);
  };

  return (
    <>
    <Sidebar />
    <div className='Home'>
        <h1 className='path' >Home</h1>
        <h1 className='tittle-home' >Visão Geral</h1>

        <div className='Container'>
            <div className='setor'>
              <TbTriangleInvertedFilled className='setor-icon-left' />
              <h1 className='setor-tittle'>Setor callidusprops</h1>
              <TbTriangleInvertedFilled className='setor-icon-right' />
            </div>
            <div className='Container-room-alerts'>
              <div className='home-rooms'>
                  {/* {room.map((item) => (<Card item={item}/>))} */}
                  {salas.map(item => (<Card item={item} key={item.ID_SALA} />))}
              </div>
              <div className='home-alerts'>
                <div className='alerts-top'>
                  <BiSolidError className='alerts-icon' />
                  <h1 className='alerts-tittle'>Alertas</h1>
                </div>
                <div className='alerts-cards'>
                  {/* TEM QUE PEGAR O ID_SALA DO ALERTA E FAZER UMA BUSCAR NAS SALAS PRA MOSTAR AQUI */}
                  {salas.map(item => (<CardAlerts item={item} key={item.ID_SALA} />))}
                </div>
              </div>
            </div>
        </div>
    </div>
    </>
  )
}

export default Home