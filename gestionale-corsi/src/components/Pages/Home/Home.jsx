import React from "react";
import { NavLink } from "react-router-dom";
import styles from "./home.module.css";
import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext/AuthContext";

/*
inserire all'interno della home per provare il login (in AuthContextProvider sostituire le stringhe vuote con valori casuali per prova)
<div>{user.firstName}</div>
        <div>{user.lastName}</div>
        <div>{user.email}</div>
        <button onClick={handleClick}>logga</button>

*/

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
            <button className="btn btn-dark">Login</button>
          </div>
        </div>
        <div className="col text-center">
          <div className={`${styles.babyRect}`}>
            <p>
              Non sei ancora iscritto? Registrati!
            </p>
            <button className="btn btn-dark">Registrati</button>
          </div>
        </div>
      </div>
    </div>
  );
}
