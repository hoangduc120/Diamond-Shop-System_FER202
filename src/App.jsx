import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import HeroSection from './components/layout/HeroSection';
import Dashboard from './components/dashboard/Dashboard'; 
import Footer from './components/layout/Footer';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<HeroSection />} />
        <Route path="/dashboard/*" element={<Dashboard />} />
        <Route path="/diamonds" element={<div>Diamonds Page</div>} />
        <Route path="/engagementRings" element={<div>Engagement Rings Page</div>} />
        <Route path="/weddingRings" element={<div>Wedding Rings Page</div>} />
        <Route path="/jewelry" element={<div>Jewelry Page</div>} />
        <Route path="/gemstones" element={<div>Gemstones Page</div>} />
        <Route path="/education" element={<div>Education Page</div>} />
      </Routes>
      <Footer/>
    </Router>
  );
}

export default App;
