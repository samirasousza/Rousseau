import React, { useState } from 'react'

const DropdownHora = () => {

    const [horaSelecionada, setHoraSelecionada] = useState('');

    const opcoesHoras = () => {
        let horas = [];
        for (let i = 0; i < 24; i++) {
            const hora = i.toString().padStart(2, '0');
            horas.push(<option key={hora} value={hora}>{hora}</option>);
        }
        return horas;
    }

    const handleHoraChange = (event) => {
        setHoraSelecionada(event.target.value);
    }

    return (
        <div>
            <label htmlFor="hora">Selecione a hora:</label>
            <select id="hora" value={horaSelecionada} onChange={handleHoraChange}>
                <option value="">Selecione...</option>
                {opcoesHoras()}
                asssssssssss
            </select>
        </div>
    );
};


export default DropdownHora