import React from 'react'
import CardLandingPage from '../components/CardLandingPage';
import '../styles/LandingPage.css'
import ImgBackground from "../image/background.png"
import Jinx from "../image/Jinx.png"
const LandingPage = () => {
  return (
    <div className='LandingPage'style={{backgroundImage:`url(${ImgBackground})`}} >
<div className="LdPage-main">

<section>
 <CardLandingPage/>
</section>
<section className='ImgJinx'>
    <img src={Jinx} alt="" />
</section>
</div>
{/* <nav>
        <ul>
          <li>
          <Link to="/">LandingPage</Link>
          </li>
          <li>
            <Link to="/Escrever-se">Escrever-se</Link>
          </li>
          <li>
            <Link to="/RecuperarSenha">Recuperar Senha</Link>
          </li>
        </ul>
      </nav>

      <Outlet /> */}

    </div>
  )
}

export default LandingPage