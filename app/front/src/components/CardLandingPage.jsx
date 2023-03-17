import React from 'react'
import axios from "axios";
import {useState,useEffect} from 'react'
import { Outlet, Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
import facebook from "../image/facebook.png"
import google from "../image/google.png"
import riot from "../image/riot.png"
import '../styles/CardLandingPage.css'

const CardLandingPage = () => {


  // VERIFICANDO O STATUS DOS INPUTS
    const [Data,setData] = useState({
      nickname: '',
      senha: ''
    }
     
    )

  // VALIDAÇAO DE INPUT
    const schema = yup.object({
    nickname: yup.string().required('Escreva seu nome'),
    senha:yup.string().required(),
      }).required();
      

    const { register, handleSubmit, watch, formState: { errors } } = useForm({
        resolver: yupResolver(schema)
      });
    const onSubmit = setData

      console.log(Data)

  // ENVIANDO PARA o LOCALHOST

  axios.post('',Data)
  .then(function (response) {
    console.log(response);
  })
  .catch(function (error) {
    console.error(error);
  });




  return (
    <div className="Login-ldPage">
    <div className="text-ldpage">
      <h1>Entrar</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="inputs">
            <input type="text" {...register("nickname")}  placeholder="Nome"  className='inputText'/>
        <span>{errors.nickname?.message}</span>
        <input type="text" {...register("senha",{ required: true })} placeholder="Senha"   className='inputText' />
        {errors.senha && <span>Digite sua senha</span>}</div>
         <div className="infos-card">
         <Link to="http://localhost:3000/escrever-se" >Cadastre-se</Link>
         
         </div>
        
      <div className="social-logins">
         <div className="sc-login-facebook"><img src={facebook} alt="" /></div>
        <div className="sc-login-google"><img src={google} alt="" /></div>
        <div className="sc-login-riot"><img src={riot} alt="" /></div>
      </div>
       <input type="submit" />
      </form>
    </div>
  </div>
  )
}

export default CardLandingPage