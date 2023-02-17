import React from 'react'
import { Outlet, Link } from "react-router-dom";
import { useState } from 'react';
import "../styles/CardEscrever-Se.css"
import Axios from "axios"

const CardEscrever = () => {

 // 
// const schema = yup.object({
//   nome: yup.string().required('Esse campo precisa ser preenchido'),
//   nickname:yup.string().required( 'Esse campo precisa ser preenchido'),
//   password:yup.string().required( 'Esse campo precisa ser preenchido'),
//   ConfirmPassword:yup.string().required().oneOf([yup.ref('password')]),
// })

  

    // const onSubmit = data => {
    //   console.log(watch(data))
    // }

    const [FormData, setFormData] = useState({
      nome:"",
      nickname:"",
      password:""
  
   
  });

  // pega os values

    const formChange = (e) =>{
      setFormData((prev) => ({...prev, [e.target.name]: e.target.value}))
  }

// envia a requisiçao pro back
    const onSubmit = async e => {
         e.preventDefault()
      console.log(FormData)

      try {
        await Axios.post("http://localhost:8800/inscrever",FormData)
      } catch (error) {
         console.log(error)
      }

    }



  return (


    <div className="CardEscrever-se">
       <div className="CardEscrever-info">
        <h1>Cadastre-se</h1>
        <form>

          <input name="nome" onChange={formChange}  type="text"  placeholder='Nome'/>
        
          <input name="nickname" onChange={formChange} type="text" placeholder='NickName' />
        
          <input name="password" onChange={formChange} type="password" placeholder='senha'/>
        
          <input name='ConfirmPassword'  type="password" placeholder='Confirmar senha'/>
    
          <button  onClick={onSubmit} type='submit'> click</button>
          
        </form>
       
       <Link to ='http://localhost:3000/'> Voltar ao login</Link>
       </div>
      
    </div>
  )
}

export default CardEscrever