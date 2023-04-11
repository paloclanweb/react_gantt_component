import React from 'react'
import { createRoot } from 'react-dom/client'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

//Pages
import App from './App'
import Filter from './pages/filter'

//styles
import { GlobalStyles } from "twin.macro";
import "./styles/index.css";

const container = document.getElementById('root')
const root = createRoot(container!)

const router = createBrowserRouter([
  {
    path: "/",
    element:<App />
  },
  {
    path: "filter",
    element: <Filter />,
  },
]);

root.render(
  <React.StrictMode>
  <GlobalStyles />
    <RouterProvider router={router} />
  </React.StrictMode>,
)
