import logo from "./logo.svg";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import Login from "./Componentes/Login";
import Listado from "./Componentes/Listado";
import Header from "./Componentes/Header";
import Home from "./Componentes/Home";
import Details from './Componentes/Details'
import Footer from "./Componentes/Footer";

function App() {
  

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Header></Header>
          <Routes>
            <Route path="/Home" element={<Home/>}></Route>
            <Route exact path="/" element={<Login/>}></Route>
            <Route path="/Listado" element={<Listado/>}></Route>
            <Route path="/Details/:movieID" element={<Details/>}></Route>
          </Routes>
        <Footer></Footer>

        
      </header>
    </div>
  );
}

export default App;
