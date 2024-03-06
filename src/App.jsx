import {Routes, Route} from "react-router-dom"
import Cidades from "./Cidades"
import Home from "./Home"
import CidadeDetalhe from "./CidadeDetalhe"

function App() {
 

  return  (
  <Routes>
    <Route path="/" element={<Home />}/>
    <Route path="/cidades" element={<Cidades />}/>
    <Route path="/cidades/:cidadeId" element={<CidadeDetalhe />}/>
  </Routes>
  )
}

export default App
