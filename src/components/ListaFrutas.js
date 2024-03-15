import React from 'react'
import { useState, useEffect } from "react";
import { apiConnection } from '../config/httpConnection';

function ListaFrutas() {
  const [frutas, setFrutas] = useState([]);
  const [input, setInput] = useState('');
  const [input2, setInput2] = useState('');
  const [input3, setInput3] = useState('');
  const [input4, setInput4] = useState('');
  const [rooms, setRooms] = useState([]);
  const [dados, setDados] = useState({});

  useEffect(() => {
    getSalas();
    getDados();

    const intervalId = setInterval(getDados, 5000);

    return () => {
      clearInterval(intervalId);
    };
  }, []);

  async function getSalas() {
    const response = await apiConnection.get(`/get-salas`);
    console.log(response);
    setRooms(response.data);
  }

  async function getDados() {
    const resposta = await apiConnection.get('/dados')
    setDados(resposta.data)
  }

  async function addFruta() {
    const novaFruta = {
      fruta: input
    }
    const response = await apiConnection.post("/add-fruta", novaFruta);
    console.log(response);
    setFrutas(response.data);
  }

  async function addPredio() {
    const novoPredio = {
      nome_predio: input
    }

    const response = await apiConnection.post("/post-predio", novoPredio);
    console.log(response.data)
  }

  async function addSetor() {
    const novoSetor = {
      id_predio: input2,
      nome_setor: input3,
      desc_setor: input4
    }

    const response = await apiConnection.post("/post-setor", novoSetor);
    console.log(response.data)
  }

  return (
    <> 
        <input 
          type="text" 
          value={input} 
          onChange={(event) => {setInput(event.target.value)}} 
        />
        <button onClick={addPredio}>Adicionar Predio</button><br></br>

        <label htmlFor="id">Id Predio: </label>
        <input 
          type="text" 
          value={input2} 
          onChange={(event) => {setInput2(event.target.value)}} 
        /><br></br>
        <label htmlFor="nome_setor">Nome do Setor: </label>
        <input 
          type="text" 
          value={input3} 
          onChange={(event) => {setInput3(event.target.value)}} 
        /><br></br>
        <label htmlFor="desc_setor">Descrição: </label>
        <input 
          type="text" 
          value={input4} 
          onChange={(event) => {setInput4(event.target.value)}} 
          style={{ width: '300px', height: '100px'}}
        /><br></br>
        <button onClick={addSetor}>Adicionar Setor</button>

        <h2>Lista de Salas</h2>
        <ul>
          {rooms.map(room => (
            <li key={room.ID_SALA}>
              <strong>ID:</strong> {room.ID_SALA}, <strong>Nome:</strong> {room.NOME_SALA}
              <br/>
              <strong>Descrição:</strong> {room.DESC_SALA};
              <br/>
              <strong>Temp Mínima:</strong> {room.TEMP_MIN} <strong>Temp Máxima:</strong> {room.TEMP_MAX}
              <br/>
              <br/>
            </li>
          ))}
        </ul> <br></br>
        <h1>Dados do Sensor:</h1>
        <p>Temperatura: {dados.temperatura}°C</p>
        <p>Umidade: {dados.umidade}%</p>
    </>
  )
};

export default ListaFrutas;