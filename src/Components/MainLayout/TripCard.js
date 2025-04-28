import React from "react";
import { Card, CardMedia, CardContent, Typography, Box, Divider } from "@mui/material";
import tokyoImage from "../assets/tokyo.jpeg";
import { AccessTime, People, Map } from "@mui/icons-material";

function TripCard() {
  return (
    <Card
      sx={{
        borderRadius: 4,
        maxWidth: 600,
        margin: "0 auto",
        boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.15)",
      }}
    >
      <Box sx={{ position: "relative", borderRadius: 2
      , overflow: "hidden" }}>
        <CardMedia
          component="img"
          sx={{
            width: "100%",
            aspectRatio: "16/9",
            objectFit: "cover",
          }}
          image={tokyoImage}
          alt="Tokyo"
        />
        <CardContent
          sx={{
            position: "absolute",
            bottom: 0,
            left: 0,
            right: 0,
            background: "linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.6))",
            color: "#fff",
            padding: "16px 24px",
            display: "flex",
            flexDirection: "column",
            justifyContent: "flex-start",
            alignItems: "flex-start",
          }}
        >
          <Typography
            variant="h4"
            component="div"
            sx={{
              fontWeight: 700,
              fontSize: "26px",
              lineHeight: "32px",
              letterSpacing: "0.5px",
            }}
          >
            TOKYO
          </Typography>
          <Typography
            variant="body2"
            sx={{
              fontSize: "14px",
              lineHeight: "20px",
              color: "#ffffff",
            }}
          >
            27.01.2025 - 02.02.2025
          </Typography>

          
          <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                flexDirection: "column",
              }}
            >
              {" "}
              <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                <AccessTime sx={{ color: "#D1F462" }} />
                <Typography
                  variant="caption"
                  sx={{ fontSize: "12px", color: "#fff" }}
                >
                  8 Days
                </Typography>
              </Box>
              <Typography
                variant="overline"
                sx={{ fontSize: "10px", color: "#fff" }}
              >
                Duration
              </Typography>
            </Box>

            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                flexDirection: "column",
              }}
            >
              <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                <People sx={{ color: "#D1F462" }} />
                <Typography
                  variant="caption"
                  sx={{ fontSize: "12px", color: "#fff" }}
                >
                  4 (2M, 2F)
                </Typography>
              </Box>
              <Typography
                variant="overline"
                sx={{ fontSize: "10px", color: "#fff" }}
              >
                Group Size
              </Typography>
            </Box>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                gap: 0,
                flexDirection: "column",
              }}
            >
              <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                <Map sx={{ width: 16, height: 16, color: "#D1F462" }} />
                <Typography
                  variant="caption"
                  sx={{ fontSize: "12px", color: "#fff" }}
                >
                  14 Activities
                </Typography>
              </Box>
              <Typography
                variant="overline"
                sx={{ fontSize: "10px", color: "#fff" }}
              >
                Activities
              </Typography>
            </Box>
          </Box>
        </CardContent>
      </Box>
    </Card>
  );
}

export default TripCard;
