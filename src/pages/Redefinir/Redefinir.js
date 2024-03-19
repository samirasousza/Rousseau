import React, { useState } from 'react';
import './Redefinir.css';
import { BsArrowLeft, BsEyeFill } from "react-icons/bs";
import { Link, useNavigate } from 'react-router-dom';
import useAuth from '../../components/UseAuth';
import { FaArrowLeft } from 'react-icons/fa6';
//import { BsEyeSlash } from "react-icons/bs"; <BsEyeSlash />
 
export const Redefinir = () => {

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
        <div className='redefinir'>
            <img className='red-logo-rousseau' src='../public/assets/logoRousseau.png' alt='rousseau'/>

            <div className='red-wrapper'>
                <form action="" className="form-redefinir">
                <Link to='/' className='arrow-icon'><FaArrowLeft /></Link>
                    <label className='red-tittle'>&nbsp;Redefinir</label>

                    <div className='red-input-box'>
                        <div className='red-box'>
                            <p className='red-input-tittle' >Matrícula</p>
                            <input type="text" className='red-input-text' value={matricula} onChange={(e) => [setMatricula(e.target.value), setError("")]} required />
                        </div>
                        <div className='red-box'>
                            <p className='red-input-tittle' >CPF</p>
                            <input type="text" className='red-input-text' value={cpf} onChange={(e) => [setCPF(e.target.value), setError("")]} required />
                        </div>

                        <div className='red-box'>
                            <p className='red-input-tittle' >Senha</p>
                            <input type="password" className='red-input-text' value={senha} onChange={(e) => [setSenha(e.target.value), setError("")]} required />
                            <BsEyeFill className='red-icon' />
                        </div>

                        <div className='red-box'>
                            <p className='red-input-tittle' >Senha</p>
                            <input type="password" className='red-input-text' value={senhaConf} onChange={(e) => [setSenha(e.target.value), setError("")]} required />
                            <BsEyeFill className='red-icon' />
                        </div>

                        <button type="submit" className='red-button' text="Entrar" onClick={handleCadastro}>Entrar</button>
                    </div>
                </form>
            </div>
        </div>
    );
};
export default Redefinir;