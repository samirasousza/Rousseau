import React from 'react';
import './Cadastro.css';
import { BsEyeFill } from "react-icons/bs";
//import { BsEyeSlash } from "react-icons/bs"; <BsEyeSlash />
 
export const Cadastro = () => {

    return (
        <div className='cadastro'>
            <div className='wrapper'>
                <form action="">
                    <h1>Cadastro</h1>

                    <div className='input-box'>
                        <p>Nome Completo</p>
                        <input type="text" required />

                        <p>Matrícula</p>
                        <input type="text" required />

                        <p>CPF</p>
                        <input type="text" required />

                        <p>Senha</p>
                        <input type="password" class="senha" required />
                        <BsEyeFill className="icon" />
        
                        <p>Senha</p>
                        <input type="password" class="senha" required />
                        <BsEyeFill className="icon" />

                        <button type="submit">Entrar</button>

                        <div className='register-link'>
                        <   p>Já possui conta? <a href='#'>Fazer login</a></p>
                        </div>
                    </div>

                    
                </form>
            </div>
        </div>
    );
};
export default Cadastro;