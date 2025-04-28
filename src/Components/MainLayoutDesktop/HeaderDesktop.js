import React from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  InputBase,
  IconButton,
  Box,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import WanderlogLogo from "@mui/icons-material/Explore";

const HeaderDesktop = () => {
  return (
    <AppBar
      position="static"
      sx={{
        backgroundColor: "white",
        color: "black",
        boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
      }}
    >
      <Toolbar
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          paddingX: { xs: 2, md: 8 },
          maxWidth: 1200,
          mx: "auto",
        }}
      >
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <IconButton
            edge="start"
            color="inherit"
            aria-label="logo"
            sx={{ mr: 1 }}
          >
            <WanderlogLogo sx={{ color: "#F75940", fontSize: "2rem" }} />
          </IconButton>
          <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 0, fontWeight: "bold", color: "#F75940" }}
          >
            wanderlog
          </Typography>
          <Box sx={{ display: { xs: "none", md: "flex" }, ml: 4 }}>
            <Typography
              color="inherit"
              sx={{ mr: 2, fontWeight: "medium", cursor: "pointer" }}
            >
              Home
            </Typography>
            <Typography
              color="inherit"
              sx={{ mr: 2, fontWeight: "medium", cursor: "pointer" }}
            >
              Destinations
            </Typography>
            <Typography
              color="inherit"
              sx={{ mr: 2, fontWeight: "medium", cursor: "pointer" }}
            >
              Trips
            </Typography>
            <Typography
              color="inherit"
              sx={{ fontWeight: "medium", cursor: "pointer" }}
            >
              More
            </Typography>
          </Box>
        </Box>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            borderRadius: 2,
            border: 1,
            paddingX: 1,
            flexGrow: 1,
            maxWidth: 400,
            ml: 4,
            mr: 2,
          }}
        >
          <SearchIcon sx={{ color: "action.active", mr: 1 }} />
          <InputBase
            placeholder="Explore destination"
            inputProps={{ "aria-label": "search" }}
            sx={{ ml: 1, flex: 1 }}
          />
        </Box>
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <Box
            sx={{
              backgroundColor: "#F75940",
              color: "white",
              padding: "8px 16px",
              borderRadius: 5,
              cursor: "pointer",
              fontWeight: "bold",
              "&:hover": {
                backgroundColor: "#E65100",
              },
              mr: 1,
            }}
          >
            Log in
          </Box>
          <Box
            sx={{
              backgroundColor: "transparent",
              color: "#F75940",
              padding: "8px 16px",
              borderRadius: 5,
              cursor: "pointer",
              fontWeight: "bold",
              border: "1px solid #FF6F61",
              "&:hover": {
                backgroundColor: "#FFE0B2",
              },
            }}
          >
            Sign up
          </Box>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default HeaderDesktop;
