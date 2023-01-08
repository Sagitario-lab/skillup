import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Login from "./Componentes/Login";
import Listado from "./Componentes/Listado";
import Header from "./Componentes/Header";
import Details from "./Componentes/Details";
import Info from "./Componentes/Info";
import Resultados from "./Componentes/Resultados";
import Favoritos from "./Componentes/Favoritos";

function App() {
  
  const addOrRemoveFromFavs = (e) => {
    const favMovies = localStorage.getItem("favs");

    let tempMoviesInFavs;

    if (favMovies === null) {
      tempMoviesInFavs = [];
      console.log("no hay nada en el localStorage");
    } else {
      tempMoviesInFavs = JSON.parse(favMovies);
      console.log("Hay algo en el localStorage");
    }

    const btn = e.currentTarget;
    const parent = btn.parentElement;
    const imgURL = parent.querySelector("img").getAttribute("src");
    const title = parent.querySelector("h5").innerText;
    const description = parent.querySelector("p").innerText;
    const movieData = {
      imgURL,
      title,
      description,
      id: btn.dataset.movieId,
    };

    let movieIsInArray = tempMoviesInFavs.find((oneMovie) => {
      return oneMovie.id === movieData.id;
    });

    if (!movieIsInArray) {
      tempMoviesInFavs.push(movieData);
      localStorage.setItem("favs", JSON.stringify(tempMoviesInFavs));
      console.log("peliicula agregada");
    } else {
      let movieLeft = tempMoviesInFavs.filter((oneMovie) => {
        return oneMovie.id !== movieData.id;
      });
      localStorage.setItem("favs", JSON.stringify(movieLeft));
      console.log("pelicula eliminada");
    }
  };

  return (
    <div className="App">
      <header className="App-header">
      
        <Header></Header>
        <Routes>
         
          <Route exact path="/" element={<Login />}></Route>
          <Route path="/Favoritos" element={<Favoritos/>}></Route>
          <Route path="/Info" element={<Info/>}></Route>
          <Route
            path="/Listado"
            element={<Listado addOrRemoveFromFavs={addOrRemoveFromFavs} />}
          ></Route>
          <Route
            path="/Resultados/:movieTitle"
            element={<Resultados />}
          ></Route>
          <Route path="/Details/:movieID" element={<Details />}></Route>
        </Routes>
       
      </header>
    </div>
  );
}

export default App;
