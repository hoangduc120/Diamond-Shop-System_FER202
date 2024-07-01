import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './components/store/store';
import Navbar from './components/layout/Navbar';
import HeroSection from './components/layout/HeroSection';
import Dashboard from './components/dashboard/Dashboard';
import Footer from './components/layout/Footer';
import ProductDetail from './components/product/ProductDetail';
import Cart from './components/store/Cart'; 
import ProductList from './components/product/ProductList';

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<HeroSection />} />
          <Route path="/dashboard/*" element={<Dashboard />} />
          <Route path="/diamonds" element={<ProductList />} />
          <Route path="/engagementRings" element={<div>Engagement Rings Page</div>} />
          <Route path="/weddingRings" element={<div>Wedding Rings Page</div>} />
          <Route path="/jewelry" element={<div>Jewelry Page</div>} />
          <Route path="/gemstones" element={<div>Gemstones Page</div>} />
          <Route path="/education" element={<div>Education Page</div>} />
          <Route path="/product/:id" element={<ProductDetail />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
        <Footer />
      </Router>
    </Provider>
  );
}

export default App;
