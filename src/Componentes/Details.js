import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "../Css/Detalle.css";

function Details() {
  const token = sessionStorage.getItem("token");

  const redirection = useNavigate();

  let { movieID } = useParams();

  const [movieData, setMovieData] = useState();

  const endPoint = `https://api.themoviedb.org/3/movie/${movieID}?api_key=e5a0fad23054f5e70af48a8528c67aa5&language=en-US`;

  const petition = () => {
    axios
      .get(endPoint)
      .then((response) => {
        setMovieData(response.data);
        console.log(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    if (token === null) {
      redirection("/");
    }
    petition();
  }, [movieID]);

  return (
    <>
      {movieData && (
        <div className="Details-gen-cont">
          <div>
            <img
              src={`https://image.tmdb.org/t/p/original${movieData.poster_path}`}
              alt="movie-img"
              className="details-movie-img"
            ></img>
            
          </div>
          <div className="details-gen-info">
            <div className="">
              <div>
                <div className="details-title">{movieData.original_title}</div>
                <div className="details-tagline">{movieData.tagline}</div>
                <div className="details-genres">
                  {movieData.genres.map((genre) => {
                    return <div key={genre.id} className="details-individual-genre">{genre.name}</div>;
                  })}
                </div>
              </div>
            </div>
            <div>
              <div className="Details-overview">{movieData.overview}</div>
            </div>
            <div className="details-other-info">
              <div>Popularity: {movieData.vote_average.toFixed(1)}</div>
              <div>Status: {movieData.status}</div>
              <div>Budget: {movieData.budget}</div>
            </div>
            <div>
              <a href={movieData.homepage} target="_blank" alt="film-homepage" className="detail-LINKS ">
                Film Homepage
              </a>
            </div>
          </div>
          
          <Link to={`/listado`} className="detail-LINKS Back">
            List
          </Link>
        </div>
      )}
    </>
  );
}

export default Details;
