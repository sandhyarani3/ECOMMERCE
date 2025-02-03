import * as React from "react";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";
import "./Navbar.css";

const theme = createTheme({
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          fontSize: "1rem",
        },
      },
    },
  },
});

export default function Navbar({ handleLogout, isLoggedIn }) {
  const navigate = useNavigate();

  const handleLoginClick = () => {
    navigate("/login"); // Navigate to the login page
  };

  return (
    <div className="Navbar">
      <div className="Left">
        <img src="shopicon.webp" alt="Logo" />
      </div>
      <ThemeProvider theme={theme}>
        <div className="Center">
          <Button sx={{ color: "white" }}>Menu</Button>
          <Button sx={{ color: "white" }}>About</Button>
          <Button sx={{ color: "white" }}>Location</Button>
          <Button sx={{ color: "white" }}>Contact</Button>
        </div>
      </ThemeProvider>
      <div className="Right">
        {!isLoggedIn ? (
          <Button
            sx={{
              color: "white",
              backgroundColor: "red",
              "&:hover": { backgroundColor: "#e60000" },
            }}
            onClick={handleLoginClick}
          >
            Login
          </Button>
        ) : (
          <Button
            sx={{
              color: "white",
              backgroundColor: "red",
              "&:hover": { backgroundColor: "#e60000" },
            }}
            onClick={handleLogout}
          >
            Logout
          </Button>
        )}
      </div>
    </div>
  );
}
