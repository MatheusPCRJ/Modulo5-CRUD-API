import ReactDOM from "react-dom/client";
import '../src/index.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LandingPage from "./pages/LandingPage"
import EscreverSe from "./pages/EscreverSe"
import RecuperarSenha from "./pages/RecuperarSenha"

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
          <Route path="/" element={<LandingPage />}/>
          <Route path="RecuperarSenha" element={<RecuperarSenha/>} />
          <Route path="Escrever-se" element={<EscreverSe />} />
      </Routes>
    </BrowserRouter>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);