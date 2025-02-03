import React, { useState, useEffect } from "react";
import { useLocation, useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import { Button } from "@mui/material";

function ProductDetail() {
  const { id } = useParams(); // Extract product ID from URL
  const location = useLocation();
  const navigate = useNavigate();
  const [product, setProduct] = useState(location.state?.product || null);
  const [cartMessage, setCartMessage] = useState("");

  useEffect(() => {
    if (!product) {
      // Fetch product details if not available in state
      axios
        .get(`http://localhost:5000/api/product/${id}`)
        .then((response) => {
          setProduct(response.data);
        })
        .catch((error) => {
          console.error("Error fetching product details:", error);
        });
    }
  }, [id, product]);

  if (!product) {
    return <p>Loading product details...</p>;
  }

  const handleAddToCart = () => {
    setCartMessage(`Successfully added ${product.title} to cart!`);
    setTimeout(() => setCartMessage(""), 3000);
  };

  const handleBackToShop = () => {
    navigate("/shop");
  };

  return (
    <div style={{ padding: "20px", backgroundColor: "#f4f7fc", width: "100vw", minHeight: "100vh" }}>
      <h1>{product.title}</h1>
      <img
        src={product.image}
        alt={product.title}
        style={{ width: "300px", height: "300px", objectFit: "contain" }}
      />
      <p>{product.description}</p>
      <p>Price: ${product.price}</p>
      <p>Category: {product.category}</p>
      <p>Rating: {product.rating?.rate} ({product.rating?.count} reviews)</p>

      {cartMessage && (
        <div
          style={{
            backgroundColor: "#4caf50",
            color: "#fff",
            padding: "15px",
            borderRadius: "8px",
            marginTop: "20px",
            textAlign: "center",
            fontSize: "1.2rem",
            fontWeight: "bold",
            animation: "fadeIn 1s",
          }}
        >
          {cartMessage}
        </div>
      )}

      <Button
        variant="contained"
        color="primary"
        onClick={handleAddToCart}
        style={{
          backgroundColor: "#ff5722",
          color: "#fff",
          padding: "10px 20px",
          borderRadius: "30px",
          marginTop: "20px",
        }}
      >
        Add to Cart
      </Button>

      <Button
        variant="contained"
        color="secondary"
        onClick={handleBackToShop}
        style={{
          backgroundColor: "#00796b",
          color: "#fff",
          padding: "10px 20px",
          borderRadius: "30px",
          marginTop: "20px",
          marginLeft: "10px",
        }}
      >
        Back to Shop
      </Button>
    </div>
  );
}

export default ProductDetail;
