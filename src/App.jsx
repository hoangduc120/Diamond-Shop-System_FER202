import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./pages/users/store/store.jsx";
import Navbar from "./components/layout/Navbar";
import Dashboard from "./pages/admin/dashboard/Dashboard.jsx";
import Footer from "./components/layout/Footer";
import ProductDetail from "./pages/users/product/ProductDetail.jsx";
import Cart from "./pages/users/store/Cart";
import ProductList from "./pages/users/product/ProductList";
import Measure from "./pages/users/homepage/Measure.jsx";
import Promotion from "./pages/users/homepage/Promotion.jsx";
import AboutUs from "./pages/users/aboutUs/AboutUs.jsx";
import Contact from "./pages/users/Contact/Contact.jsx";
import Checkout from "./components/Payment/checkout/Checkout.jsx";
import HomePage from "./pages/users/homepage/HomePage.jsx";
import FAQ from "./pages/users/homepage/FAQ/FAQ.jsx";
import Knowledge from "./pages/users/homepage/Knowledge.jsx";
import { Box } from "@mui/material";

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Navbar />
        <Box component="div" sx={{ mt: 10, mb: 2, flexGrow: 1 }}>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/dashboard/*" element={<Dashboard />} />
            <Route path="/diamonds" element={<ProductList />} />
            <Route path="/jewelrymeasurementguide" element={<Measure />} />
            <Route path="/saleoff" element={<Promotion />} />
            <Route path="/faqs" element={<FAQ />} />
            <Route path="/aboutus" element={<AboutUs />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/product/:id" element={<ProductDetail />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/checkout" element={<Checkout />} />
            <Route path="/knowledge" element={<Knowledge />} />
          </Routes>
        </Box>
        <Footer />
      </Router>
    </Provider>
  );
}

export default App;
