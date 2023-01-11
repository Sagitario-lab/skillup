import { Link, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import { swAlert } from "@sweetalert/with-react";
import "../Css/Listado.css";
function Listado(props) {
  const redirection = useNavigate();
  const [film, setFilm] = useState([]);
  const token = sessionStorage.getItem("token");
  useEffect(() => {
    if (token === null) {
      redirection("/");
    }
    
    const endPoint =
    "https://api.themoviedb.org/3/discover/movie?api_key=e5a0fad23054f5e70af48a8528c67aa5&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_watch_monetization_types=flatrate";
    axios
    .get(endPoint)
    .then((res) => {
      const apiData = res.data;
      setFilm(apiData.results);
      
      })
      .catch((error) => {
        swAlert("Error", "algo salio mal", "warning");
      });
  }, [setFilm]);

  return (
    <>
      <div className="cont">
        {film.map((res, idx) => {
          return (
            
              <div key={res.id} className="film-cont">
                <div className="img-title">
                  <img
                    src={`https://image.tmdb.org/t/p/original${res.poster_path}`}
                    alt="movie-img"
                    className="movie-img"
                  ></img>
                </div>
                <h5 className="title-rate">{res.title}</h5>

                <p className="description">{res.overview}</p>

                <button
                  onClick={props.addOrRemoveFromFavs}
                  data-movie-id={res.id}
                  className='button-fav'
                >
                  ❤
                </button>

                <Link to={`/details/${res.id}`} className="Discover">
                  Discover
                </Link>
              </div>
            
          );
        })}
      </div>
    </>
  );
}
export default Listado;
//
