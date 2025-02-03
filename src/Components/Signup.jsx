import React, { useState } from "react";
import axios from "axios";
import { TextField, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

function Signup() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [mobile, setMobile] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Collect form data
    const data = { email, password,mobile };

    try {
      // Send POST request to the signup API
      const response = await axios.post("http://localhost:5000/api/signup", data);
      console.log(response); // Log response to check success

      if (response.status === 201) {
        console.log("User registered successfully!");
        navigate("/login"); // Redirect to login page after successful signup
      }
    } catch (error) {
      console.error("Error during signup:", error);
      // Display detailed error from backend
      setError(error.response?.data?.message || "An error occurred during signup");
    }
  };

  return (
    <div style={{ padding: "20px", textAlign: "center" }}>
      <h1>Sign Up</h1>
      <form onSubmit={handleSubmit} style={{ maxWidth: "400px", margin: "0 auto" }}>
        <TextField
          label="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          fullWidth
          required
          style={{ marginBottom: "10px" }}
        />
        <TextField
          label="Password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          fullWidth
          required
          style={{ marginBottom: "10px" }}
        />
        <TextField
          label="Mobile Number"
          value={mobile}
          onChange={(e) => setMobile(e.target.value)}
          fullWidth
          required
          style={{ marginBottom: "10px" }}
        />
        {error && <p style={{ color: "red" }}>{error}</p>}
        <Button type="submit" variant="contained" color="primary" fullWidth>
          Sign Up
        </Button>
      </form>
      <p>
        Already have an account?{" "}
        <Button onClick={() => navigate("/login")} color="secondary">
          Log In
        </Button>
      </p>
    </div>
  );
}

export default Signup;
