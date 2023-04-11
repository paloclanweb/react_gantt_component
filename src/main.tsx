import React from 'react'
import { createRoot } from 'react-dom/client'
import App from './App'
import { GlobalStyles } from "twin.macro";
import "./styles/index.css";

const container = document.getElementById('root')
const root = createRoot(container!)
root.render(
  <React.StrictMode>
  <GlobalStyles />
    <App />
  </React.StrictMode>,
)
