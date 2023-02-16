import React from 'react'
import Header from "../components/Header"
import  Footer from "../components/Footer"
import akali from "../image/akali.png"
import "../styles/NotFound.css"
import "../styles/Global.css"

const NotFound = () => {
  return (
 <div className="notFound">
   <Header>
   </Header>
   <section className='Imgakali'>
    <h4>404 - No Found</h4>
    <h1>Página Não Encontrada</h1>
    <img src={akali} alt="" />
   </section> 
   </div> 
  )
}

export default NotFound