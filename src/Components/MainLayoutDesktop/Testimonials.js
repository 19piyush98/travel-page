import React from 'react';
import { Box, Typography, Paper, Avatar, Rating } from '@mui/material';

const TestimonialsSection = () => {
  const testimonials = [
    {
      name: 'Nadia',
      image: 'https://via.placeholder.com/40/AABBCC/FFFFFF?Text=N',
      title: 'Travel Blogger @Couple Tr...',
      rating: 5,
      comment: 'Planning your trip by having all the attractions already plugged into a map makes trip planning so much easier.',
    },
    {
      name: 'Sharon Brewster',
      image: 'https://via.placeholder.com/40/CCBBAA/FFFFFF?Text=S',
      rating: 3,
      comment: 'amazing app! easy to use, love the AI functionality.',
    },
    {
      name: 'Jayson Qite',
      image: 'https://via.placeholder.com/40/BBAACC/FFFFFF?Text=J',
      rating: 5,
      comment: 'It seems to be this is my new travel app buddy. Very handy, convenient and very easy to use. It also recommends tourist destinations and nearby places. Kudos to the programmer. 👏',
    },
    {
      name: 'Erica Franco',
      image: 'https://via.placeholder.com/40/AACABB/FFFFFF?Text=E',
      rating: 1,
      comment: 'Absolutely love this app! It is so helpful when planning my trips. I especially love the optimize route option. When I have all my information in place like my starting point and my ending point it is fabulous! I found it was worth it for me to buy the subscription to the app to use this feature. I especially love how it will suggest things to do if you don\'t have any plans. I do wish it had a braking option for travel between points of interest. But other than that I love the app!',
    },
    {
      name: 'Lydia Yang',
      image: 'https://via.placeholder.com/40/CABABC/FFFFFF?Text=L',
      title: 'Founder @LydiaScapes Ad...',
      rating: 3,
      comment: 'So much easier to visualize and plan a road trip to my favourite rock climbing destinations and explore the area around.',
    },
    {
      name: 'Jorge D.',
      image: 'https://via.placeholder.com/40/BCAABC/FFFFFF?Text=J',
      rating: 4,
      comment: 'It left me speechless that I can add places to my trip and they get automatically populated with a featured pic and description from the web.',
    },
    {
      name: 'Belinda and Kathy Kohles',
      image: 'https://via.placeholder.com/40/ABABCC/FFFFFF?Text=BK',
      rating: 2,
      comment: 'I have used several trip planning apps. This one by far is the best. The interaction between google maps makes the planning so much easier. Adding an adventure not in the app is also easy. Love the connection to Trip Advisor also. Everything is connected including booking a stay. Easy to use on phone, tablets and computer! Well thought through development!',
    },
    {
      name: 'A. Rosa',
      image: 'https://via.placeholder.com/40/ACABAB/FFFFFF?Text=AR',
      rating: 5,
      comment: 'I absolutely love this app!!! I would recommend to anyone who is seriously planning a trip. It will have you through the entire trip.',
    },
    {
      name: 'Abigail King',
      image: 'https://via.placeholder.com/40/ABCABC/FFFFFF?Text=AK',
      title: 'Founder @Inside the...',
      rating: 2,
      comment: '...',
    },
    {
      name: 'Camilla F.',
      image: 'https://via.placeholder.com/40/BACABC/FFFFFF?Text=CF',
      rating: 5,
      comment: '...',
    },
  ];

  return (
    <Box
      sx={{
        py: 8,
        px: { xs: 2, md: 8 },
        maxWidth: '80%',
        mx: 'auto',
        textAlign: 'center',
        position: 'relative',
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
        What travelers are raving about
      </Typography>
      <Typography variant="body1" color="text.secondary" paragraph>
        Over 1 million people have already tried Wanderlog and loved its easy trip
        planning features.
      </Typography>
      <Box
        sx={{
          columns: { xs: 1, sm: 2, md: 3, lg: 4 },
          columnGap: 2,
           background: 'linear-gradient(to top, rgba(255,255,255,0.8), rgba(255,255,255,1))',
          mt: 4,
        }}
      >
        {testimonials.map((testimonial, index) => (
          <Paper
            key={index}
            elevation={3}
            sx={{ p: 3, mb: 2, textAlign: 'left', borderRadius: 1, breakInside: 'avoid' }}
          >
            <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
              <Avatar src={testimonial.image} alt={testimonial.name} sx={{ mr: 1, width: 30, height: 30 }} />
              <Box>
                <Typography variant="subtitle2" fontWeight="bold">{testimonial.name}</Typography>
                {testimonial.title && (
                  <Typography variant="caption" color="text.secondary">{testimonial.title}</Typography>
                )}
              </Box>
            </Box>
            <Rating name={`rating-${index}`} value={testimonial.rating} readOnly size="small" />
            <Typography variant="body2" sx={{ mt: 1 }}>{testimonial.comment}</Typography>
          </Paper>
        ))}
      </Box>
      {testimonials.length > 2 && ( 
        <Box
          sx={{
            position: 'absolute',
            left: 0,
            right: 0,
            bottom: 0,
            height: '40px', 
            background: 'linear-gradient(to top, rgba(255,255,255,0.8), rgba(255,255,255,1))',
            pointerEvents: 'none',
          }}
        />
      )}
      <Box sx={{ mt: 4 }}>
        <Typography variant="body2" sx={{ cursor: 'pointer', fontWeight: 'bold' }}>
          See more reviews
        </Typography>
      </Box>
    </Box>
  );
};

export default TestimonialsSection;