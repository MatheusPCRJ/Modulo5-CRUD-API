import React from "react";
import Header from "../components/Header";
import akali from "../image/akali.png";
import { Link } from "react-router-dom";
import "../styles/NotFound.css";
import "../styles/Global.css";

const NotFound = () => {
  return (
    <>
      <Header />
      <main>
        <div className="div-pai-PCRJ">
          <div className="div-texto-PCRJ">
            <h1>404 - Not Found </h1>
            <p className="traducao-PCRJ">Pagina nao encontrada</p>
            <p className="mensagem-PCRJ">
              Parece que você está perdido soldado. <br />
              Clique aqui para achar sua <Link to="/home">Guarnição</Link>!
            </p>
          </div>
          <img src={akali} />
        </div>
      </main>
    </>
  );
};

export default NotFound;
