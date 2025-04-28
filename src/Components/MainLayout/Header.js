import React from 'react';
import { Box, Typography, IconButton, Avatar } from '@mui/material';

export default function Header() {
  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'space-between', 
        alignItems: 'center',
        padding: 2,
        width: '100%', 
        maxWidth: 600, 
        margin: '0 auto', 
      }}
    >
      <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
        <Typography variant="h5" sx={{ fontWeight: 700, color: '#333' }}>
          Hello Priyanshu!
        </Typography>
        <Typography variant="subtitle1" sx={{ color: '#777' }}> 
          Ready for the trip?
        </Typography>
      </Box>
      <IconButton size="small" sx={{ ml: 2 }}>
        <Avatar sx={{ bgcolor: '#F75940', color: 'white', width: 32, height: 32 }}>
          P
        </Avatar>
      </IconButton>
    </Box>
  );
}