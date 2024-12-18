// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import GlobalStyles from './GlobalStyles';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Guides from './pages/Guides';
import Home from './pages/Home';
import Recommendations from './pages/Recommendations';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const App = () => {
  return (
    <Router>
      <GlobalStyles />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/recommendations" element={<Recommendations />} />
        <Route path="/guides" element={<Guides />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
