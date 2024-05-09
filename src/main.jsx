import React from 'react'
import ReactDOM from 'react-dom/client'
import './main.css'


import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import Avt from './Rotas/QuantoFaltaNaAvt/Avt';
import Home from './Rotas/Home/Home';
import Media from './Rotas/MediaTotal/Media'
import Response from './Rotas/Response/Response';
import Recuperacao from './Rotas/QuantoPrecisoNaRec/Recuperacao';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home/>
  },
  {
    path: '/QuantoFaltaNaAvt',
    element: <Avt />
  },
  {
    path: '/MediaTotal',
    element: <Media/>
  },
  {
    path: '/Response',
    element: <Response/>
  },
  {
    path: '/QuantoPrecisoNaRec',
    element: <Recuperacao/>
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
