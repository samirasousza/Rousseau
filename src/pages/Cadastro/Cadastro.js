import React, { useState } from 'react';
import './Cadastro.css';
import { BsArrowLeft, BsEyeFill } from "react-icons/bs";
import { Link, useNavigate } from 'react-router-dom';
import useAuth from '../../components/UseAuth';
import { FaArrowLeft } from 'react-icons/fa6';
//import { BsEyeSlash } from "react-icons/bs"; <BsEyeSlash />
 
export const Cadastro = () => {

    const [nome, setNome] = useState('');
    const [cpf, setCPF] = useState('');
    const [matricula, setMatricula] = useState('');
    const [senha, setSenha] = useState('');
    const [senhaConf, setSenhaConf] = useState('');
    const [error, setError] = useState('');

    const navigate = useNavigate();

    const {Cadastro} = useAuth();

    const handleCadastro = () => {
        if (!nome | !matricula | !cpf | !senha | !senhaConf) {
            setError("Preencha todos os campos");
            return;
        } else if (senha !== senhaConf) {
            setError("Os e-mails não são iguais");
            return;
        }

        const res = Cadastro(matricula, senha);

        if (res) {
            setError(res);
            return;
        }

        alert("Usuário cadastrado com sucesso!");
        navigate("/login");
    }

    return (
        <div className='cadastro'>
            <img className='cad-logo-rousseau' src='../public/assets/logoRousseau.png' alt='rousseau'/>

            <div className='cad-wrapper'>
                <form action="" className="form-cadastro">
                    <h1 className='cad-tittle'>&nbsp;Cadastro</h1>

                    <div className='cad-input-box'>
                        <div className='cad-box'>
                            <p className='cad-input-tittle' >Nome Completo</p>
                            <input type="text" className='cad-input-text' value={nome} onChange={(e) => [setNome(e.target.value), setError("")]} required />
                        </div>
                        <div className='cad-box'>
                            <p className='cad-input-tittle' >Matrícula</p>
                            <input type="text" className='cad-input-text' value={matricula} onChange={(e) => [setMatricula(e.target.value), setError("")]} required />
                        </div>
                        <div className='cad-box'>
                            <p className='cad-input-tittle' >CPF</p>
                            <input type="text" className='cad-input-text' value={cpf} onChange={(e) => [setCPF(e.target.value), setError("")]} required />
                        </div>

                        <div className='cad-box'>
                            <p className='cad-input-tittle' >Senha</p>
                            <input type="password" className='cad-input-text' value={senha} onChange={(e) => [setSenha(e.target.value), setError("")]} required />
                            <BsEyeFill className='cad-icon' />
                        </div>

                        <div className='cad-box'>
                            <p className='cad-input-tittle' >Confirmar Senha</p>
                            <input type="password" className='cad-input-text' value={senhaConf} onChange={(e) => [setSenhaConf(e.target.value), setError("")]} required />
                            <BsEyeFill className='cad-icon' />
                        </div>

                        <button type="submit" className='cad-button' text="Entrar" onClick={handleCadastro}>Entrar</button>
                    </div>
                </form>
            </div>

            <div className='cad-register-link'>
                <p className='cad-register-text'>Já possui conta?
                    <Link to="/" className='cad-register-text-link' >&nbsp;Fazer Login</Link>
                </p>
            </div>

        </div>
    );
};
export default Cadastro;