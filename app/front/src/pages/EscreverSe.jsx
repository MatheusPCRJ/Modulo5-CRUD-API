import React from 'react'
import { Outlet, Link } from "react-router-dom";
import CardEscrever from '../components/CardEscreverSe';
import '../styles/EscreverSe.css'
import ashe from "../image/ashe.png"
import ashee from "../image/ashee.png"
const EscreverSe = () => {
  return (
    <div className='Img-Inscriv' style={{backgroundImage:`url(${ashe})`}}>


<div className='inscriv-main'>

<section className='cadastro'>
<CardEscrever />
  
</section>
<section className='Img-Inscriv2'>
    <img src={ashee} alt=""  className='foto'/>
</section>
</div>
    </div>
  )
}

export default EscreverSe