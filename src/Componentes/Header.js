import { Link } from "react-router-dom";
import SearchBar from "./SearchBar";

import "../Css/Header.css";


function Header() {
  return (
    <header className="header-gen-cont">
      <nav className="header-nav">
        <ul className="header-link-list">
          <li className="header-link">
            <Link to={"/Listado"} className="Link">
              Listado
            </Link>
          </li>
          <li className="header-link">
            <Link to={"/Favoritos"} className="Link">
              Favoritos
            </Link>
          </li>
          <li className="header-link">
            <Link to={"/Info"} className="Link">Info</Link>
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
