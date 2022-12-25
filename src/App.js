import {BrowserRouter as Router, Route,Routes} from "react-router-dom"
import Home from "./components/Home/HomeContainer";
import Historia from "./components/Historia/HistoriaContainer"
import Geografia from "./components/Geografia/GeografiaContainer"
import Matematica from "./components/Matematica/MatematicaContainer"
import Portugues from "./components/Portugues/PortuguesContainer"
import Fisica from "./components/Física/FisicaContainer"
import Quimica from "./components/Quimica/QuimicaContainer"
import Filosofia from "./components/Filosofia/FilosofiaContainer"
import Sociologia from "./components/Sociologia/SociologiaContainer"





function App() {
  return (
      <Router>
          <Routes>
            <Route path = "/" element = {<Home></Home>}></Route>
            <Route path = "/historia" element = {<Historia></Historia>}></Route>
            <Route path = "/geografia" element = {<Geografia></Geografia>}></Route>
            <Route path = "/matematica" element = {<Matematica></Matematica>}></Route>
            <Route path = "/portugues" element = {<Portugues></Portugues>}></Route>
            <Route path = "/fisica" element = {<Fisica></Fisica>}></Route>
            <Route path = "/quimica" element = {<Quimica></Quimica>}></Route>
            <Route path = "/filosofia" element = {<Filosofia></Filosofia>}></Route>
            <Route path = "/sociologia" element = {<Sociologia></Sociologia>}></Route>
          </Routes>
      </Router>

      
  );
}

export default App;


