import React, { useState, useEffect } from "react";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

function ShopPage() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    // Fetch data from the Fake Store API
    fetch("https://fakestoreapi.com/products")
      .then((response) => response.json())
      .then((data) => {
        setProducts(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching products:", error);
        setLoading(false);
      });
  }, []);

  const handleBuyNow = (product) => {
    navigate("/product-detail", { state: { product } }); // Pass product data to the product detail page
  };

  if (loading) {
    return <p>Loading...</p>;
  }

  return (
    <div style={{ padding: "40px", backgroundColor: "#e3f2fd", minHeight: "100vh" }}>
      <h1 style={{ textAlign: "center", marginBottom: "40px", color: "#333" }}>Shop Now</h1>
      <div style={{ display: "flex", flexWrap: "wrap", gap: "20px", justifyContent: "center" }}>
        {products.map((product) => (
          <div
            key={product.id}
            style={{
              backgroundColor: "#ffffff",
              borderRadius: "10px",
              boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
              padding: "20px",
              width: "250px",
              textAlign: "center",
              transition: "transform 0.3s ease, box-shadow 0.3s ease",
            }}
            onMouseEnter={(e) => e.currentTarget.style.transform = "scale(1.05)"}
            onMouseLeave={(e) => e.currentTarget.style.transform = "scale(1)"}
          >
            <img
              src={product.image}
              alt={product.title}
              style={{
                width: "100%",
                height: "250px",
                objectFit: "contain",
                borderRadius: "8px",
              }}
            />
            <h3 style={{ fontSize: "1.2rem", fontWeight: "bold", color: "#333", marginTop: "10px" }}>
              {product.title}
            </h3>
            <p style={{ color: "#888", marginBottom: "10px" }}>${product.price}</p>
            <p style={{ color: "#777", fontSize: "0.9rem", marginBottom: "20px" }}>
              Category: {product.category}
            </p>
            <Button
              variant="contained"
              color="primary"
              style={{
                backgroundColor: "#ff5722",
                color: "#fff",
                padding: "10px 20px",
                borderRadius: "30px",
                fontWeight: "bold",
                textTransform: "none",
                boxShadow: "none",
                '&:hover': {
                  backgroundColor: "#e64a19",
                },
              }}
              onClick={() => handleBuyNow(product)}
            >
              Buy Now
            </Button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ShopPage;
