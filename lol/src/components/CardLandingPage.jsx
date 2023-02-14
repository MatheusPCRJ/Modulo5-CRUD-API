import React from 'react'
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
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
        <input type="text" {...register("name")}  />
        <p>{errors.name?.message}</p>
        <input type="text" {...register("password",{ required: true })}  />
        {errors.password && <p>Digite sua senha</p>}
      <div className="social-logins">
        <div className="sc-login"><img src="" alt="" /></div>
        <div className="sc-login"><img src="" alt="" /></div>
        <div className="sc-login"><img src="" alt="" /></div>
      </div>
      <input type="checkbox" name="" id="" />
      <button type="submit">Click</button>
      </form>
    </div>
  </div>
  )
}

export default CardLandingPage