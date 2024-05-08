import { AuthContext } from "./AuthContext";
import { useState } from "react";
import Cookies from "js-cookie";

export function AuthContextProvider({children}){
    const [isLogged, setIsLogged] = useState(false);
    const [user, setUser] = useState({
        firstName: "",
        lastName: "",
        email: "",
        role: ""
    });
   

    const handleLogin = () =>{
        setIsLogged(true);
        setToken(true);
    }

    const handleSetToken = (newToken) => {
        setToken(newToken);
      };
    

    return (
        <AuthContext.Provider value={{isLogged, user, handleLogin, setUser, handleSetToken}}>
            {children}
        </AuthContext.Provider>
    )
}