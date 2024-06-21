import React from "react";
import { AppBar, Box, Typography, Avatar } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import "./navbar.css";

const Navbar = () => {
  return (
    <AppBar
      sx={{
        alignItems: "center",
        cursor: "context-menu",
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        // backgroundColor: "white",
        height: "70px",
        backgroundColor: "#555ac3",
        // backgroundColor: "#676cd2",
      }}
      className="appBar"
      elevation={1}
    >
      <Box sx={{ display: "flex", alignItems: "center", marginLeft: "50px" }}>
        <Typography
          sx={{
            fontSize: "16px",
            color: "white",
            marginLeft: "15px",
            fontWeight: "600",
            cursor: "pointer",
          }}
        >
          Developer Activity Dashboard
        </Typography>
      </Box>
      <Box sx={{ display: "flex", alignItems: "center" }}>
        <Typography
          sx={{
            fontSize: "16px",
            color: "white",
            marginLeft: "15px",
            fontWeight: "600",
            cursor: "pointer",
          }}
        >
          Home
        </Typography>
        <Typography
          sx={{
            fontSize: "16px",
            color: "white",
            marginLeft: "15px",
            fontWeight: "600",
            cursor: "pointer",
          }}
        >
          About
        </Typography>
        <Avatar
          alt="Profile Image"
          src="/url"
          style={{ marginLeft: "15px", width: "35px", height: "35px" }}
        />
        <MenuIcon
          sx={{
            marginLeft: "15px",
            color: "white",
            marginRight: "20px",
            cursor: "pointer",
          }}
        />
      </Box>
    </AppBar>
  );
};

export default Navbar;
