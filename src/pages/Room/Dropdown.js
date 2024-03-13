import React, { useState } from 'react'
import './Dropdown.css'
import { IoIosArrowDown } from "react-icons/io";

function Dropdown() {

    const filters = [
    {
        option: 'Temperatura'
    },
    {
        option: 'Umidade'
    }
    ]

    const [filter, setFilter] = useState('Filtro');

    const [states, setStates] = useState([]);

    const changeFilter = (event) => {
        setFilter(event.target.value);
        setStates(filters.find(filter => filter.option === event.target.value).states)
    };

    // const toggleDropdown = () => {
    //     setIsActive(!isActive);
    // };

    return (
        <div class="dropdown">
            {/* <div className='dropbtn'>
                <div class="dropdown-btn" onClick={toggleDropdown}>
                    Filtros
                    <IoIosArrowDown className='dropdown-icon'/>
                </div>
            </div>
            {isActive && (
                <div className="dropdown-content">
                    <div className='item'>Temperatura</div>
                    <div className='item'>Umidade</div>
                    <div className='item'>Filtro 3</div>
                </div>
            )} */}
            <select className="dropdown-btn" id='filtro' value={filter} onChange={changeFilter}>
                {/* <option value='item' selected>Temperatura</option> */}
                {filters.map(filter => (
                    <option value={filter.option}>{filter.option}</option>
                ))}
                {/* <option value='item'>Umidade</option>
                <option value='item'>Filtro 3</option> */}
            </select>
        </div>
    );
}

export default Dropdown;