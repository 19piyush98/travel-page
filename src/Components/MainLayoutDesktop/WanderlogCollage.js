import React from "react";
import { Box, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";

const CollageWrapper = styled(Box)(({ theme }) => ({
  display: "grid",
  gridTemplateColumns: "repeat(3, 1fr)",
  gap: theme.spacing(2),
  marginTop: theme.spacing(8),
  maxWidth: "80%",
  padding: 0,
  margin: "0 auto",
  [theme.breakpoints.down("md")]: {
    gridTemplateColumns: "repeat(2, 1fr)",
  },
  [theme.breakpoints.down("sm")]: {
    gridTemplateColumns: "1fr",
  },
}));

const CollageImage = styled("img")({
  width: "100%",
  height: "100%",
  borderRadius: "8px",
  objectFit: "cover",
  aspectRatio: "1 / 1",
});

const CityName = styled(Typography)({
  position: "absolute",
  bottom: "24px",
  left: "12px",
  color: "white",
  fontWeight: "bold",
  fontSize: "1.1rem",
  textShadow: "1px 1px 2px rgba(0, 0, 0, 0.6)",
  zIndex: 1,
});

const CitySubtext = styled(Typography)({
  position: "absolute",
  bottom: "8px",
  left: "12px",
  color: "white",
  fontSize: "0.8rem",
  textShadow: "1px 1px 2px rgba(0, 0, 0, 0.6)",
  zIndex: 1,
});

const ImageContainer = styled(Box)({
  position: "relative",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  overflow: "hidden",
  borderRadius: "8px",
  "&:hover": {
    "& img": {
      transform: "scale(1.05)",
      transition: "transform 0.3s ease",
    },
  },
  aspectRatio: "1 / 1",
});

const WanderlogCollage = () => {
  const images = [
    {
      src: "https://img.freepik.com/free-photo/vertical-shot-beautiful-eiffel-tower-captured-paris-france_181624-45445.jpg?t=st=1745788442~exp=1745792042~hmac=9737a3e87bbd1fee363b58d0e18d0b4761acd882ede1b6fea61515bb12360a27&w=900",
      alt: "Paris",
      city: "Paris",
      subtext: "Eiffel Tower, Louvre Museum, Notre-Dame Cathedral",
    },
    {
      src: "https://img.freepik.com/free-photo/aerial-view-tokyo-cityscape-with-fuji-mountain-japan_335224-148.jpg?t=st=1745788475~exp=1745792075~hmac=a627d3f859be19e98a35b059fa1889136b7b8adf63e855b4d65d8a493fe1a482&w=2000",
      alt: "Tokyo",
      city: "Tokyo",
      subtext: "Tokyo Tower, Senso-ji Temple, Shibuya Crossing",
    },
    {
      src: "https://img.freepik.com/free-photo/beautiful-shot-famous-roman-colosseum-amphitheater-breathtaking-sky-sunrise_181624-6998.jpg?t=st=1745788495~exp=1745792095~hmac=d3180060578c399a087ee703cc1cdc048471304bfcc8329a9751740d67bb9ddc&w=1800",
      alt: "Rome",
      city: "Rome",
      subtext: "Colosseum, Vatican City, Pantheon",
    },
    {
      src: "https://img.freepik.com/free-photo/buddha-statue-with-natural-water-landscape_23-2150774087.jpg?t=st=1745788572~exp=1745792172~hmac=c8d08d73d5baee684150e82786869431687ee0011f84ca78b410a64e70fd62a9&w=1800",
      alt: "Bangkok",
      city: "Bangkok",
      subtext: "Grand Palace, Wat Arun, Chatuchak Weekend Market",
    },
    {
      src: "https://img.freepik.com/free-photo/manhattan-skyline_649448-1559.jpg?t=st=1745788391~exp=1745791991~hmac=4aa7ee90e4072be5cc4117fa0115f72f846e30d2dbd9ddb3c7adb61cf9060530&w=1800",
      alt: "New York",
      city: "New York",
      subtext: "Statue of Liberty, Central Park, Times Square",
    },
    {
      src: "https://img.freepik.com/free-photo/big-ben_53876-16158.jpg?t=st=1745788595~exp=1745792195~hmac=073b7357abf3fe4e1bc995b042dbb6eb51c3dcf0427110b5230d4428b442ff51&w=826",
      alt: "London",
      city: "London",
      subtext: "Tower of London, British Museum, Buckingham Palace",
    },
    {
      src: "https://img.freepik.com/free-photo/futuristic-landscape-dubai_23-2151339782.jpg?t=st=1745788617~exp=1745792217~hmac=18f9925c93f5954bc5e6fa66e832fd26641c431a670f33d9c7e8a3d95c4abf31&w=740",
      alt: "Dubai",
      city: "Dubai",
      subtext: "Burj Khalifa, Dubai Mall, Palm Jumeirah",
    },
  ];

  return (
    <Box
      sx={{
        width: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        mx: "auto",
      }}
    >
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
        Explore hundreds of places to visit
      </Typography>
      <Typography
        variant="body1"
        sx={{
          color: "text.secondary",
          textAlign: "center",
          mb: 8,
          fontSize: { xs: "1rem", md: "1.1rem" },
        }}
      >
        for every corner of the world
      </Typography>
      <CollageWrapper>
        {images.map((image, index) => (
          <ImageContainer key={index}>
            <CollageImage src={image.src} alt={image.alt} />
            <CityName variant="body1">{image.city}</CityName>
            <CitySubtext variant="body2">{image.subtext}</CitySubtext>
          </ImageContainer>
        ))}
      </CollageWrapper>
    </Box>
  );
};

export default WanderlogCollage;
