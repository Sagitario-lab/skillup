import logo from "./logo.svg";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import Login from "./Componentes/Login";
import Listado from "./Componentes/Listado";
import Header from "./Componentes/Header";
import Home from "./Componentes/Home";

function App() {
  

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Header></Header>
          <Routes>
            <Route path="/Home" element={<Home/>}></Route>
            <Route exact path="/" element={<Login/>}></Route>
            <Route path="/listado" element={<Listado/>}></Route>
          </Routes>
        

        
      </header>
    </div>
  );
}

export default App;
