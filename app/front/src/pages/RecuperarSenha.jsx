import React from 'react'
import { Outlet, Link } from "react-router-dom";
import '../styles/RecuperarSenha.css'
import ImgBackground from "../image/login.png"
import lux from "../image/lux.png"
import CardRecuperarSenha from '../components/CardRecuperarSenha';
const RecuperarSenha = () => {
  return (
    <div className='RecuperarSenha'style={{backgroundImage:`url(${ImgBackground})`}} >
<div className="RSPage-main">

<section>
 <CardRecuperarSenha/>
</section>
<section className='Imglux'>
    <img src={lux} alt="" />
</section>
</div>
</div>
  )
}

export default RecuperarSenha