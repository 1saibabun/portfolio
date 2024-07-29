import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './Components/Navbar';
import AboutPage from './Pages/AboutPage';
import ContactPage from './Pages/ContactPage';
import Home from './Pages/Home';
import SocialMedia from './Pages/SocialMedia';
import Projects from './Pages/Projects';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/social-media" element={<SocialMedia />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
    </Router>
  );
}

export default App;
