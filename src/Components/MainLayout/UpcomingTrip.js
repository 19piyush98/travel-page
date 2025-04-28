import React from 'react';
import { Box, Typography } from '@mui/material';
import TripCard from './TripCard'

function UpcomingTrip() {
  return (
    <Box sx={{ p: 2 }}>
      <Typography variant="subtitle1" sx={{ fontWeight: 500, mb:1, fontFamily:'Mont' }}>
        Your Upcoming Trip
      </Typography>
      <TripCard />
    </Box>
  );
}

export default UpcomingTrip;