import React from "react";

const Footer = () => {
  return (
    <footer style={footerStyle}>
      <p style={textStyle}>© 2024 Your Company Name. All rights reserved.</p>
    </footer>
  );
};

// Styles
const footerStyle = {
  backgroundColor: "#000", // Black background
  color: "#fff", // White text
  textAlign: "center",
  padding: "10px 0",
  position: "absolute",
  bottom: "0",
  width: "100%",
};

const textStyle = {
  margin: "0",
};

export default Footer;
