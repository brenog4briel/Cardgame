import {BrowserRouter as Router, Route,Routes} from "react-router-dom"
import Home from "./components/Home/HomeContainer";
import Historia from "./components/Historia/HistoriaContainer"
import Geografia from "./components/Geografia/GeografiaContainer"
import Matematica from "./components/Matematica/MatematicaContainer"
import Fisica from "./components/Física/FisicaContainer"

function App() {
  return (
      <Router>
          <Routes>
            <Route path = "/" element = {<Home></Home>}></Route>
            <Route path = "/historia" element = {<Historia></Historia>}></Route>
            <Route path = "/geografia" element = {<Geografia></Geografia>}></Route>
            <Route path = "/matematica" element = {<Matematica></Matematica>}></Route>
            <Route path = "/fisica" element = {<Fisica></Fisica>}></Route>
          </Routes>
      </Router>

      
  );
}

export default App;


