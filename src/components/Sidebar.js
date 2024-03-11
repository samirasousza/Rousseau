import React from 'react';
import './Sidebar.css';
import Dropdown from './Dropdown';
import { NavLink } from 'react-router-dom';


const Sidebar = () => {
    
  const setoresOptions = [
    { label: 'Setor A', value: 'setorA' },
    { label: 'Setor B', value: 'setorB' },
    // Adicione mais opções de setores conforme necessário
  ];

  const salasOptions = [
    { label: 'Sala 1', value: 'sala1' },
    { label: 'Sala 2', value: 'sala2' },
    // Adicione mais opções de salas conforme necessário
  ];
    
  return (
    <div className='Sidebar'>
      <div className='Head'>
        <div className='Logo'>
          <img src='../assets/logoMenu.png' alt='Logo' title='Luminus'/>
        </div>

        <div className='User-img'>
          <img href='../assets/teste.png' alt='User-img'/>
        </div>

        <div className='User-details'>
          <p className='Name'>João Machado</p>
          <p className='Tittle'>Administrador</p>
        </div>

        <h2>Menu</h2>
        <Dropdown label="Setores" options={setoresOptions} highlightColor="#D76A08" />
        <Dropdown label="Salas" options={salasOptions} highlightColor="#D76A08" />
        <p><NavLink to="/" className="navegacao" >HOME</NavLink></p>
        <p><NavLink to="/contact" className="navegacao" >CONTATOS</NavLink></p>
      </div>
    </div>
  );
};

export default Sidebar