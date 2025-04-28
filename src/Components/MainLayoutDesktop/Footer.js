import React from "react";
import { Box, Typography, Link, Button, Grid, Divider } from "@mui/material";
import { styled } from "@mui/material/styles";
import AppleIcon from "@mui/icons-material/Apple";
import ShopIcon from "@mui/icons-material/Shop";

const FooterWrapper = styled(Box)(({ theme }) => ({
  backgroundColor: "#f5f5f5",
  padding: theme.spacing(4, 0),
  marginTop: "8rem",
  [theme.breakpoints.down("md")]: {
    padding: theme.spacing(3, 0),
  },
  [theme.breakpoints.down("sm")]: {
    padding: theme.spacing(2, 0),
  },
}));

const FooterContent = styled(Grid)(({ theme }) => ({
  maxWidth: "1200px",
  margin: "0 auto",
  padding: theme.spacing(0, 4),
  [theme.breakpoints.down("md")]: {
    flexDirection: "column",
    alignItems: "flex-start",
    gap: theme.spacing(4),
  },
  [theme.breakpoints.down("sm")]: {
    padding: theme.spacing(0, 2),
  },
}));

const FooterSection = styled(Grid)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  alignItems: "flex-start",
  gap: theme.spacing(1),
}));

const FooterTitle = styled(Typography)(({ theme }) => ({
  fontWeight: "bold",
  color: "#666666",
  fontSize: "0.9rem",
  marginBottom: theme.spacing(1),
}));

const FooterLink = styled(Link)(({ theme }) => ({
  color: "#999999",
  textDecoration: "none",
  fontSize: "0.8rem",
  "&:hover": {
    color: theme.palette.primary.main,
  },
}));

const CopyrightText = styled(Typography)(({ theme }) => ({
  color: "#999999",
  fontSize: "0.7rem",
  textAlign: "center",
  marginTop: theme.spacing(4),
}));

const AppButtonsContainer = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  gap: theme.spacing(1),
  width: "100%",
}));

const AppButton = styled(Button)(({ theme }) => ({
  textTransform: "none",
  justifyContent: "flex-start",
  padding: theme.spacing(1, 2),
  fontSize: "0.8rem",
  width: "100%",
}));

const AppStoreButton = styled(AppButton)(({ theme }) => ({
  backgroundColor: "#000",
  color: "#fff",
  "&:hover": {
    backgroundColor: "#333",
  },
}));

const GooglePlayButton = styled(AppButton)(({ theme }) => ({
  backgroundColor: "#fff",
  color: "#000",
  border: "1px solid #ddd",
  "&:hover": {
    backgroundColor: "#f5f5f5",
  },
}));


const WanderlogFooter = () => {
  return (
    <FooterWrapper>
      <FooterContent container spacing={4}>
        <Grid item xs={12} sm={6} md={3}>
          <Typography
            variant="body2"
            style={{
              color: "#999999",
              fontSize: "0.8rem",
              marginBottom: "1.5rem",
            }}
          >
            Made with <span style={{ color: "#FF4700" }}>❤️</span> from Priyanshu Singh{" "}
            <span style={{ fontSize: "0.7rem" }}>© 2025.</span>
          </Typography>

          <FooterSection>
            <FooterTitle>Wandering</FooterTitle>
            <FooterLink href="#">Hotels</FooterLink>
            <FooterLink href="#">Blog</FooterLink>
            <FooterLink href="#">Report security issue</FooterLink>
          </FooterSection>
        </Grid>

        <Grid item xs={12} sm={6} md={3}>
          <FooterSection>
            <FooterTitle>Guide and resources</FooterTitle>
            <FooterLink href="#">Trip planners by destination</FooterLink>
            <FooterLink href="#">Explore cities and countries</FooterLink>
            <FooterLink href="#">Road trips by destination</FooterLink>
            <FooterLink href="#">Best places to visit by category</FooterLink>
            <FooterLink href="#">
              Popular search terms by destination
            </FooterLink>
            <FooterLink href="#">Weather around the world</FooterLink>
            <FooterLink href="#">Travel questions & answers</FooterLink>
            <FooterLink href="#">Travel itinerary guides</FooterLink>
            <FooterLink href="#">Maps of cities and national parks</FooterLink>
            <FooterLink href="#">
              Destinations at different times of the year
            </FooterLink>
            <FooterLink href="#">Places to visit by destination</FooterLink>
          </FooterSection>
        </Grid>

        <Grid item xs={12} sm={6} md={3}>
          <FooterSection>
            <FooterLink href="#">Terms, Privacy policy & Copyright</FooterLink>
            <FooterLink href="#">Mobile app</FooterLink>
            <FooterLink href="#">Browser extension</FooterLink>
            <FooterLink href="#">Travel budgeting & cost tracking</FooterLink>
            <FooterLink href="#">Jobs</FooterLink>
            <FooterLink href="#">Contact us</FooterLink>
            <FooterLink href="#">Google data disclosure</FooterLink>
            <FooterLink href="#">
              How to embed a map on your travel blog
            </FooterLink>
          </FooterSection>
        </Grid>

        <Grid item xs={12} sm={6} md={3}>
          <FooterSection>
            <FooterTitle>Get the app</FooterTitle>
            <AppButtonsContainer>
              <AppStoreButton startIcon={<AppleIcon />}>
                <small>Download on the  </small> &nbsp;AppStore
              </AppStoreButton>
              <GooglePlayButton startIcon={<ShopIcon />}>
              <small>Download on the  </small>&nbsp;Google Play
              </GooglePlayButton>
            </AppButtonsContainer>
          </FooterSection>
        </Grid>
      </FooterContent>

      <CopyrightText>
        © 2025 Priyanshu Inc. All rights reserved.
      </CopyrightText>
    </FooterWrapper>
  );
};

export default WanderlogFooter;
