import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Body from "./Components/Body";
import ShopPage from "./Components/ShopPage";
import Login from "./Components/Login";
import ProductDetail from "./Components/ProductDetail";
import Signup from './Components/Signup';
import CategoryPage from "./Components/CategoryPage";
function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = () => setIsLoggedIn(true); // User logs in
  const handleLogout = () => setIsLoggedIn(false); // User logs out

  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Navbar
                handleLogin={handleLogin}
                handleLogout={handleLogout}
                isLoggedIn={isLoggedIn}
              />
              <Body isLoggedIn={isLoggedIn} />
            </>
          }
        />
        <Route
          path="/shop"
          element={
            isLoggedIn ? (
              <ShopPage />
            ) : (
              <p style={{ textAlign: "center" }}>Please log in to shop.</p>
            )
          }
        />
        <Route path="/login" element={<Login handleLogin={handleLogin} />} />
        <Route path="/product-detail" element={<ProductDetail />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/category/:category" element={<CategoryPage />} />
      </Routes>
    </Router>
  );
}

export default App;
