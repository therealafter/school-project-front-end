import React from 'react'
import ReactDOM from 'react-dom/client'
import Home from './pages/Home';

import "./styles/global.css"
import 'react-toastify/dist/ReactToastify.css';

import { ToastContainer } from 'react-toastify';
import { Routes } from './routes';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Routes />
    <ToastContainer />
  </React.StrictMode>,
)
