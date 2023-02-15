import React from 'react'
import { Outlet, Link } from "react-router-dom";
import '../styles/RecuperarSenha.css'
import ImgBackground from "../image/login.png"
import lux from "../image/lux.png"
const RecuperarSenha = () => {
  return (
    <div className='RecuperarSenha'style={{backgroundImage:`url(${ImgBackground})`}} >
<div className="RSPage-main">
  
<li>  <Link to="/">Landingpage</Link></li>
<li2>  <Link to="/Escrever-se">Escrever-se</Link></li2>

<section>
  <div className="Recupera-RSPage">
    <div className="text-RSpage">
      <h1>Recuperar Senha</h1>
      <input id='Name' name='Name' placeholder='Name' type="text"  />
    </div>
  </div>
</section>
<section className='Imglux'>
    <img src={lux} alt="" />
</section>
</div>
</div>
  )
}

export default RecuperarSenha