import React, { useState } from 'react';
import { Container, Box, Typography, TextField, MenuItem, InputAdornment, Button } from '@mui/material';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import PersonIcon from '@mui/icons-material/Person';
import FavoriteIcon from '@mui/icons-material/Favorite';
import GroupsIcon from '@mui/icons-material/Groups';
import PeopleIcon from '@mui/icons-material/People';
import { useNavigate } from 'react-router-dom';

const durations = ['1-3 Days', '4-7 Days', '1-2 Weeks', 'More than 2 Weeks'];

const companions = [
  { label: 'Solo', icon: <PersonIcon /> },
  { label: 'Couple', icon: <FavoriteIcon /> },
  { label: 'Family', icon: <GroupsIcon /> },
  { label: 'Friends', icon: <PeopleIcon /> },
];

export default function TravelPlanner() {
  const [destination, setDestination] = useState('');
  const [duration, setDuration] = useState('');
  const [companion, setCompanion] = useState('');
  const navigate = useNavigate();

  const handleContinue = ()=> {
    navigate('/');
  }

  return (
    <Box
      sx={{
        backgroundImage: "linear-gradient(180deg, #f1f7eb, #f1ecf9)",
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <Container
        maxWidth="sm"
        sx={{
          flexGrow: 1,
          display: 'flex',
          flexDirection: 'column',
        }}
      >
        <Box width="100%" p={2} mt={2}>
          <Typography variant="h5" fontWeight="bold" textAlign="center" mb={1}>
            Plan Your Journey, Your Way!
          </Typography>
          <Typography variant="subtitle1" textAlign="center" mb={4} color="text.secondary">
            Let’s create your personalised travel experience
          </Typography>

          <Box mb={3}>
            <Typography variant="subtitle2" fontWeight="bold" mb={1}>
              Where would you like to go?
            </Typography>
            <TextField
              fullWidth
              placeholder="Enter Destination"
              variant="outlined"
              value={destination}
              onChange={(e) => setDestination(e.target.value)}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <LocationOnIcon />
                  </InputAdornment>
                ),
                style: { fontWeight: 500, color: '#333' },
              }}
              InputLabelProps={{
                style: { color: '#666' },
              }}
            />
          </Box>

          <Box mb={3}>
            <Typography variant="subtitle2" fontWeight="bold" mb={1}>
              How long will you stay?
            </Typography>
            <TextField
              select
              fullWidth
              variant="outlined"
              value={duration}
              onChange={(e) => setDuration(e.target.value)}
              displayEmpty
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <CalendarTodayIcon />
                  </InputAdornment>
                ),
                style: { fontWeight: 500, color: '#333' },
              }}
              SelectProps={{
                displayEmpty: true,
                renderValue: selected => {
                  if (!selected) {
                    return <span style={{ color: '#999' }}>Select Duration</span>;
                  }
                  return selected;
                },
              }}
            >
              {durations.map((item) => (
                <MenuItem key={item} value={item}>
                  {item}
                </MenuItem>
              ))}
            </TextField>
          </Box>

          <Box mb={3}>
            <Typography variant="subtitle2" fontWeight="bold" mb={2}>
              Who are you traveling with?
            </Typography>
            <Box display="flex" flexWrap="wrap" gap={2}>
  {companions.map((item) => (
    <Button
      key={item.label}
      variant="outlined"
      onClick={() => setCompanion(item.label)}
      startIcon={item.icon}
      sx={{
        flex: '1 1 45%',
        minWidth: 0,    
        maxWidth: 'calc(50% - 8px)', 
        textTransform: 'none',
        borderRadius: 3,
        fontWeight: 'bold',
        justifyContent: 'flex-start',
        px: 2,
        py: 1.5,
        color: companion === item.label ? 'primary.main' : 'text.primary',
        borderColor: companion === item.label ? 'primary.main' : 'grey.300',
        backgroundColor: companion === item.label ? 'primary.light' : 'background.paper',
        boxShadow: companion === item.label ? 2 : 0,
        '&:hover': {
          backgroundColor: 'primary.light',
          borderColor: 'primary.main',
        },
      }}
    >
      {item.label}
    </Button>
  ))}
</Box>

          </Box>
        </Box>
        <Box flexGrow={1} />

        <Box px={2} pb={4}> 
          <Button
          onClick={handleContinue}
            variant="contained"
            fullWidth
            size="large"
            sx={{
              bgcolor: '#3333ff',
              borderRadius: 2,
              textTransform: 'none',
              fontWeight: 'bold',
              '&:hover': {
                bgcolor: '#2a2acc',
              },
            }}
          >
            Continue
          </Button>
        </Box>
      </Container>
    </Box>
  );
}
