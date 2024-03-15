import React, { useState } from 'react';
import Modal from 'react-modal';
import './Salas.css';

function Salas() {
  const [modalAberto, setModalAberto] = useState(false);
  const [novaSala, setNovaSala] = useState({
    codigo: '',
    predio: '',
    setor: '',
    sala: '',
    beacon: ''
  });
  const [salas, setSalas] = useState([
    {
      codigo: '001',
      predio: '1',
      setor: 'X',
      sala: 'Administração',
      beacon: 'ID 001'
    },
    {
      codigo: '002',
      predio: '1',
      setor: 'X',
      sala: 'Administração',
      beacon: 'ID 001'
    },
    {
      codigo: '003',
      predio: '2',
      setor: 'Y',
      sala: 'Administração',
      beacon: 'ID 002'
    }
    
  ]);

  const abrirModal = () => {
    setModalAberto(true);
  };

  const fecharModal = () => {
    setModalAberto(false);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNovaSala({ ...novaSala, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSalas([...salas, novaSala]); // Adiciona a nova sala ao array de salas
    fecharModal();
  };

  const preencherSetor = (valor) => {
    setNovaSala({ ...novaSala, setor: valor });
  };

  const preencherBeacon = (valor) => {
    setNovaSala({ ...novaSala, beacon: valor });
  };

  const setorOptions = [
    { label: 'Setor A', value: 'A' },
    { label: 'Setor B', value: 'B' },
    { label: 'Setor C', value: 'C' },

    // Adicione mais opções de setores conforme necessário
  ];

  const salasOptions = [
    { label: 'Sala 1', value: 'Administração' },
    { label: 'Sala 2', value: 'Administração' },
    // Adicione mais opções de salas conforme necessário
  ];

  const predioOptions = [
    { label: 'Prédio 1', value: '1' },
    { label: 'Prédio 2', value: '2' },
    { label: 'Prédio 3', value: '3' },


    // Adicione mais opções de salas conforme necessário
  ];

  return (
    <div className='salas'>
      <div className='sala-caminho'>Salas</div>
      <div className='sala-titulo'>Salas</div>
      <div className='novo-cadastro'>
        <button className='botao-cadastro' onClick={abrirModal}>Novo cadastro</button>
      </div>

      <div className='Container1'>
        <div className='info-caixa'>
          <div className='info-dados'>
            <div className='info-codigo'>Código</div>
            <div className='info-predio'>Prédio</div>
            <div className='info-setor'>Setor</div>
            <div className='info-sala'>Sala</div>
            <div className='info-beacon'>Beacon</div>
          </div>

          {salas.map((sala, index) => (
            <div key={index} className={`linha-sala linha-${index % 3}`}>
              <div className='conteudo-código'>{sala.codigo}</div>
              <div className='conteudo-prédio'>{sala.predio}</div>
              <div className='conteudo-setor'>{sala.setor}</div>
              <div className='conteudo-sala'>{sala.sala}</div>
              <div className='conteudo-beacon'>{sala.beacon}</div>
            </div>
          ))}
        </div>
      </div>

      <Modal
        isOpen={modalAberto}
        onRequestClose={fecharModal}
        contentLabel="Novo Cadastro"
      >
        <div className='caminho2'><h3>Salas / Novo Cadastro</h3></div>
        <h2>Novo Cadastro de Sala e Beacons</h2>

        <form onSubmit={handleSubmit}>
          <div className="campo-cadastro">
            <label>Código:</label>
            <input type="text" name="codigo" value={novaSala.codigo} onChange={handleChange} />
          </div>
          <div className="campo-cadastro">
            <label>Prédio:</label>
            <input type="text" name="predio" value={novaSala.predio} onChange={handleChange} />
          </div>
          <div className="campo-cadastro">
            <label>Setor:</label>
            <div className="botao-dropdown">
            <input type="text" name="setor" value={novaSala.setor} onChange={handleChange} />
            </div>
          </div>
          <div className="campo-cadastro">
            <label>Sala:</label>
            <input type="text" name="sala" value={novaSala.sala} onChange={handleChange} />
          </div>
          <div className="campo-cadastro">
            <label>Beacon:</label>
            <div className="botao-dropdown">
            <input type="text" name="beacon" value={novaSala.beacon} onChange={handleChange} />

              
            </div>
          </div>
          <button type="submit">Salvar</button>
        </form>
      </Modal>
    </div>
  );
}

export default Salas;
