import React from "react";
import { Box, Typography, Button } from "@mui/material";
import AirplaneImage from "../assets/flight.svg";
import { useNavigate } from "react-router-dom";

function FlightDetails() {
  const navigate = useNavigate();
  const handleClick = () => {
    console.log("In here");
    navigate("/onboarding");
  };
  return (
    <Box sx={{ p: 2 }}>
      <Box
        sx={{
          borderRadius: 2,
          bgcolor: "#304ffe",
          color: "#fff",
          p: 2,
          display: "flex",
          flexDirection: "column",
          position: "relative",
          overflow: "hidden",
        }}
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-start",
            mb: 1,
          }}
        >
          <Typography
            variant="subtitle1"
            sx={{
              fontWeight: 700,
              color: "#F5F5F5",
              fontSize: "16px",
              fontFamily: "Mont",
              lineHeight: "24px",
            }}
          >
            Flight Details
          </Typography>
          <Button
          onClick={handleClick}
            size="small"
            sx={{ color: "#FFFF00", textDecoration: "underline" }}
          > 
            See all 
          </Button>
        </Box>
        <Typography
          variant="body2"
          sx={{
            fontWeight: 400,
            color: "#F5F5F5",
            fontSize: "14px",
            fontFamily: "Montserrat",
            mb: 1,
          }}
        >
          26.01.2025, 10:50 am
        </Typography>
        <Box sx={{ display: "flex", alignItems: "center", gap: 1, my: 1 }}>
          {" "}
          <Box sx={{ textAlign: "left" }}>
            <Typography
              variant="h6"
              sx={{ fontWeight: 700, color: "#fff", fontSize: "1.2rem" }}
            >
              {" "}
              DEL
            </Typography>
            <Typography variant="caption" sx={{ color: "#fff" }}>
              Delhi, India
            </Typography>
          </Box>
          <Typography sx={{ color: "#fff", fontSize: "1rem" }}>→</Typography>{" "}
          <Box sx={{ textAlign: "left" }}>
            {" "}
            <Typography
              variant="h6"
              sx={{ fontWeight: 700, color: "#fff", fontSize: "1.2rem" }}
            >
              {" "}
              NRT
            </Typography>
            <Typography variant="caption" sx={{ color: "#fff" }}>
              Narita, Tokyo
            </Typography>
          </Box>
        </Box>
        <Box
          component="img"
          src={AirplaneImage}
          alt="Airplane"
          sx={{
            position: "absolute",
            bottom: 20,
            right: 30,
            width: 150,
            height: "auto",
            opacity: 0.7,
            transform: "rotate(15deg)",
          }}
        />
      </Box>
    </Box>
  );
}

export default FlightDetails;
