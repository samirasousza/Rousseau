import React from 'react'
import './Room.css'
import Sidebar from '../../components/Sidebar'

function Room(props) {

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
    <div className='room'>
        <h1 className='room-path'>Home/Setor {props.setor}/{props.sala}</h1>
        <h1 className='room-tittle'>{props.sala}</h1>

        <div className='Container'>
            <div className='info-box'>
                <h1 className='info-tittle'>Informações Gerais</h1>
                <div className='info-dados'>
                    <h1>Localização:</h1>
                    <p>{props.setor} - Prédio 1</p>
                    <h1>Descrição de sala:</h1>
                    <p>Sala de almoxafariado com pouco movimento de pessoas</p>
                    <h1>Intervalo de temperatura ideal:</h1>
                    <p>20°C - 30°C</p>
                    <h1>Intervalo de umidade ideal:</h1>
                    <p>50% - 60%</p>
                    <h1>Quantidade de beacons:</h1>
                    <p>2</p>
                </div>
            </div>
            <div className='graphic-box'>
                <h1 className='graphic-tittle'>Gráficos</h1>
                <div className='filter'>
                    <h1 className='filter-tittle'>Filtro</h1>
                    <h2>input</h2>
                </div>
            </div>
        </div>
    </div>
    </>
  )
}

export default Room