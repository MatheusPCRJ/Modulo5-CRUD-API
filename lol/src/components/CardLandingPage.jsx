import React from "react";
import { useState } from 'react';
import { Outlet, Link } from "react-router-dom";
import Axios from "axios";
import facebook from "../image/facebook.png";
import google from "../image/google.png";
import riot from "../image/riot.png";
import "../styles/CardLandingPage.css";

const CardLandingPage = () => {

  const [Login, setLogin] = useState({
    nickname:"",
    senha:""

});


const formChange = (e) =>{
  setLogin((prev) => ({...prev, [e.target.name]: e.target.value}))
}

const onSubmit = async e => {
  e.preventDefault()
console.log(Login)

try {
 await Axios.get("http://localhost:8800/inscrever",Login)
} catch (error) {
  console.log(error)
}

}




  return (
    <div className="Login-ldPage">
      <div className="text-ldpage">
        <h1>Entrar</h1>
        <form>
          <div className="inputs">
            <input
              onChange={formChange}
              name="nickname"
              type="text"
              placeholder="Nickname"
              className="inputText"
            />

            <input
              onChange={formChange}
              name="senha"
              type="password"
              placeholder="Senha"
              className="inputText"
            />

            <div className="infos-card">
              <Link to="http://localhost:3000/escrever-se">Cadastre-se</Link>
            </div>

            <div className="social-logins">
              <div className="sc-login-facebook">
                <img src={facebook} alt="" />
              </div>
              <div className="sc-login-google">
                <img src={google} alt="" />
              </div>
              <div className="sc-login-riot">
                <img src={riot} alt="" />
              </div>
            </div>

            <button   onClick={onSubmit} type="submit">Click</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CardLandingPage;
