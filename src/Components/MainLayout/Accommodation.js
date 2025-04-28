import React from "react";
import { Box, Typography, Button } from "@mui/material";
import AccommodationCard from "./AccomodationCard";
import { useNavigate } from 'react-router-dom';

function Accommodation() {
  const navigate = useNavigate();
  const handleClick = ()=> {
    navigate('/onboarding');
  }
  return (
    <Box sx={{ p: 2 }}>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          mb: 1,
        }}
      >
        <Typography variant="subtitle1" sx={{ fontWeight: 500 }}>
          Accomodation
        </Typography>
        <Button size="small" color="primary" onClick={handleClick}>
          See all
        </Button>
      </Box>
      <Box sx={{ display: "flex", gap: 2, overflowX: "auto" }}>
        <AccommodationCard
          image={
            "https://img.freepik.com/free-photo/hotel-lobby_23-2149397559.jpg?t=st=1745734724~exp=1745738324~hmac=7fa482e2a6dcd281332362b86421e56dd363901a0af9514394f35ebb8695432d&w=826"
          }
          hotelName="Shinagawa Prince Hotel"
          checkIn="28.01.2025, 1:15 pm"
          checkOut="29.01.2025, 11:15 am"
          nights="2 Nights"
        />
        <AccommodationCard
          hotelName="Mercure Tokyo Hotel"
          checkIn="28.01.2025, 6:00 pm"
          checkOut="30.01.2025, 10:00 am"
          nights="2 Nights"
          image={
            "https://img.freepik.com/free-photo/colonial-style-house-night-scene_1150-17925.jpg?t=st=1745734764~exp=1745738364~hmac=a440f236b21aa8df340c9b5dfd4ff657130e8103cb94436d1be168921f06fa14&w=2000"
          }
        />
        <AccommodationCard
          hotelName="Tokyo Sky Tree"
          checkIn="28.01.2025, 6:00 pm"
          checkOut="30.01.2025, 10:00 am"
          nights="3 Nights"
          image={
            "https://img.freepik.com/free-photo/vertical-shot-white-building-clear-sky_181624-4575.jpg?t=st=1745734841~exp=1745738441~hmac=018926f9bb5875cea9a5caa4363591f173ccfb41b40c99df7dff35f5e08d76e3&w=826"
          }
        />
        <AccommodationCard
          hotelName="Kimono Wearing"
          checkIn="28.01.2025, 6:00 pm"
          checkOut="01.02.2025, 9:00 am"
          nights="3 Nights"
          image={
            "https://images.unsplash.com/photo-1563911302283-d2bc129e7570?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjR8fGhvdGVsfGVufDB8fDB8fHww"
          }
        />
      </Box>
    </Box>
  );
}

export default Accommodation;
