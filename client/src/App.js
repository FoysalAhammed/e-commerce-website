import React from 'react'
import { BrowserRouter, Route, Routes } from "react-router-dom"
import AppContext from './Utils/context'
import Category from "./components/Category/Category"
import Footer from "./components/Footer/Footer"
import Newsletter from "./components/Footer/Newsletter/Newsletter"
import Header from "./components/Header/Header"
import Home from "./components/Home/Home"
import SingleProduct from "./components/SingleProduct/SingleProduct"
const App = () => {
  return (
    <BrowserRouter>
    <AppContext>
    <Header/>
     <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/category/:id" element={<Category/>} />
      <Route path="/product/:id" element={<SingleProduct/>} />
     </Routes>
     <Newsletter/>
     <Footer/>
     </AppContext>
    </BrowserRouter>
  )
}

export default App