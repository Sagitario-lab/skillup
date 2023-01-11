import { Link } from "react-router-dom";
import SearchBar from "./SearchBar";

import "../Css/Header.css";


function Header() {
  return (
    <header className="header-gen-cont">
      <nav className="header-nav">
        <ul className="header-link-list">
          <li className="header-link">
            <Link to={"/listado"} className="Link">
              List
            </Link>
          </li>
          <li className="header-link">
            <Link to={"/favoritos"} className="Link">
              Favourites
            </Link>
          </li>
          <li className="header-link">
            <Link to={"/about"} className="Link">About</Link>
          </li>
        </ul>
      </nav>
      <div className="header-title">~ Film App ~</div>
      <div>
        <SearchBar></SearchBar>
      </div>
    </header>
  );
}

export default Header;
