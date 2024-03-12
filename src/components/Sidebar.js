import React from 'react';
import './Sidebar.css';
import Dropdown from './Dropdown';
import { Link, NavLink } from 'react-router-dom';
import {IoHome, GoAlertFill, IoPerson, MdOutlineRoomPreferences, IoDocumentTextSharp } from 'react-icons/io'
import styles from './Sidebar.css';
import { SidebarAdm } from '../pages/SidebarItemsAdm';

const Sidebar = ({userItens}) => {

  const homeOptions = [
    { label: 'Setor A', value: 'setorA' },
    { label: 'Setor B', value: 'setorB' },
    { label: 'Setor C', value: 'setorC' },

    // Adicione mais opções de setores conforme necessário
  ];

  const salasOptions = [
    { label: 'Sala 1', value: 'sala1' },
    { label: 'Sala 2', value: 'sala2' },
    // Adicione mais opções de salas conforme necessário
  ];

  const UserOptions = [
    { label: 'Novo Cadastro', value: 'novocadastro' },
    // Adicione mais opções de salas conforme necessário
  ];
    
  return (
    <div className='Container'>
      <div className='Sidebar'>
        <div className='Head'>
          <div className='Logo'>
            <img src='../assets/logoMenu.png' alt='Logo' title='Luminus'/>
          </div>

          <div className='User-img'>
            <img href='/assets/teste.png' alt='User-img'/>
          </div>

          <div className='User-details'>
            <p className='Name'>João Machado</p>
            <p className='Tittle'>Administrador</p>
          </div>
          <div class="navegacao"></div>
            <ul class="menu"></ul>
            <ul class ="home"></ul>
          <div>
            {SidebarAdm.map((item, i)=>{
              return(
                <div key={i} className="nav">
                  <NavLink to={item.url} className="nav-link">
                        <div className='nav-link-icon'>{item.icon}</div>
                        <div className='icon-text'>{item.name}</div>
                  </NavLink>
                </div>
              )
            })}
            {/* <div className='home'>   
              <Dropdown label="Home" options={homeOptions} highlightColor="#D76A08" />
            </div>
            <p><NavLink to="/" className="navegacao" >Alertas</NavLink></p>
            <Dropdown label="Usuários" options={UserOptions} highlightColor="#D76A08" />
            <Dropdown label="Salas" options={salasOptions} highlightColor="#D76A08" />
            <p><NavLink to="/contact" className="navegacao" >Relatórios</NavLink></p> */}
        </div>
      </div>
    </div>
    </div>
  );
};

export default Sidebar