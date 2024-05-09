import React from 'react'
import ReactDOM from 'react-dom/client'
import './main.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import Avt from './QuantoFaltaNaAvt/Avt';
import Home from './Home/Home';
import Media from './MediaTotal/Media'
import Response from './MediaTotal/Response';

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
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
