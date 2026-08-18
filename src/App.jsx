import { BrowserRouter, Routes, Navigate, Route } from 'react-router-dom'
import { useState } from 'react'
import './App.css'
import Landingpage from './pages/index'
import About from './pages/about'
import Contact from './pages/contact'
import Portfolio from './pages/portfolio'

function App() {


  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Landingpage />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
