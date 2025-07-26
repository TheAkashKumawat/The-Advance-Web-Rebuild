import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './components/frontend/Home';
import About from './components/frontend/About';
import './assets/css/style.scss';
import Services from './components/frontend/Services';
import GroupComp from './components/frontend/GroupComp';
import Blogs from './components/frontend/Blogs';
import ContactUs from './components/frontend/ContactUs';


function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services/>} />
          <Route path="/groupComp" element={<GroupComp/>} />
          <Route path="/blogs" element={<Blogs/>} />
          <Route path="/contact" element={<ContactUs/>} />
          

        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
