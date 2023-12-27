import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import Home from './index.jsx'
import './index.css'

import { createBrowserRouter, RouterProvider } from "react-router-dom";


const router = createBrowserRouter([
  {
    path:"/",
    element: <Home />
  },
  {
    path:"/anadu",
    element: <div>Anadu Godwin</div>
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <App /> */}
    {/* <Home /> */}
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
