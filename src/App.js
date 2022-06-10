import React from 'react'
import Nvabar from './component/Nvabar'
import Home from './component/Home'
import AddToCart from './component/AddToCart'
import { Routes, Route } from 'react-router-dom'
import Details from './component/Details'

const App = () => {
  return (
    <>
      <Nvabar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/AddToCart" element={<AddToCart />} />
        <Route path="/Details/:id" element={<Details />} />
      </Routes>
    </>
  )
}

export default App
