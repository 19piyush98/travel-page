import React from "react";
import { Button } from "@mui/material";
import { Card, CardContent } from "@mui/material";
import {
  Flight,
  FlightTakeoff,
  Email,
  LocationOn,
  LocalOffer,
  AttachFile,
  ArrowRight,
} from "@mui/icons-material";
import { Typography } from "@mui/material";
import { Box } from "@mui/material";
import { styled } from "@mui/material/styles";

const StyledButton = styled(Button)(({ theme }) => ({
  fontWeight: 600,
  padding: theme.spacing(1.5, 4),
  borderRadius: "2rem",
  boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
  transition: "all 0.2s ease-in-out",
  "&:hover": {
    transform: "translateY(-2px)",
    boxShadow: "0px 6px 15px rgba(0, 0, 0, 0.1)",
  },
}));

const PlanningPage = () => {
  return (
    <Box
      sx={{
        py: 8,
        px: { xs: 2, md: 8 },
        maxWidth: '80%',
        mx: 'auto',
        textAlign: 'center',
        position: 'relative',
        mb:4
      }}
    >
      <Box
        sx={{
          maxWidth: "xl",
          width: "100%",
          spaceY: 8,
        }}
      >
        <Box sx={{ textAlign: "center" }}>
          <Typography
            variant="h4"
            sx={{
              fontWeight: 400,
              color: "text.primary",
              textAlign: "center",
              mb: 2,
              textAlign: "center",
              position: "relative",
              fontSize: { xs: "2rem", md: "2.5rem" },
            }}
          >
            Maximize your trip planning with Pro
          </Typography>
          <Typography
            variant="body1"
            sx={{
              mt: 4,
              fontSize: "1.2rem",
              color: "text.secondary",
            }}
          >
            Experience the full potential of Wanderlog with a Pro subscription.
            Enjoy enhanced features and streamlined planning.
          </Typography>
        </Box>

        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: {
              xs: "1fr",
              sm: "1fr 1fr",
              lg: "1fr 1fr 1fr",
            },
            gap: 6,
          }}
        >
          {[
            {
              title: "Live flight updates",
              description:
                "Get notified and monitor your flight status to ensure a smooth travel experience.",
              icon: (
                <Flight sx={{ width: 40, height: 40, color: "primary.main" }} />
              ),
            },
            {
              title: "Offline access",
              description:
                "No wifi, no problem. Your trip plans are locally downloaded for access anywhere.",
              icon: (
                <FlightTakeoff
                  sx={{ width: 40, height: 40, color: "primary.main" }}
                />
              ),
            },
            {
              title: "Automatic Gmail scanning",
              description:
                "Get your travel reservations automatically synced into your trip plan.",
              icon: (
                <Email sx={{ width: 40, height: 40, color: "primary.main" }} />
              ),
            },
            {
              title: "Optimize your route",
              description:
                "Perfect for road trips and saving $$$ on gas! Get the best route auto-rearranged.",
              icon: (
                <LocationOn
                  sx={{ width: 40, height: 40, color: "primary.main" }}
                />
              ),
            },
            {
              title: "Flight deals",
              description:
                "Cheap flight deals sent straight to your inbox so you can plan your next best trip.",
              icon: (
                <LocalOffer
                  sx={{ width: 40, height: 40, color: "primary.main" }}
                />
              ),
            },
            {
              title: "Unlimited attachments",
              description:
                "Never dig through your emails again - access all your trip files in one place.",
              icon: (
                <AttachFile
                  sx={{ width: 40, height: 40, color: "primary.main" }}
                />
              ),
            },
          ].map((feature, index) => (
            <div key={index}>
              <Card
                sx={{
                  bgcolor: "F75940",
                  boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.08)",
                  "&:hover": {
                    boxShadow: "0px 6px 18px rgba(0, 0, 0, 0.12)",
                    transform: "translateY(-2px)",
                    transition: "all 0.3s ease",
                  },
                }}
              >
                <CardContent
                  sx={{
                    p: 4,
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "flex-start",
                    gap: 1,
                  }}
                >
                  {feature.icon}
                  <Typography
                    variant="h6"
                    sx={{
                      fontWeight: "semibold",
                      color: "text.secondary",
                    }}
                  >
                    {feature.title}
                  </Typography>
                  <Typography
                    variant="body2"
                    sx={{
                      color: "text.secondary",
                    }}
                  >
                    {feature.description}
                  </Typography>
                </CardContent>
              </Card>
            </div>
          ))}
        </Box>

        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", sm: "row" },
            justifyContent: "center",
            gap: 4,
            mt: 4,
          }}
        >
          <StyledButton
            variant="contained"
            color="warning"
            sx={{
              backgroundColor: "#F75940",
              "&:hover": { backgroundColor: "#e64a33" },
            }}
            size="large"
          >
            Start planning
          </StyledButton>
          <Button
            variant="text"
            size="large"
            sx={{
              color: "text.secondary",
            }}
          >
            Get the app
            <ArrowRight sx={{ ml: 1, width: 20, height: 20 }} />
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default PlanningPage;
