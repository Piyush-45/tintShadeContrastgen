import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter } from "react-router-dom";
import { ColorProvider } from './context/ColorContext.jsx';
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <ColorProvider>
        <App />
      </ColorProvider>

    </BrowserRouter>

  </React.StrictMode>,
)
