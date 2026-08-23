import { BrowserRouter, Routes, Navigate, Route } from 'react-router-dom'
import { useState } from 'react'
import './App.css'
import Landingpage from './pages/index'
import About from './pages/about'
import Contact from './pages/contact'
import Portfolio from './pages/portfolio'

import ProjectDetails from "./pages/project";
import ScrollToTop from "./components/ScrollToTop";

function App() {


  return (
    <>
      <BrowserRouter>
      <ScrollToTop />
        <Routes>
          <Route path="/" element={<Landingpage />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/portfolio/:id" element={<ProjectDetails />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
