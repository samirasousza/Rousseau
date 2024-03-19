import React, { useEffect, useState } from 'react';
import Sidebar from '../../components/Sidebar';
import './Alertas.css';
import Card from './AlertasCard';
import AlertasCard from './AlertasCard';
import Modal from './Modal';
import { apiConnection } from '../../config/httpConnection';

function Alertas() {

  // Funções do Banco de dados

  const [alertas, setAlertas] = useState([]);

  useEffect(() => {
    getAlertas();
  }, []);

  async function getAlertas() {
    const response = await apiConnection.get(`/get-alertas`);
    console.log(response);
    setAlertas(response.data);
  };

  // Informações alertas

  const alerts = [
    {id: '001', setor:'Callidus', sala: 'Administração', temp: '36', umid: '38', local: 'Prédio 1', data: '14/03/2024', hora: '13:35h', alerta: 'Temperatura alta', nivel: 'alto'},
    {id: '002', setor:'Callidus', sala: 'Almoxafariado', temp: '38', umid: '42', local: 'Prédio 2', data: 'x/x/x', hora: 'x:x', alerta: 'Umidade alta', nivel: 'médio'},
    {id: '003', setor:'Callidus', sala: 'Gerência de Redes', temp: '40', umid: '42', local: 'Prédio 1', data: 'x/x/x', hora: 'x:x', alerta: 'Temperatura alta', nivel: 'médio'}
  ]

  // Funções filtros

  const filters = [
    {option: ''},
    {option: 'Temperatura'},
    {option: 'Umidade'},
    {option: 'Setor'},
    {option: 'Nível de urgência'},
  ]

  const [filter, setFilter] = useState('Filtro');

  const [states, setStates] = useState([]);

  const changeFilter = (event) => {
      setFilter(event.target.value);
      setStates(filters.find(filter => filter.option === event.target.value).states)
  }

  // Funções do checkbox 

  const [checked, setChecked] = useState(false)

  const toggleCheck = () => {
    setChecked(!checked)
  }

  const checkedClass = checked ? 'checked' : '';

  const containerClass = 'checkbox'`checkbox ${checkedClass}`.trim()

  const optionsTemp = [
    { id: 1, label: 'Acima', isChecked: false },
    { id: 2, label: 'Abaixo', isChecked: false },
  ];

  const [option, setOption] = useState([]);

  
  const handleCheckboxChange = (optionId) => {
    const updatedOptions = optionsTemp.map(option =>
      option.id === optionId ? { ...option, isChecked: !option.isChecked } : option
    );
    setOption(updatedOptions);
  }

  // Funções do Modal

  const [openModal, setOpenModal] = useState(false)

  return (
    <div className='page'>
      <Sidebar />
      <div className='alertas'>
        <h1 className='alerta-path'>Alertas</h1>
        <h1 className='alerta-tittle'>Alertas</h1>
      </div>

      <div className='Container'>
        <div className='alerta-filtros'>
          <div className='filtro-info'>
            <label className='alerta-filtro-tittle'>Filtro</label>
            <div class="dropdown-filtro">
              <select className="dropdown-btn" id='filtro' value={filter} onChange={changeFilter}>
                {filters.map(filter => (
                    <option value={filter.option} onChange={(event) => setFilter(event.target.value)} select>{filter.option}</option>
                ))}
              </select>
            </div> 

            {/* <button className='botao-filtro' onClick={() => setOpenModal(true)}>
              Filtrar
            </button>

            <div className='aplica-filtro'>
              <Modal isOpen={openModal} setModalOpen={() => setOpenModal(!openModal)} className='modal'>
                  <form>
                    <h2>Temperatura</h2>
                    <label>
                      <input type='checkbox' name='option1' />Acima
                      <input type='checkbox' name='option2' />Abaixo
                    </label>

                    <h2>Umidade</h2>
                    <label>
                      <input type='checkbox' name='option1' />Acima
                      <input type='checkbox' name='option2' />Abaixo
                    </label>

                    <h2>Setor</h2>
                    <label>
                      <input type='checkbox' name='salax' />Salax
                      <input type='checkbox' name='salay' />Salay
                    </label>

                    <h2>Nível de urgência</h2>
                    <label>
                      <input type='checkbox' name='alto' />Alto
                      <input type='checkbox' name='medio' />Médio
                      <input type='checkbox' name='baixo' />Baixo
                    </label>

                  </form>

                  {/* <div className={containerClass} onClick={toggleCheck} /> */}

              {/* </Modal> */}
             {/* </div> */}

          </div>

          <div className='filtro-info'>
            <label className='alerta-filtro-tittle'>Data</label>
            <input type="date" className='aplica-filtro' id="data" name="data"/>
          </div>
        </div>

        <span className='data-atual'></span>

        <div className='alerta-cards'>
          <AlertasCard nivel={props.nivel} id={props.id} nome={props.sala} temp={props.temp} umid={props.umid} data={props.data}  hora={props.hora} />
        </div>
      </div>
    </div>
  );
};

export default Alertas;