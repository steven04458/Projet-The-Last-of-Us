import { BrowserRouter, Routes, Route } from 'react-router-dom'
import React from 'react'
import ReactDOM from 'react-dom/client'
import Home from './pages/home/Home'
import LogReg from "./pages/login/LoginRegister"

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
        <Routes>
          <Route path='/' element={<LogReg />}/>
          <Route path='/Home' element={<Home />}/>
        </Routes>
      </BrowserRouter>
  </React.StrictMode>,
)