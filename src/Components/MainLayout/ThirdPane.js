import React from 'react';
import { Box, Typography } from '@mui/material';

function ThirdPane() {
  return (
    <Box sx={{ width: 300, p: 3, bgcolor: '#f0f0f0', borderLeft: '1px solid #ccc' }}>
      <Typography variant="h6" gutterBottom>
        Third Pane Content
      </Typography>
      <Typography variant="body2">
        This is the content of the third pane that will appear when a specific element is clicked.
      </Typography>
    </Box>
  );
}

export default ThirdPane;