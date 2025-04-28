import React from 'react';
import { Card, CardMedia, CardContent, Typography } from '@mui/material';

function AccommodationCard({ image, hotelName, checkIn, checkOut, nights }) {
  return (
    <Card sx={{ width: 250, borderRadius: 2, flexShrink: 0 }}>
      <CardMedia
        component="img"
        height={140}
        image={image || ''} 
        alt={hotelName}
      />
      <CardContent sx={{ p: 2 }}>
        <Typography variant="subtitle2" fontWeight="500" gutterBottom>
          {hotelName}
        </Typography>
        <Typography variant="caption" display="block">
          Check In: {checkIn}
        </Typography>
        <Typography variant="caption" display="block">
          Check Out: {checkOut}
        </Typography>
        <Typography variant="caption" display="block" mt={1}>
          {nights}
        </Typography>
      </CardContent>
    </Card>
  );
}

export default AccommodationCard;