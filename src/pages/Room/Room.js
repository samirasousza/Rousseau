import React, { useState } from 'react'
import './Room.css'
import Sidebar from '../../components/Sidebar'
// import Dropdown from './Dropdown'


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
      
    const filters = [
      {option: 'Temperatura'},
      {option: 'Umidade'}
    ]

    const [filter, setFilter] = useState('Filtro');

    const [states, setStates] = useState([]);

    const changeFilter = (event) => {
        setFilter(event.target.value);
        setStates(filters.find(filter => filter.option === event.target.value).states)
    };

    // document.getElementById('filtro').addEventListener('change', function() {
    //   var filtroSelecionado = this.value;
    //   document.getElementById('opcao1').style.display = 'none';
    //   document.getElementById('opcao2').style.display = 'none';
    //   document.getElementById('opcao3').style.display = 'none';
    //   document.getElementById(filtroSelecionado).style.display = 'block';
    // });


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
                  <div className='info-dado'>
                    <h1 className='dado-tittle'>Localização:</h1>
                    <h1 className='dado-text'>{props.setor} - Prédio 1</h1>
                  </div>
                  <div className='info-dado'>
                    <h1 className='dado-tittle'>Descrição de sala:</h1>
                    <h1 className='dado-text'>Sala de almoxafariado com pouco movimento de pessoas</h1>
                  </div>
                  <div className='info-dado'>
                    <h1 className='dado-tittle'>Intervalo de temperatura ideal:</h1>
                    <h1 className='dado-text'>20°C - 30°C</h1>
                  </div>
                  <div className='info-dado'>
                    <h1 className='dado-tittle'>Intervalo de umidade ideal:</h1>
                    <h1 className='dado-text'>50% - 60%</h1>
                  </div>
                  <div className='info-dado'>
                    <h1 className='dado-tittle'>Quantidade de beacons:</h1>
                    <h1 className='dado-text'>2</h1>
                  </div>
                </div>
            </div>

            <div className='info-box'>
              <h1 className='info-tittle'>Gráficos</h1>
              <div className='info-dados'>
                <div className='info-dado'>
                  <h1 className='dado-tittle'>Filtro</h1>
                  <div class="dropdown">
                    <select className="dropdown-btn" id='filtro' value={filter} onChange={changeFilter}>
                      {filters.map(filter => (
                          <option value={filter.option} onChange={(event) => setFilter(event.target.value)} select>{filter.option}</option>
                      ))}
                    </select>
                  </div>
                </div>
              </div>
              {(filter==='Temperatura') && (
                      <div id='Temperatura1'>
                        <div className='graphic-box'>
                          <div className='graphic-data'>
                            <div className='graphic-media'>temp</div>
                          </div>
                          <div className='graphic-data'>
                            <div className='graphic-padrao'></div>
                          </div>
                        </div>
                      </div>
                      )}
                    
                    {(filter==='Umidade') && (
                    <div id='Umidade1'>
                      <div className='graphic-box'>
                        <div className='graphic-data'>
                          <div className='graphic-media'></div>
                        </div>
                        <div className='graphic-data'>
                          <div className='graphic-padrao'>umid</div>
                        </div>
                      </div>
                    </div>
                  )}
              

          </div>
        </div>
    </div>
    </>
  )
}

export default Room