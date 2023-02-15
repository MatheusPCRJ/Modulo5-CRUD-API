import React from 'react'
import { Outlet, Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
import facebook from "../image/facebook.png"
import google from "../image/google.png"
import riot from "../image/riot.png"
import '../styles/CardLandingPage.css'

const CardLandingPage = () => {


    const schema = yup.object({
    name: yup.string().required('Escreva seu nome'),
    password:yup.number().positive().min(6).required(),
      }).required();
      

    const { register, handleSubmit, watch, formState: { errors } } = useForm({
        resolver: yupResolver(schema)
      });
    const onSubmit = data => console.log(data);



  return (
    <div className="Login-ldPage">
    <div className="text-ldpage">
      <h1>Entrar</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="inputs">
            <input type="text" {...register("name")}  placeholder="Nome"  className='inputText'/>
        <span>{errors.name?.message}</span>
        <input type="text" {...register("password",{ required: true })} placeholder="Senha"   className='inputText' />
        {errors.password && <span>Digite sua senha</span>}</div>
         <div className="infos-card">
         <Link to="Escrever-se" >Cadastre-se</Link>
         
         </div>
        
      <div className="social-logins">
         <div className="sc-login-facebook"><img src={facebook} alt="" /></div>
        <div className="sc-login-google"><img src={google} alt="" /></div>
        <div className="sc-login-riot"><img src={riot} alt="" /></div>
      </div>
      
      <button type="submit">Click</button>
      </form>
    </div>
  </div>
  )
}

export default CardLandingPage