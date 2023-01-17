import "./App.css";
import { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import Login from "./Componentes/Login";
import Listado from "./Componentes/Listado";
import Header from "./Componentes/Header";
import Details from "./Componentes/Details";
import About from "./Componentes/About";
import Resultados from "./Componentes/Resultados";
import Favoritos from "./Componentes/Favoritos";

function App() {
  const [favourites, setFavourites] = useState([]);

  useEffect(() => {
    let favInLocal = localStorage.getItem("favs");

    if (favInLocal != null) {
      const favsArray = JSON.parse(favInLocal);
      setFavourites(favsArray);
    }
    let loggedIn = sessionStorage.getItem("token");
   
  }, []);

  const favouritesCount = favourites.length;

  const addOrRemoveFromFavs = (e) => {
    const favMovies = localStorage.getItem("favs");

    let tempMoviesInFavs;

    if (favMovies === null) {
      tempMoviesInFavs = [];
    } else {
      tempMoviesInFavs = JSON.parse(favMovies);
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
      setFavourites(tempMoviesInFavs);
    } else {
      let movieLeft = tempMoviesInFavs.filter((oneMovie) => {
        return oneMovie.id !== movieData.id;
      });
      localStorage.setItem("favs", JSON.stringify(movieLeft));
      setFavourites(movieLeft);
    }
  };

  return (
    <div className="App">
      <header className="App-header">
        <Header></Header>
        <Routes>
          <Route exact path="/" element={<Login />}></Route>
          <Route
            path="/favoritos"
            element={
              <Favoritos
                favouritesCount={favouritesCount}
                favourites={favourites}
                addOrRemoveFromFavs={addOrRemoveFromFavs}
              />
            }
          ></Route>
          <Route path="/about" element={<About />}></Route>
          <Route
            path="/listado"
            element={<Listado addOrRemoveFromFavs={addOrRemoveFromFavs} />}
          ></Route>
          <Route
            path="/resultados/:movieTitle"
            element={<Resultados addOrRemoveFromFavs={addOrRemoveFromFavs} />}
          ></Route>
          <Route path="/details/:movieID" element={<Details />}></Route>
        </Routes>
      </header>
    </div>
  );
}

export default App;
