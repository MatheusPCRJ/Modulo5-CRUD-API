import React from 'react'
import "../styles/CardRecuperarSenha.css"
import Cadeado from "../image/cadeado.png"

const CardRecuperarSenha = () => {
  return (
    <div className="CardRecuperarSenha">
      <div className="text">
        <h1>Recuperar senha</h1>
        <img src={Cadeado}></img>
        <h3>Problemas em lembrar a senha?</h3>
        <span>Ensira seu email para podermos enviar um link de acesso.</span>

        <div className="detalhe">
          <div className="linha"></div>
            <span>ou</span>
          <div className="linha"></div>
        </div>

        <input type="email"  placeholder='Email'/>

        <button> Click</button>
      </div>
    </div>
  )
}

export default CardRecuperarSenha