import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import StoreContextProvider from './Context/Context.jsx'
import { BrowserRouter } from 'react-router-dom'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
    <StoreContextProvider>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </StoreContextProvider>
)
