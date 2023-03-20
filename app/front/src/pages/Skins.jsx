import React from 'react'
import "../styles/Global.css"
import "../styles/Skins.css"
import Header from "../components/Header"
import  Footer from "../components/Footer"
import CardSkins from "../components/CardSkins"

const Skins = () => {
  return (
    <div className="skins">
       <Header/>
      <CardSkins ></CardSkins>
    <Footer/>
    </div>
  )
}

export default Skins