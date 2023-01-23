import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

//pages
import Home from './routes/Home';
import NewPost from './routes/NewPost';

import { createBrowserRouter, RouterProvider, Router } from "react-router-dom"

//objeto de configuração de roteamento
const router = createBrowserRouter([
  {
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />
      },
      {
        path: "/new",
        element: <NewPost />
      },
    ],
  },
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

