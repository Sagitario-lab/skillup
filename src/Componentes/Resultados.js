import { useParams, Link } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import "../Css/Resultados.css";

function Resultados(props) {
  const { movieTitle } = useParams();
  const [filmsResults, setFilmsResults] = useState([]);

  useEffect(() => {
    const endPoint = `https://api.themoviedb.org/3/search/movie?api_key=e5a0fad23054f5e70af48a8528c67aa5&language=en-US&page=1&include_adult=false&query=${movieTitle}`;

    axios
      .get(endPoint)
      .then((res) => {
        const results = res.data.results;
        setFilmsResults(results);
      })
      
      .catch((error) => {
   
      });
  }, [movieTitle]);
  
  return (
    <>
      <div className="cont results">
        <div  className="results-negative">
          {filmsResults.length===0 ? (<h3>No results ಥ_ಥ</h3>) : (<h2>Results: {movieTitle}</h2>) }
        </div>
        <div className="cont-results">
          {filmsResults.map((films) => {
            return (
              <div key={films.id} className="film-cont">
                <div className="img-title">
                  {films.poster_path ? (
                    <img
                      src={`https://image.tmdb.org/t/p/original${films.poster_path}`}
                      alt="movie-img"
                      className="movie-img"
                    ></img>
                  ) : (
                    <>
                      <img
                        src={`https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ8J5kRg4jyKdwERK8mstWJ41g2ONXmkPHT5miTjINLzYVKbEvHrQ09G_Pye8-U72Atne0&usqp=CAU`}
                        alt="movie-img"
                        className="movie-img"
                      ></img>
                    </>
                  )}
                </div>
                <h5 className="title-rate">{films.title}</h5>

                <p className="description">
                  {films.overview ? (
                    films.overview
                  ) : (
                    <>
                      overview not found!<br></br>
                      <div className="face">(⊙_⊙)？</div>
                    </>
                  )}
                </p>

                <button
                  onClick={props.addOrRemoveFromFavs}
                  data-movie-id={films.id}
                  className="button-fav"
                >
                  ❤
                </button>

                <Link to={`/details/${films.id}`} className="Discover">
                  Discover
                </Link>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default Resultados;
