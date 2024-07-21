import React from "react";
import "./App.css";
import Dashboard from "./container/Dashboard";
import Navbar from "./shared/Navbar";
import { Box } from "@mui/material";
import Footer from "./shared/Footer";

function App() {
  return (
    <div className="App">
      <Box sx={{ marginTop: "100px", marginLeft: "60px", marginRight: "60px" }}>
        <Navbar />
        <Dashboard />
      </Box>
      <Footer />
    </div>
  );
}

export default App;
