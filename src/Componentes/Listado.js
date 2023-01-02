import { Link, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import { swAlert } from "@sweetalert/with-react";
import "../Css/Listado.css";
function Listado() {
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
        swAlert("Error", "algo sali+o mal", "warning");
      });
  }, [setFilm]);

  return (
    <>
      <div className="cont">
        {film.map((res, idx) => {
          return (
            <>
              <div key={idx} className="film-cont">
                <div className="img-title">
                  <img
                    src={`https://image.tmdb.org/t/p/original${res.poster_path}`}
                    alt="movie-img"
                    className="movie-img"
                  ></img>
                  <div className="title-rate">
                    <div className="title">{res.title}</div>
                  </div>
                </div>

                <div>
                  <div className="description">{res.overview}</div>
                </div>
                <Link to={`/Details/${res.id}`} className="vermas">
                  Ver Más
                </Link>
              </div>
            </>
          );
        })}
      </div>
    </>
  );
}
export default Listado;
//
