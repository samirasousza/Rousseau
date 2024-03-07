import React from 'react'
import './Card.css'

function Card(props) {
  return (
        <div className='card'>

            <div className='card-setor'>
                <h2>{props.name}</h2>
                <div className='card-tags'>
                    <div className='card-tag'>
                        <h1>Temperatura</h1>
                        <h3>{props.temp}°C</h3>
                    </div>

                    <div className='card-tag'>
                        <h1>Umidade</h1>
                        <h3>{props.umid}%</h3>
                    </div>
                </div>
            </div>
        </div>

  )
}

export default Card