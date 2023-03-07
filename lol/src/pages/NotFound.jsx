import React from "react"
import Header from "../components/Header"
import akali from "../image/akali.png"
import { Link } from "react-router-dom";
import "../styles/NotFound.css"
import "../styles/Global.css"

const NotFound = () => {
  return (
    <>
      <Header/>
      <main>
        <h1>404 -Not Found </h1>
        <p>Pagina nao encontrada</p>
        <p>
          Parece que você está perdido soldado <br /> 
          Clique aqui para achar sua <Link to="/home">Guarnição</Link>
        </p>
        <img src={akali}/>

      </main>
    
    </>
 
  )
}

export default NotFound