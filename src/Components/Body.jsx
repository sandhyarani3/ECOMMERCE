import { useState } from "react";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import "./Body.css";

function Body({ isLoggedIn }) {
  const navigate = useNavigate();
  const [showDashboard, setShowDashboard] = useState(false);

  const handleShoppingClick = () => {
    if (isLoggedIn) {
      navigate("/shop");
    } else {
      alert("Please log in to shop!");
    }
  };

  const handleCategoryClick = () => {
    setShowDashboard((prev) => !prev);
  };

  const handleCategoryNavigation = (category) => {
    navigate(`/category/${category}`); // Navigate to category page with category name
  };

  return (
    <div className="Body">
      <div className="left">
        <span>DISCOVER THE</span>
        <br />
        <span>BEST IN FASHION-</span>
        <br />
        <span>JUST FOR YOU!</span>
        <br />
        <p>
          Discover a world of fashion tailored to your style and needs. From the latest trends to timeless classics, our curated collection offers something for everyone. We believe fashion should be fun, accessible, and empowering. Explore our selection and find pieces that fit your lifestyle perfectly!
        </p>
        <div className="bottom">
          <Button
            variant="contained"
            sx={{
              color: "white",
              backgroundColor: "red",
              "&:hover": { backgroundColor: "#e60000" },
            }}
            onClick={handleShoppingClick}
          >
            SHOP NOW
          </Button>
          &nbsp;&nbsp;&nbsp;&nbsp;
          <Button
            variant="contained"
            sx={{
              color: "white",
              backgroundColor: "blue",
              "&:hover": { backgroundColor: "#0047b3" },
            }}
            onClick={handleCategoryClick}
          >
            CATEGORY
          </Button>
        </div>
        <p>also available on</p>
        <div className="logos">
          <a href="https://www.amazon.com" target="_blank" rel="noopener noreferrer">
            <img src="https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg" alt="Amazon" width="100" height="30" />
          </a>
          &nbsp;&nbsp;
          <a href="https://www.meesho.com" target="_blank" rel="noopener noreferrer">
            <img src="https://upload.wikimedia.org/wikipedia/commons/4/4d/Meesho_Logo.png" alt="Meesho" width="100" height="30" />
          </a>
        </div>
      </div>
      <div className="right">
        <img src="shopping1.avif" width="70%" height="60%" alt="Shopping" />
      </div>

      {showDashboard && (
        <div className="dashboard">
          <h2>Categories</h2>
          <ul>
            <li onClick={() => handleCategoryNavigation("men's clothing")}>Men's</li>
            <li onClick={() => handleCategoryNavigation("women's clothing")}>Women's</li>
            <li onClick={() => handleCategoryNavigation("jewelery")}>Jewelry</li>
            <li onClick={() => handleCategoryNavigation("electronics")}>Electronics</li>
          </ul>
        </div>
      )}
    </div>
  );
}

export default Body;
