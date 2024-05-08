import React from 'react';
import ReactDOM from 'react-dom';
import { Layout } from './components/Layout/MainLayout/Layout';
import { Home } from './components/Pages/Home/Home';
import { Corsi } from './components/Pages/Corsi/Corsi';
import { Corso } from './components/Corso/Corso';
import { NotFound } from './components/Pages/NotFound/NotFound';
import { Login } from './components/Pages/Login/Login'; // Aggiungi questa linea
import { Registrazione } from './components/Pages/Registrazione/Registrazione'; // Aggiungi questa linea
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.bundle";
import "bootstrap-icons/font/bootstrap-icons.css"
import { createBrowserRouter, RouterProvider } from "react-router-dom"
import { AuthContextProvider } from './components/context/AuthContext/AuthContextProvider';
import { UserPage } from './components/Pages/userPage/UserPage';
import { AdminPage } from './components/Pages/adminPage/AdminPage';
import { ProtectedRoute } from './components/ProtectedRoute';

const router = createBrowserRouter([
  {
    element: (
    <AuthContextProvider>
      <Layout/>
    </AuthContextProvider>
    ),
    children:[
      {
        path: "/",
        children: [
          {
            path: "",
            element: <Home/>
          },
          {
            path: "corsi/",
            children:[
              {
                path: "",
                element: <Corsi />
              },
              {
                path: "corso/:id",
                element: <Corso />
              }
            ]
          },
          {
            path: "login", 
            element: <Login /> 
          },
          {
            path: "registrazione", 
            element: <Registrazione /> 
          },
          {
            path: "user",
            element: <UserPage/>
          },
        {
          path: "admin",
          element: <ProtectedRoute><AdminPage/></ProtectedRoute>
        }
        ]
      }
    ]
  },
  {
    path:"*",
    element: <NotFound />
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
    <RouterProvider router={router} />
)