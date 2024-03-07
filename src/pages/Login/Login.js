import React from 'react';
import './Login.css';
import { BsEyeFill } from "react-icons/bs";
//import { BsEyeSlash } from "react-icons/bs"; <BsEyeSlash />
 
export const Login = () => {

    return (
        <div className='wrapper'>
            <form action="">
                <h1>Login</h1>

                <div className='input-box'>
                    <p>Matrícula</p>
                    <input type="text" required />
                </div>

                <div className='input-box'>
                    <p>Senha</p>
                    <input type="password" class="senha" required />
                    <BsEyeFill className="icon" />
                </div>

                <div className="remember-forgot">
                    <label><input type="checkbox" />Mantenha-me conectado</label>
                    <a href='#'>Esqueceu a senha?</a>
                </div>

                <button type="submit">Entrar</button>

                <div className='register-link'>
                    <p>Não tem uma conta? <a href='#'>Criar conta</a></p>
                </div>
            </form>
        </div>
    );
};

export default Login;