import React from 'react'
import Header from "../components/Header"
import  Footer from "../components/Footer"
import "../styles/Global.css"
import "../styles/Home.css"
import Video from "../image/lol-video.webm"
import { Outlet, Link } from "react-router-dom";
import ImgProduto from "../image/hiata.png"
import Olhos from "../image/olhos.png"

const Home = () => {
  return (
   <div className="home">
    <Header/>
    <main>
      <div className="video">
        <video src={Video} autoPlay loop muted></video>
       <div className="video-text">
        <h3>BEM VINDO AO LOL</h3>
        <h1>MELHORES SKINS</h1>
        <span>O site de maior venda de skins do servidor br</span>
        <button><Link>LETS GO</Link></button>
       </div>
      </div>

      <div className="main-info">
        <div className="card">
          <div className="info-card">
          <img src={Olhos} alt="" />
          <div className="text-card-info">
          <h3>Eleito o melhor site de 2022 de venda de skins</h3>
            <span>Riot games </span>
          </div>
          </div>
         
        </div>
        <div className="card">
          <div className="info-card">
          <img src="" alt="" />
          <div className="text-card-info">
            <h3>Aceitamos todos os tipos de pagamento</h3>
            <span>MasterCard</span>
          </div>
          </div>
         
        </div>
        <div className="card">
          <div className="info-card">
          <img src="" alt="" />
          <div className="text-card-info">
            <h3>Rapido e eficiente,os melhores em seu ramo</h3>
            <span>Cliente</span>
          </div>
          </div>
         
        </div>
       
      </div>

      <div className="main-produto">
        <section className='text-main-produto'>
            <div className="produto-text">
            <h3>ESCOLHA A SUA</h3>
            <h1>SKIN</h1>
            <span>Cai na hora na sua conta, aceitamos pix, parcelamos em ate 10 vezes</span>
            <button><Link>LETS GO</Link></button>
          </div>
        </section>
        <section className='img-produto'>
          <img src={ImgProduto} alt="" />
        </section>
      </div>
  
    </main>
    <Footer/>
   </div>
  )
}

export default Home