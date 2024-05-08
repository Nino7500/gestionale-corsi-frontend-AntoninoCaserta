import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import Cookies from "js-cookie";
import { jwtDecode } from "jwt-decode";
import { login } from "../../../Service/Config/RESTService";
import styles from "./Login.module.css"

export function Login() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [errorFlag, setErrorFlag] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await login(formData.email, formData.password);
      if (response.ok) {
        const data = await response.json();
        if (data.token) {
          console.log("Login avvenuto con successo!");
          console.log(response);

          const token = data.token;
          console.log(token);
          Cookies.set("token", token);

          const decodedToken = jwtDecode(token);
          console.log(decodedToken);

          const { ruoli } = decodedToken;
          console.log(ruoli);

          const isAdmin = decodedToken.ruoli[0] === "Admin";

          navigate(isAdmin ? "/admin" : "/user");
        } else {
          console.log("Credenziali non valide. Riprova.");
          setErrorFlag(true);
        }
      } else {
        console.log("Errore durante il login:", response.statusText);
        setErrorFlag(true);
      }
    } catch (error) {
      console.error("Errore durante il login:", error);
      setErrorFlag(true);
    }
  };
  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <div className={`card ${styles.color}`}>
            <div className="card-body">
              <h2 className="card-title mb-4">Login</h2>
              <form onSubmit={handleSubmit}>
                <div className="mb-3">
                  <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    value={formData.email}
                    onChange={handleChange}
                    className="form-control"
                    required
                  />
                </div>
                <div className="mb-3">
                  <input
                    type="password"
                    name="password"
                    placeholder="Password"
                    value={formData.password}
                    onChange={handleChange}
                    className="form-control"
                    required
                  />
                </div>
                <button type="submit" className={`btn btn-primary ${styles.button}`}>
                  Login
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
