import React from 'react'
import ReactDOM from 'react-dom/client'
import { Layout } from './components/Layout/MainLayout/Layout';
import { Home } from './components/Pages/Home/Home';
import { Corsi } from './components/Pages/Corsi/Corsi';
import { Corso } from './components/Corso/Corso';
import { NotFound } from './components/Pages/NotFound/NotFound';
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.bundle";
import "bootstrap-icons/font/bootstrap-icons.css"
import { createBrowserRouter, RouterProvider } from "react-router-dom"
import { AuthContextProvider } from './components/context/AuthContext/AuthContextProvider';

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
