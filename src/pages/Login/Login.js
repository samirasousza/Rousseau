import React, { useState } from 'react';
import './Login.css';
import { BsEyeFill } from "react-icons/bs";
import useAuth from '../../components/UseAuth';
import { Link, useNavigate } from 'react-router-dom';
//import { BsEyeSlash } from "react-icons/bs"; <BsEyeSlash />;
// import logoRousseau from "../public/assets/logoRousseau.png";
 
export const Login = () => {

    const {Login} = useAuth();
    const navigate = useNavigate();

    const [matricula, setMatricula] = useState('');
    const [senha, setSenha] = useState('');
    const [error, setError] = useState('');

    const handleLogin = () => {
        if (!matricula | senha) {
            setError("Preencha todos os campos");
            return;
        }

        const res = Login(matricula, senha);

        if (res) {
            setError(res);
            return;
        }

        navigate("/home");
    }

    return (
        <div className='login'>
            <img className='logo-rousseau' src='../public/assets/logoRousseau.png' alt='rousseau'/>

            <div className='login-content'>
                <div className='login-wrapper'>
                    <form action="" className='form-login'>
                        <h1 className='login-tittle'>Login</h1>
                        
                        <div className='login-input-box'>
                            <div className='login-cad-box'>
                                <p className='login-input-tittle'>Matrícula</p>
                                <input type="text" classname="login-input-text" value={matricula} onChange={(e) => [setMatricula(e.target.value), setError("")]} required />
                            </div>

                            <div className='login-cad-box'>
                                <p className='login-input-tittle'>Senha</p>
                                <input type="password" classname="login-input-text" value={senha} onChange={(e) => [setSenha(e.target.value), setError("")]}required />
                                <BsEyeFill className="login-icon" />
                            </div>
                        </div>

                        <div className="remember-forgot">
                            <p><input type="checkbox" className='remember-text' />Mantenha-me conectado
                                <Link to='/redefinir' className='forgot-text'>&nbsp;Esqueceu a senha?</Link>
                            </p>
                        </div>

                        <button type="submit" className='login-button' text="entrar" onClick={handleLogin}>Entrar</button>

                        <div className='login-error'>{error}</div>
                    </form>
                </div>
            </div>

            <div className='login-register-link'>
                <p className='login-register-text'>Não tem uma conta?
                    <Link to="/cadastro" className='login-register-text-link'>&nbsp;Criar conta</Link>
                </p>
            </div>

        </div>
    );
};

export default Login;