import React from 'react'
import { Outlet, Link } from "react-router-dom";
import '../styles/EscreverSe.css'
import ashe from "../image/ashe.png"
import ashee from "../image/ashee.png"
const EscreverSe = () => {
  return (
    <div className='Img-Inscriv' style={{backgroundImage:`url(${ashe})`}}>

<li>  <Link to="/">LandingPage</Link></li>
<div className='inscriv-main'>

<div className='cadastro'>
    <h2>cadastre-se</h2>
  <input id='Name' name='Name' placeholder='Name' type="text"  />
  
</div>
<section className='Img-Inscriv2'>
    <img src={ashee} alt=""  className='foto'/>
</section>
</div>
    </div>
  )
}

export default EscreverSe