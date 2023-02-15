import ReactDOM from "react-dom/client";
import '../src/index.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LandingPage from "./pages/LandingPage"
import EscreverSe from "./pages/EscreverSe"
import RecuperarSenha from "./pages/RecuperarSenha"
import Home from "./pages/Home.jsx"
import NotFound from "./pages/NotFound"
import Produto from "./pages/Produto"
import Skins from "./pages/Skins"

export default function App() {
  return (
    <BrowserRouter>
    <Routes>
        <Route path="/" element={<LandingPage />}/>
        <Route path="RecuperarSenha" element={<RecuperarSenha/>} />
        <Route path="Escrever-se"element={<EscreverSe />} />
        <Route path="Home" element={<Home />} />
        <Route path="*" element={<NotFound />} />
        <Route path="Produto" element={<Produto />} />
        <Route path="Skins" element={<Skins />} />

    </Routes>
  </BrowserRouter>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);