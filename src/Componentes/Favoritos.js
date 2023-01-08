import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { swAlert } from "@sweetalert/with-react";
import "../Css/Favoritos.css";

function Favoritos(props) {
  const [favourites, setFavourites] = useState([]);

  const isLoggedIn = sessionStorage.getItem("token");

  const redirect = useNavigate();

  useEffect(() => {
    let favInLocal = localStorage.getItem("favs");
    console.log(favInLocal);
    if (isLoggedIn === null) {
      redirect("/");
    }
    if (favInLocal != null) {
      const favsArray = JSON.parse(favInLocal);

      setFavourites(favsArray);
    }
  }, []);
  

  

  return (
    <>
      <div className="Favoritos-gen-cont">
        {favourites.map((favourite) => {
          return (
            <div key={favourite.id} className="film-cont">
              <div className="img-title">
                <img
                  src={favourite.imgURL}
                  alt="movie-img"
                  className="movie-img"
                ></img>
                <h5 className="title-rate">{favourite.title}</h5>
              </div>

              <p className="description">{favourite.description}</p>
              

              <Link to={`/Details/${favourite.id}`} className="detalles">
                Details
              </Link>
            </div>
          );
        })}
      </div>
    </>
  );
}
export default Favoritos;
