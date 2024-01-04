import React from 'react'
import Home from './Home'
import Cuisine from "./Cuisine";
import { Routes, Route } from "react-router-dom";

const Pages = () => {
  return (
    <div>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/cuisine' element={<Cuisine />} />
        </Routes>
    </div>
  )
}

export default Pages
