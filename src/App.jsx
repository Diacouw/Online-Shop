import React from 'react'
import Navbar from './Components/Navbar/Navbar'
import './App.css'
import Footer from './Components/Footer/Footer'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './Pages/Home/Home'
import Product from './Pages/Product/Product'
import Category from './Pages/Category/Category'
import Login from './Pages/LogSignpage/Login'
import Signup from './Pages/LogSignpage/Signup'
import Contact from './Pages/Contact/Contact'
import AboutUs from './Pages/AboutUs/AboutUs'
import NotFound from './Pages/NotFound/NotFound'
import Basket from './Pages/Basket/Basket'

const App = () => {
  return (
    <>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path={'*'} element={<NotFound />} />
          <Route path='/product-detail/:id' element={<Product />} />
          <Route path='/product/:category' element={<Category/>} />
          <Route path='/login' element={<Login/>} />
          <Route path='/signup' element={<Signup/>} />
          <Route path='/contact' element={<Contact/>} />
          <Route path='/aboutus' element={<AboutUs/>} />
          <Route path='/basket' element={<Basket/>} />
        </Routes>
        <Footer />
      
    </>
  )
}

export default App