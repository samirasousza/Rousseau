import React, { useState } from 'react'
import './Relatorios.css'
import Sidebar from '../../components/Sidebar'
import ListaFrutas from '../../components/ListaFrutas'
import DropdownHora from '../../components/DropdownHora'
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";

function Relatorios() {

  return (
    <>
      <Sidebar />
      <div className='relatorios'>
        <div className='relatorios-page'>
          <h1 className='relatorios-path'>Relatórios</h1>
          <h1 className='relatorios-tittle'>Relatórios</h1>

          <div className='relatorios-container'>
            <div className='emissao-box'>
              <h1 className='emissao-box-tittle'>Dados para emissão</h1>

              <form className='emissao-dados'>
                <div className='emissao-dado'>
                  <label for='txtDataInicial' className='emissao-tittle'>Data Inicial</label>
                  <input type="date" className='emissao-input' id="txtDataInicial" name="dataInicial" required/>
                </div>

                <div className='emissao-dado'>
                  <label for='txtDataFinal' className='emissao-tittle'>Data Inicial</label>
                  <input type="date" className='emissao-input' id="txtDataFinal" name="dataFinal" required/>
                </div>

                <div className='emissao-dado'>
                  <label for='txtHoraInicial' className='emissao-tittle'>Horário inicial</label>
                  <input type="time" className='emissao-input' id="txtHoraInicial" name="horaInicial"/>
                </div>

                <div className='emissao-dado'>
                  <label for='txtHoraFinal' className='emissao-tittle'>Horário inicial</label>
                  <input type="time" className='emissao-input' id="txtHoraFinal" name="horaFinal"/>
                </div>

                <div className='emissao-dado'>
                  <label className='emissao-tittle'>Temperatura Mínima</label>
                  <input type="date" className='emissao-input' id="data" name="data"/>
                </div>

                <div className='emissao-dado'>
                  <label className='emissao-tittle'>Temperatura Máxima</label>
                  <input type="date" className='emissao-input' id="data" name="data"/>
                </div>
                
                <div className='emissao-dado'>
                  <label className='emissao-tittle'>Umidade Mínima</label>
                  <input type="date" className='emissao-input' id="data" name="data"/>
                </div>

                <div className='emissao-dado'>
                  <label className='emissao-tittle'>Umidade Máxima</label>
                  <input type="date" className='emissao-input' id="data" name="data"/>
                </div>
              </form>
            
            </div>

            <div className='emissao-box'>
              <h1 className='emissao-box-tittle'>Setor e Salas</h1>

              <form className='setor-sala-dados'>
                <div className='setor-sala-dado'>
                  <div className="relatorio-dropdown">
                    <label className='setor-input-all'><input type="checkbox" />Setor Callidus</label>
                    <IoIosArrowUp className='setor-input-icon'/>
                  </div>
                  
                  <div className='setor-salas'>
                    <div className='sala-input'>
                      <input type="checkbox" />
                      <label>ADM</label>
                    </div>
                    <div className='sala-input'>
                      <input type="checkbox" />
                      <label>Sala 7</label>
                    </div>
                    <div className='sala-input'>
                      <input type="checkbox" />
                      <label>Almoxafariado</label>
                    </div>
                    <div className='sala-input'>
                      <input type="checkbox" />
                      <label>Gerência de Redes</label>
                    </div>
                    <div className='sala-input'>
                      <input type="checkbox" />
                      <label>Sala 2</label>
                    </div>
                    <div className='sala-input'>
                      <input type="checkbox" />
                      <label>Sala de Design</label>
                    </div>
                  </div>
                </div>
              </form>
            </div>

            <div className='relatorio-buttons'>
            <button type="submit" className='relatorio-gerar' text="cancelar">Gerar</button>
              <button type="submit" className='relatorio-cancelar' text="cancelar">Cancelar</button>
            </div>

          </div>
        </div>
      </div>
    </>
  )
}

export default Relatorios