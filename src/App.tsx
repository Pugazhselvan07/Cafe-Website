// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import { BrowserRouter as Router, Routes, Route, } from 'react-router-dom'
import React from 'react'
// import './App.css'
import Home from './Pages/Home'
import About from './Pages/About.tsx';
import Shop from './Pages/Shop.tsx';
import Menu from './Pages/Menu.tsx';
import Service from './Pages/Service.tsx';
import Contact from './Pages/Contact.tsx';
import Product from './Pages/Product.tsx';
import Navbar from './components/Navbar.tsx';
import ErrorMes from './Pages/Error.tsx';
import Footer from './components/Footer.tsx';

const App: React.FC = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/About" element={<About />} />
        <Route path="/Shop" element={<Shop />} />
        <Route path="/product/:id" element={<Product />} />
        <Route path="/Menu" element={<Menu />} />
        <Route path="/service" element={<Service />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="*" element={<ErrorMes />} />
      </Routes>
      <Footer/>
    </Router>
  );
};


export default App;

