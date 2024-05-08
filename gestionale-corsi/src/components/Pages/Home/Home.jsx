import React from "react";
import { NavLink } from "react-router-dom";
import styles from "./home.module.css";
import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext/AuthContext";


export function Home() {
  const { user, setUser } = useContext(AuthContext);

  const handleClick = (e) => {
    console.log(e);
  };
  return (
    <div className="container mt-5">
      <div className={`jumbotron text-center ${styles.rectangle}`}>
        <h1 className="display-4">Benvenuto al Gestionale Corsi!</h1>
        <p className="lead">Gestisci facilmente i tuoi corsi.</p>
        <hr className="my-4" />
        <p>
          Esplora i nostri corsi disponibili, clicca nel bottone sottostante o
          nella scritta "Corsi" in alto!
        </p>
        <NavLink to="/corsi" className={`btn btn-lg ${styles.bigButton}`}>
          Esplora i Corsi
        </NavLink>
      </div>
      <div className="row mt-4">
        <div className="col text-center">
          <div className={`${styles.babyRect}`}>
            <p>
              Sei già iscritto? Fai il login
            </p>
            <NavLink to="/login" className="btn btn-dark">Login</NavLink>
          </div>
        </div>
        <div className="col text-center">
          <div className={`${styles.babyRect}`}>
            <p>
              Non sei ancora iscritto? Registrati!
            </p>
            <NavLink to="/registrazione" className="btn btn-dark">Registrati</NavLink>
          </div>
        </div>
      </div>
    </div>
  );
}
