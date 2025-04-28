import React from 'react';
import { Card, CardMedia, CardContent, Typography } from '@mui/material';

function ActivityCard({ image, title, time, duration, pickup, date, day }) {
  return (
    <Card sx={{ display: 'flex', mb: 2, borderRadius: 2 }}>
      <CardMedia
        component="img"
        sx={{ width: 150, height: 'max-height' }}
        src={image}
        alt={title}
      />
      <CardContent sx={{ flexGrow: 1, p: 2 }}>
        <Typography variant="subtitle2" fontWeight="500" gutterBottom>
          {title}
        </Typography>
        <Typography variant="caption" display="block">
          {time}
        </Typography>
        <Typography variant="caption" display="block">
          {duration}
        </Typography>
        <Typography variant="caption" display="block">
          {pickup}
        </Typography>
      </CardContent>
    </Card>
  );
}

export default ActivityCard;