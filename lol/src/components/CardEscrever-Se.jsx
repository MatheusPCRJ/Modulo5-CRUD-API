import React from 'react'
import { Outlet, Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
import "../styles/CardEscrever-Se.css"
const CardEscrever = () => {

const schema = yup.object({
  nome: yup.string().required('Esse campo precisa ser preenchido'),
  nickname:yup.string().required( 'Esse campo precisa ser preenchido'),
  password:yup.string().required( 'Esse campo precisa ser preenchido'),
  ConfirmPassword:yup.string().required().oneOf([yup.ref('password')]),
})

    const { register, handleSubmit, watch, formState: { errors } } = useForm( {
      resolver: yupResolver(schema)
    });
    const onSubmit = data => console.log(data);

  return (


    <div className="CardEscrever-se">
       <div className="CardEscrever-info">
        <h1>Cadastre-se</h1>
        <form  onSubmit={handleSubmit(onSubmit)}>
          <input type="text"{...register("nome")}   placeholder='Nome'/>
          <div className="mensagem"><span>{errors.nome?.message}</span></div>
          
          <input type="text"{...register("nickname")} placeholder='NickName' />
          <div className="mensagem"><span>{errors.nickname?.message}</span></div>
          <input type="password"{...register("password")} placeholder='senha'/>
         <div className="mensagem">
         {errors.password && <span>Esse campo precisa ser preenchido </span>}
         </div>
          <input type="password"{...register("ConfirmPassword")} placeholder='Confirmar senha'/>
          <div className="mensagem">
          {errors.ConfirmPassword && <span> Esse campo precisa ser preenchido</span>}
          </div>

          <button type='submit'> click</button>
          
        </form>
       
       <Link to ='/'> Voltar ao login</Link>
       </div>
      
    </div>
  )
}

export default CardEscrever