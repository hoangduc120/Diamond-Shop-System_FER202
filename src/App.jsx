import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./components/login/Login";
import Register from "./components/login/Register";
import Reset from "./components/login/Reset";
import Dashboard1 from "./components/login/Dashboard";
import Profile from "./pages/users/Profile";
import MyAccount from "./pages/users/MyAccount";
import UsersManagement from "./pages/admin/UserManagement";
import { Provider } from "react-redux";
import store from "./components/store/store";
import Navbar from "./components/layout/Navbar";
import HeroSection from "./components/layout/HeroSection";
import Dashboard2 from "./components/dashboard/Dashboard";
import Footer from "./components/layout/Footer";
import ProductDetail from "./components/product/ProductDetail";
import Cart from "./components/store/Cart";
import ProductList from "./components/product/ProductList";
// import { AuthenticatedApp } from "./components/AuthenticatedApp";
// import { UnauthenticatedApp } from "./components/UnauthenticatedApp";
// import { useAuth } from "./hooks/useAuth";
import "./App.css";

function App() {
  return (
    <div className="app">
      <Router>
        <Routes>
          <Route exact path="/login" element={<Login />} />
          <Route exact path="/usermanagement" element={<UsersManagement />} />
          <Route exact path="/profile" element={<Profile />} />
          <Route exact path="/account" element={<MyAccount />} />
          <Route exact path="/register" element={<Register />} />
          <Route exact path="/reset" element={<Reset />} />
          <Route exact path="/dashboard1" element={<Dashboard1 />} />
        </Routes>
      </Router>
      <Provider store={store}>
        <Router>
          <Navbar />
          <Routes>
            <Route path="/HeroSection" element={<HeroSection />} />
            <Route path="/dashboard/*" element={<Dashboard2 />} />
            <Route path="/diamonds" element={<ProductList />} />
            <Route
              path="/engagementRings"
              element={<div>Engagement Rings Page</div>}
            />
            <Route
              path="/weddingRings"
              element={<div>Wedding Rings Page</div>}
            />
            <Route path="/jewelry" element={<div>Jewelry Page</div>} />
            <Route path="/gemstones" element={<div>Gemstones Page</div>} />
            <Route path="/education" element={<div>Education Page</div>} />
            <Route path="/product/:id" element={<ProductDetail />} />
            <Route path="/cart" element={<Cart />} />
          </Routes>
          <Footer />
        </Router>
      </Provider>
    </div>
  );
  //
}
export default App;
