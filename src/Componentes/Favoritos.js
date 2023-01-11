import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../Css/Favoritos.css";

function Favoritos(props) {
  const isLoggedIn = sessionStorage.getItem("token");
  const redirect = useNavigate();
  useEffect(() => {
    if (isLoggedIn === null) {
      redirect("/");
    }
  }, []);

  return (
    <>
      <div className="Favoritos-gen-cont">
        {props.favouritesCount > 0 && (
          <>
            {props.favourites.map((favourite) => {
             
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
                  <button
                    onClick={props.addOrRemoveFromFavs}
                    data-movie-id={favourite.id}
                    className="button-fav"
                  >
                    ❤
                  </button>
                  <Link to={`/details/${favourite.id}`} className="detalles">
                    Details
                  </Link>
                </div>
              );
            })}
          </>
        )}
        {props.favouritesCount === 0 && (
          <div className="favourites-none">
            There´s nothing in here, discover new films to add them to your
            favorites and see them here!
          </div>
        )}
      </div>
    </>
  );
}
export default Favoritos;
