import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom"

import Navigation from './Components/Navigation'

import Home from './Pages/Home'
import Katch from './Pages/Katch'
import Focusmate from './Pages/Focusmate'
import Nyala from './Pages/Nyala'
import Paro from './Pages/Paro'
import Sismo from './Pages/Sismo'
import Tomo from './Pages/Tomo'
import Vidbib from './Pages/Vidbib'
import PageNotFound from './Pages/PageNotFound'
import Footer from './Components/Footer'
import ScrollToTop from './Components/ScrollToTop'


export default function App() {

  return (
    <BrowserRouter>
        <Navigation />
        <ScrollToTop />
        <Routes>
            <Route path="/" index element={<Home />} />
    
            <Route path="/katch" element={<Katch />} />
            <Route path="/focusmate" element={<Focusmate />} />
            <Route path="/nyala" element={<Nyala />} />
            <Route path="/paro" element={<Paro />} />
            <Route path="/sismo" element={<Sismo />} />
            <Route path="/tomo" element={<Tomo />} />
            <Route path="/vidbib" element={<Vidbib />} />

            <Route path="*" element={<PageNotFound />} />
        </Routes>
        <Footer />
    </BrowserRouter>
  )
}
