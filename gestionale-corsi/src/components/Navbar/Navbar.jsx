import { NavLink } from "react-router-dom";
import navbarColor from './navbar.module.css';

export function Navbar() {
  return (
    <nav className={`navbar navbar-expand-lg navbar-dark  ${navbarColor.navbarCustom}`}> 
    <div className="container-fluid">
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav">
            <NavLink className="nav-link" to="/">
              <i className="bi bi-house-door-fill me-1"></i> Home
            </NavLink>
            <NavLink className="nav-link" to="/corsi">
              <i className="bi bi-book-fill me-1"></i> Corsi
            </NavLink>
          </div>
        </div>
      </div>
    </nav>
  );
}