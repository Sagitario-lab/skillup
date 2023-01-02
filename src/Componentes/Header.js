import { Link } from "react-router-dom";




function Header() {



  return (
    <header>
      <nav>
        <ul>
          <li><Link to={'/Home'}>Home</Link></li>
          <li><Link to={'/Listado'}>Listado</Link></li>
          <li><Link>Contacto</Link></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
