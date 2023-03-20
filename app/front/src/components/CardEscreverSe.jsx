import React from 'react'
import { Outlet, Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import axios from "axios";
import {useState,useEffect} from 'react'
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
import "../styles/CardEscrever-Se.css"
const CardEscrever = () => {


  
  // VERIFICANDO O STATUS DOS INPUTS
  const [CadData,setCadData] = useState({
    nome:'',
    nickname: '',
    senha: ''
  }
   
  )

   // VALIDAÇAO DE INPUT
const schema = yup.object({
  nome: yup.string().required('Esse campo precisa ser preenchido'),
  nickname:yup.string().required( 'Esse campo precisa ser preenchido'),
 senha:yup.string().required( 'Esse campo precisa ser preenchido'),
  ConfirmPassword:yup.string().required().oneOf([yup.ref('senha')]),
})

    const { register, handleSubmit, watch, formState: { errors } } = useForm( {
      resolver: yupResolver(schema)
    });
    const onSubmit = setCadData

    console.log(CadData)

 // ENVIANDO PARA o LOCALHOST

 axios.post('http://localhost:8800/inscrever',CadData)
 .then(function (response) {
   console.log(response);
 })
 .catch(function (error) {
   console.error(error);
 });





  return (


    <div className="CardEscrever-se">
       <div className="CardEscrever-info">
        <h1>Cadastre-se</h1>
        <form  onSubmit={handleSubmit(onSubmit)}>
          <input type="text"{...register("nome")}   placeholder='Nome'/>
          <div className="mensagem"><span>{errors.nome?.message}</span></div>
          
          <input type="text"{...register("nickname")} placeholder='NickName' />
          <div className="mensagem"><span>{errors.nickname?.message}</span></div>
          <input type="password"{...register("senha")} placeholder='senha'/>
         <div className="mensagem">
         {errors.senha && <span>Esse campo precisa ser preenchido </span>}
         </div>
          <input type="password"{...register("ConfirmPassword")} placeholder='Confirmar senha'/>
          <div className="mensagem">
          {errors.ConfirmPassword && <span> Sua senha precisa ser igual</span>}
          </div>

          <button type='submit'> click</button>
          
        </form>
       
       <Link to ='http://localhost:3000/'> Voltar ao login</Link>
       </div>
      
    </div>
  )
}

export default CardEscrever