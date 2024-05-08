import React from 'react';
import { NavLink } from 'react-router-dom';
import Cookies from 'js-cookie';

export function Navbar() {
  const token = Cookies.get('token');
  const isAdmin = token && JSON.parse(atob(token.split('.')[1])).ruoli.includes('Admin');

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container-fluid">
        <NavLink className="navbar-brand" to="/">
          <i className="bi bi-house-door-fill me-1"></i> Home
        </NavLink>
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
            <NavLink className="nav-link" to="/corsi">
              <i className="bi bi-book-fill me-1"></i> Corsi
            </NavLink>
            {token && (
              <NavLink className="nav-link" to={isAdmin ? "/admin" : "/user"}>
                <i className="bi bi-person-fill me-1"></i> Profilo
              </NavLink>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
}