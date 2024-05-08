import React, { useState, useEffect, useContext } from "react";
import { AuthContext } from "../../context/AuthContext/AuthContext";
import { jwtDecode } from "jwt-decode";
import Cookies from "js-cookie";
import { logout } from "../../../Service/Config/RESTService";
import { useNavigate } from "react-router-dom";
import styles from "./UserPage.module.css"

export function UserPage() {
  const navigate = useNavigate();

  const { user, setUser } = useContext(AuthContext);

  const updateUserDataFromToken = () => {
    const token = Cookies.get("token");
    if (token) {
      const decodedToken = jwtDecode(token);
      setUser(decodedToken);
    }
  };

  const handleLogout = async () => {
    try {
      await logout();
      navigate("/login");
    } catch (error) {
      console.error("Errore durante il logout:", error);
    }
  };

  useEffect(() => {
    updateUserDataFromToken();
  }, []);

  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <div className={`card ${styles.color}`}>
            <div className="card-body">
              <h2 className="card-title mb-4">Benvenut* {user.nome}</h2>
              <div className= {styles.white}>
                <p>Nome: {user.nome}</p>
                <p>Cognome: {user.cognome}</p>
                <p>Email: {user.email}</p>
                {user.ruoli && user.ruoli.length > 0 ? (
                  <p>Ruoli: {user.ruoli.join(", ")}</p>
                ) : (
                  <p>Ruoli: Utente base</p>
                )}
              </div>
              <button className="btn btn-danger" onClick={handleLogout}>
                Logout
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
