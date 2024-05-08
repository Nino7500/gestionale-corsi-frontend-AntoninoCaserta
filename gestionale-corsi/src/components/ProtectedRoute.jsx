import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { jwtDecode } from "jwt-decode"; 
import Cookies from "js-cookie";

export function ProtectedRoute({ children }) {

  const token = Cookies.get('token');
  const navigate = useNavigate();


  useEffect(() => {
    if (!token) {
      navigate("/login");
      return;
    }
  
    try {
      const decodedToken = jwtDecode(token);
      const ruoli = decodedToken.ruoli;
      const isAdmin = ruoli.includes("Admin");
      
      if (!isAdmin) {
        navigate("/login");
      }
    } catch (error) {
      console.error('Errore durante la decodifica del token:', error);
      navigate("/login");
    }
  }, [token, navigate]);

  return <>{children}</>;
}