import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar'
import Info from './components/Info/Info';
import About from '../src/Pages/About/About'
import Project from '../src/Pages/Project/Project'
import Home from './Pages/Home/Home';
import Contact from './Pages/Contact/Contact';
import Footer from './Pages/Footer/Footer';
import { HashRouter } from 'react-router-dom';

const App = () => {
  return (
    <HashRouter>
      <Home />
      <About />
      <Project />
      <Contact />
      <Footer />
    </HashRouter>
);
};

export default App