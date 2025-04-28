import React from "react";
import { Box, Typography, Button } from "@mui/material";
import herosectionimage from "../assets/herosection.jpeg";

const HeroSection = () => {
  return (
    <Box
      sx={{
        py: 8,
        px: { xs: 2, md: 10 },
        maxWidth: 1200,
        mx: "auto",
        textAlign: "center",
      }}
    >
      <Typography
        variant="h3"
        component="h1"
        gutterBottom
        sx={{
          fontWeight: 400,
          letterSpacing: "-0.02em",
        }}
      >
        One app for all your travel planning needs
      </Typography>
      <Typography variant="body1" color="text.secondary" paragraph>
        Create detailed itineraries, explore user-shared guides, and manage your
        bookings seamlessly - all in one place.
      </Typography>
      <Box sx={{ display: "flex", justifyContent: "center", gap: 2, mt: 3 }}>
        <Button
          variant="contained"
          color="primary"
          sx={{
            borderRadius: 5,
            backgroundColor: "#F75940",
            "&:hover": { backgroundColor: "#E65100" },
          }}
        >
          Start planning
        </Button>
        <Button
          color="inherit"
          sx={{
            borderRadius: 5,
            fontWeight: "bold",
            "&:hover": { color: "#FF6F61" },
          }}
        >
          Get the app &rarr;
        </Button>
      </Box>

      <Box sx={{ mt: 4, display: "flex", justifyContent: "center" }}>
        <img
          src={herosectionimage}
          alt="Wanderlog App Preview"
          style={{ maxWidth: "50%", height: "auto", width: "auto" }}
        />
      </Box>

      <Box sx={{ mt: 6, textAlign: "center" }}>
        <Typography
          variant="h6"
          component="h2"
          gutterBottom
          sx={{ fontWeight: 400 }}
        >
          Your itinerary and your map in one view
        </Typography>
        <Typography variant="body2" color="text.secondary">
          No more switching between different apps, tabs, and tools to keep
          track of your
        </Typography>
        <Typography variant="body2" color="text.secondary">
          travel plans.
        </Typography>
      </Box>
    </Box>
  );
};

export default HeroSection;
