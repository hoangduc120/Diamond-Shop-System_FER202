import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./pages/users/store/store.jsx";
import Navbar from "./components/layout/NavBar/Navbar.jsx";
import Dashboard from "./pages/admin/dashboard/Dashboard.jsx";
import Footer from "./components/layout/Footer/Footer.jsx";
import ProductDetail from "./pages/users/product/ProductDetail.jsx";
import Cart from "./pages/users/store/Cart";
import ProductList from "./pages/users/product/ProductList";
import Measure from "./pages/users/homepage/Measure.jsx";
import Promotion from "./pages/users/homepage/Promotion.jsx";
import FAQ from "./pages/users/homepage/FAQ/FAQ.jsx";
import AboutUs from "./pages/users/aboutUs/AboutUs.jsx";
import Contact from "./pages/users/Contact/Contact.jsx";
import Checkout from "./components/Payment/checkout/Checkout.jsx";
import HomePage from "./pages/users/homepage/HomePage.jsx";
import Login from "./pages/users/login/Login.jsx";
import Profile from "./pages/users/profile/Profile.jsx";
import MyAccount from "./pages/users/profile/MyAccount.jsx";
import { Box } from "@mui/material";
import PaymentManagement from "./pages/admin/dashboard/PaymentManagement.jsx";
import ScrollToTopButton from "./components/scrollToTopButton/scrollTopButton.jsx";
import OrderManagement from "./pages/admin/dashboard/OrderManagement.jsx";
import UserManagement from "./pages/admin/dashboard/UserManagement.jsx";
import "./App.css";
import DiamondKnowledge from "./pages/users/homepage/DiamondKnowledge.jsx";
import JewelryKnowledge from "./pages/users/homepage/JewelryKnowledge.jsx";
import Reset from "./pages/users/login/Reset.jsx"
import Register from "./pages/guest/Register.jsx"
import ScrollToTop from "./components/scrollToTop/ScrollToTop.jsx";
import SearchResults from "./pages/users/homepage/search/SearchResult.jsx";

function App() {
  return (
    <Provider store={store}>
      <Router>
        <div className="app">
          <ScrollToTop />
          <Navbar />
          <Box component="main" sx={{ mt: 5, flexGrow: 1 }}>
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/dashboard/*" element={<Dashboard />} />
              <Route path="/diamonds" element={<ProductList />} />
              <Route path="/measureguide" element={<Measure />} />
              <Route path="/saleoff" element={<Promotion />} />
              <Route path="/faqs" element={<FAQ />} />
              <Route path="/aboutus" element={<AboutUs />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/product/:id" element={<ProductDetail />} />
              <Route path="/cart" element={<Cart />} />
              <Route path="/checkout" element={<Checkout />} />
              <Route path="/login" element={<Login />} />
              <Route path="/profile" element={<Profile />} />
              <Route path="/account" element={<MyAccount />} />
              <Route path="/paymentmanagement" element={<PaymentManagement />} />
              <Route path="/ordermanagement" element={<OrderManagement />} />
              <Route path="/usermanagement" element={<UserManagement />} />
              <Route path="/diamondknowledge" element={<DiamondKnowledge />} />
              <Route path="/jewelryknowledge" element={<JewelryKnowledge />} />
              <Route path="/reset" element={<Reset />} />
              <Route path="/register" element={<Register />} />
              <Route path="/search" element={<SearchResults />} />
            </Routes>
          </Box>
          <Footer />
        </div>
      </Router>
      <ScrollToTopButton />
    </Provider>
  );
}

export default App;
