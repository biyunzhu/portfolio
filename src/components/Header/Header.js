import "./Header.scss";
import { Link } from "react-router-dom";
function Header() {
  return (
    <header>
      <nav className="nav">
        <ul className="nav__list">
          <li>
            {/* <a href="#about">About</a> */}
            <Link to="/">About</Link>
          </li>
          <li>
            {/* <a href="#projects">Projects</a> */}
            <Link to="/designs">Designs</Link>
          </li>
          {/* <li>
            <a href="#contact">Contact</a>
          </li> */}
        </ul>
      </nav>
    </header>
  );
}

export default Header;
