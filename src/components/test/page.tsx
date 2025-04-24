import React from 'react';
import { Box, Typography, Paper } from '@mui/material';

const ScrollableComponent = () => {
  return (
    <Paper elevation={3} sx={{ maxWidth: 400, height: 300, overflowY: 'auto', p: 2, mx: 'auto' }}>
      <Typography variant="h6" gutterBottom>
        Scrollable Content
      </Typography>
      {[...Array(20)].map((_, i) => (
        <Box key={i} sx={{ mb: 1, p: 1, backgroundColor: '#f0f0f0', borderRadius: 1 }}>
          Item {i + 1}
        </Box>
      ))}
    </Paper>
  );
};

export default ScrollableComponent;
