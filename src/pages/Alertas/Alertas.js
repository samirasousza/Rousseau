import React, { useState } from 'react';
import Sidebar from '../../components/Sidebar';
import './Alertas.css';
import Card from './Card';

function Alertas() {

  const filters = [
    {option: 'Essa semana'},
    {option: 'Esse mês'}
  ]

  const [filter, setFilter] = useState('Filtro');

  const [states, setStates] = useState([]);

  const changeFilter = (event) => {
      setFilter(event.target.value);
      setStates(filters.find(filter => filter.option === event.target.value).states)
  };

  return (
    <>
      {/* <Sidebar /> */}
      <div className='alertas'>
      <h1 className='alerta-path'>Alertas</h1>
      <h1 className='alerta-tittle'>Alertas</h1>

      <div className='Container'>
        <div className='alerta-filtros'>
          <label className='filtro-tittle'>Filtro</label>
          <div class="dropdown-filtro">
            <select className="dropdown-btn" id='filtro' value={filter} onChange={changeFilter}>
              {filters.map(filter => (
                  <option value={filter.option} onChange={(event) => setFilter(event.target.value)} select>{filter.option}</option>
              ))}
            </select>
          </div>

          <label className='data-tittle'>Data</label>
          <input type="date" className='data-value' id="data" name="data"/>
        </div>

        <div className='alerta-cards'>
          {/* <Card sala={props.sala} temp={props.temp} umid={props.umid} /> */}
        </div>

        
      </div>

      </div>
    </>
  )
}

export default Alertas