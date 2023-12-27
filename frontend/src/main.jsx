import React from 'react'
import ReactDOM from 'react-dom/client'
// import App from './App.jsx'
import Home from './index.jsx'
import './index.css'
import ErrorPage from "./Error-page.jsx"
import TaskForm from "./Create-task.jsx"

import { createBrowserRouter, RouterProvider } from "react-router-dom";

const url  = "http://127.0.0.1:8000/api/todos/";

const router = createBrowserRouter([
  {
    path:"/",
    element: <Home Endpoint={url}/>,
    errorElement: <ErrorPage/>,
  },
  {
    path:"/create",
    element: <TaskForm/>
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <App /> */}
    {/* <Home /> */}
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
