import React from "react";
import Navbar from "./components/Navbar/Navbar";
import AOS from "aos";
import "aos/dist/aos.css";
import Footer from "./components/Footer/Footer";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./components/Homepage/HomePage";

import Contact from "./components/pages/Contact";

import PageProducts from "./components/PageProducts/PageProducts";
import ProductDetail from "./components/DetailProductData/ProductDetail";
import About from "./components/pages/About";
import SearchResults from "./components/Navbar/SearchResults";
import Dashboard from "./components/Dashboard/Dashboard";



const App = () => {
  React.useEffect(() => {
    AOS.init({
      offset: 100,
      duration: 800,
      easing: "ease-in-sine",
      delay: 100,
    });
    AOS.refresh();
  }, []);

  return (
    <Router>
      <div className="bg-white dark:bg-gray-900 dark:text-white duration-200">
        <Navbar />

        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/products" element={<PageProducts />} />
          <Route path="/contact" element={<Contact />} /> 
          <Route path="/product/:id" element={<ProductDetail />} />
          <Route path="/about" element={<About />} />

          <Route path="/search-results" element={<SearchResults />} />
          <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
