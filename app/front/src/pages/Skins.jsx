<<<<<<< HEAD:lol/src/pages/Skins.jsx
import React from 'react'
import "../styles/Global.css"
import "../styles/Skins.css"
import Header from "../components/Header"
import  Footer from "../components/Footer"

const Skins = () => {
  return (
    <div className="skins">
       <Header/>
    
    <Footer/>
    </div>
  )
}

=======
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
    <CardSkins/>
    <Footer/>
    </div>
  )
}

>>>>>>> 4781832fed53c8149a943ea5da5da305f9740c8d:app/front/src/pages/Skins.jsx
export default Skins