import React from 'react'
import Sidebar from '../../components/Sidebar'
import ListaFrutas from '../../components/ListaFrutas'
import DropdownHora from '../../components/DropdownHora'

function Relatorios() {

  return (
    <>
      {/* <Sidebar /> */}

      <div className='relatorios'>
        <div className='relatorios-page'>
          <h1 className='relatorios-path'>Relatórios</h1>
          <h1 className='relatorios-tittle'>Relatórios</h1>

          <div className='relatorios-container'>
            <div className='emissao-box'>
              <h1 className='emissao-tittle'>Dados para emissão</h1>

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
          </div>
        </div>
      </div>
    </>
  )
}

export default Relatorios