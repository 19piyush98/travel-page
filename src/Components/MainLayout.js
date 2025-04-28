import React, { useState, useEffect } from "react";
import Header from "./MainLayout/Header";

import { Box, Button } from "@mui/material";
import UpcomingTrip from "./MainLayout/UpcomingTrip";
import FlightDetails from "./MainLayout/FlightDetails";
import Accommodation from "./MainLayout/Accommodation";
import Activities from "./MainLayout/Activities";
import ThirdPane from "./MainLayout/ThirdPane";
import HeaderDesktop from "./MainLayoutDesktop/HeaderDesktop";
import HeroSection from "./MainLayoutDesktop/HeroSection";
import TestimonialsSection from "./MainLayoutDesktop/Testimonials";
import PlanningPage from "./MainLayoutDesktop/PlanningPage";
import WanderlogCollage from "./MainLayoutDesktop/WanderlogCollage";
import Footer from "./MainLayoutDesktop/Footer";

function MainLayout() {
  const [isThirdPaneOpen, setIsThirdPaneOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    const handleScroll = () => {};

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    const checkIsMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkIsMobile();
    window.addEventListener("resize", checkIsMobile);
    return () => {
      window.removeEventListener("resize", checkIsMobile);
    };
  }, []);

  const handleOpenThirdPane = () => {
    setIsThirdPaneOpen(true);
  };

  const handleCloseThirdPane = () => {
    setIsThirdPaneOpen(false);
  };

  return (
    <>
      {isMobile && (
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            padding: 2,
          }}
        >
          {" "}
          <Header />
          <Box sx={{ flexGrow: 1, width: "100%", maxWidth: 600 }}>
            {" "}
            <UpcomingTrip />
            <FlightDetails />
            <Accommodation />
            <Activities />
            <Button onClick={handleOpenThirdPane} sx={{ mt: 2 }}>
              Open Details
            </Button>
          </Box>
          {isThirdPaneOpen && <ThirdPane onClose={handleCloseThirdPane} />}
        </Box>
      )}
      {!isMobile && (
        <>
          <HeaderDesktop />
          <Box
            sx={{
              py: 8,
              px: { xs: 2, md: 8 },
              maxWidth: 1200,
              mx: "auto",
              textAlign: "center",
              position: "relative",
            }}
          >
            <HeroSection />
            <TestimonialsSection />
            <PlanningPage />
            <WanderlogCollage />
          </Box>
          <Footer />
        </>
      )}
    </>
  );
}

export default MainLayout;
