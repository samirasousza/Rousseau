import React, { useEffect, useState } from 'react'
import './Card.css'
import { BsEyeFill } from "react-icons/bs";
import { AiFillInfoCircle } from "react-icons/ai";
import { apiConnection } from '../../config/httpConnection';

function Card({item}) {

    const [dados, setDados] = useState({});

    useEffect(() => {
        getDados();

        const intervalId = setInterval(getDados, 5000);

        return () => {
            clearInterval(intervalId);
        };
    }, []);

    async function getDados() {
        const resposta = await apiConnection.get('/dados')
        setDados(resposta.data)
    }
    
    return (
            <div className='card-setor'>
                <h2 className='card-setor-tittle'>{item.ID_SALA} - {item.NOME_SALA}</h2>
                <BsEyeFill className='icon-eye' />
                <div className='card-tags'>
                    <div className='card-tag'>
                        <AiFillInfoCircle className='icon-info' />
                        <div className='tag-dados'>
                            <h1 className='titulo'>Temperatura</h1>
                            <p className='dado'>{dados.temperatura}°C</p>
                        </div>
                    </div>

                    <div className='card-tag'>
                        <AiFillInfoCircle className='icon-info' />
                        <div className='tag-dados'>
                            <h1 className='titulo'>Umidade</h1>
                            <p className='dado'>{dados.umidade}%</p>
                        </div>
                    </div>
                </div>
            </div>
    )
}

export default Card