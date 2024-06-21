import React from "react";
import {
  Box,
  Typography,
  Paper,
  Select,
  FormControl,
  MenuItem,
} from "@mui/material";
import PersonRoundedIcon from "@mui/icons-material/PersonRounded";
import NorthRoundedIcon from "@mui/icons-material/NorthRounded";
import SouthRoundedIcon from "@mui/icons-material/SouthRounded";

const Header = ({ usernames, selectedUser, handleUserChange }) => {
  return (
    <>
      <Box sx={{ display: "flex" }}>
        <Paper
          sx={{
            width: "230px",
            height: "48px",
            padding: "20px",
            borderRadius: "15px",
            textAlign: "center",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            marginRight: "25px",
          }}
        >
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
            }}
          >
            <PersonRoundedIcon sx={{ marginBottom: "3px", color: "#a6b1df" }} />
            <Typography
              sx={{ fontSize: "14px", fontWeight: "600", marginLeft: "10px" }}
            >
              Select User
            </Typography>
          </Box>

          <FormControl variant="outlined" style={{ minWidth: 150 }}>
            <Select
              value={selectedUser}
              onChange={(e) => handleUserChange(e.target.value)}
              displayEmpty
              sx={{
                height: 20,
                marginLeft: "5px",
                fontSize: "14px",
                fontWeight: "500",
              }}
            >
              {usernames.map((username) => (
                <MenuItem
                  key={username}
                  value={username}
                  sx={{ fontSize: "14px", fontWeight: "500" }}
                >
                  {username}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </Paper>
        <Paper
          sx={{
            width: "230px",
            height: "48px",
            padding: "20px",
            borderRadius: "15px",
            textAlign: "center",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            marginRight: "25px",
          }}
        >
          <Typography
            sx={{ fontSize: "13px", fontWeight: "600", marginLeft: "10px" }}
          >
            Lorem ipsum
          </Typography>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
            }}
          >
            <NorthRoundedIcon sx={{ marginBottom: "3px", color: "#a6b1df" }} />
            <Typography sx={{ fontSize: "18px", fontWeight: "600" }}>
              197
            </Typography>
          </Box>
          <Typography
            sx={{
              fontSize: "11px",
              fontWeight: "500",
              marginLeft: "10px",
              color: "grey",
            }}
          >
            Sed ut perspiciatis unde omnis iste
          </Typography>
        </Paper>
        <Paper
          sx={{
            width: "230px",
            height: "48px",
            padding: "20px",
            borderRadius: "15px",
            textAlign: "center",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            marginRight: "25px",
          }}
        >
          <Typography
            sx={{ fontSize: "13px", fontWeight: "600", marginLeft: "10px" }}
          >
            Dolorem ipsum
          </Typography>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
            }}
          >
            <SouthRoundedIcon sx={{ marginBottom: "3px", color: "#a6b1df" }} />
            <Typography sx={{ fontSize: "18px", fontWeight: "600" }}>
              123
            </Typography>
          </Box>
          <Typography
            sx={{
              fontSize: "11px",
              fontWeight: "500",
              marginLeft: "10px",
              color: "grey",
            }}
          >
            dolore magnam aliquam quaerat voluptatem
          </Typography>
        </Paper>
      </Box>
    </>
  );
};

export default Header;
