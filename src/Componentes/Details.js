import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Details() {
  const token = sessionStorage.getItem("token");

  const redirection = useNavigate();

  

  let {movieID} = useParams()
 
  const [movieData, setMovieData] = useState();

  const endPoint = `https://api.themoviedb.org/3/movie/${movieID}?api_key=e5a0fad23054f5e70af48a8528c67aa5&language=en-US`;

  const petition =  () => {
     axios
      .get(endPoint)
      .then((response) => {
        setMovieData(response.data);
        console.log(response.data)
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
      {movieData && (<div className="film-cont">
        <div className="img-title">
          <img
            src={`https://image.tmdb.org/t/p/original${movieData.poster_path}`}
            alt="movie-img"
            className="movie-img"
          ></img>
          <div className="title-rate">
            <div className="title">{movieData.original_title}</div>
            <div>
              <div>{movieData.vote_average}</div>
            </div>
            <div>
              {movieData.genres.map((genre,idx)=>{
                return(
                  <>
                    <div key={genre.id}>
                      {genre.name}
                    </div>
                  </>
                )
              })}
            </div>
          </div>
        </div>
        <div>
          <div className="description">{movieData.overview}</div>
        </div>
        <Link to={`/Listado`} className="vermas">
          Volver
        </Link>
      </div>)}
      <div>sas</div>
    </>
  );
}

export default Details;
