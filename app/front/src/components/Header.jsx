import React from 'react'
import "../styles/Header.css"
import { Outlet, Link } from "react-router-dom";
import riot from "../image/riot.png"

const Header = () => {
  return (
        <header>
            <nav>
               <div className="logo">
                <img src={riot} alt="" />
               </div>
                <Link to="http://localhost:3000/home" >HOME</Link>
                <Link to="http://localhost:3000/skins" > SKINS</Link>
            </nav>

            <div className="Sign-in">
              <Link to="/" > SIGN-IN</Link>
            </div>
        </header>
  )
}

export default Header