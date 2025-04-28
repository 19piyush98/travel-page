import React from 'react';
import { Box, Typography, Button, Divider } from '@mui/material';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';

function DayTabs({ selectedDay, onDayChange }) {
  const days = [
    { day: 'MON', date: '27', month: 'JAN' },
    { day: 'TUE', date: '28', month: 'JAN' },
    { day: 'WED', date: '29', month: 'JAN' },
    { day: 'THU', date: '30', month: 'JAN' },
    { day: 'FRI', date: '31', month: 'JAN' },
    { day: 'SAT', date: '1', month: 'FEB' },
    { day: 'SUN', date: '2', month: 'FEB' } 
  ];

  return (
    <Box sx={{ 
      width: '100%',
      mx: 'auto',
      p: 1,
      bgcolor: 'background.paper',
      borderRadius: 2
    }}>

      <Box sx={{ 
        display: 'flex', 
        alignItems: 'center',
        gap: 1
      }}>

        {days.map((item, index) => {
          const isActive = selectedDay === `${item.day} ${item.date}`;
          return (
            <Button
              key={index}
              variant={isActive ? 'contained' : 'outlined'}
              size="small"
              onClick={() => onDayChange(`${item.day} ${item.date}`)}
              sx={{
                flexGrow: 1,
                minWidth: 0,
                height: 56,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                borderRadius: 1,
                '&.MuiButton-contained': {
                  bgcolor: 'primary.main',
                  color: 'common.white'
                },
                '&.MuiButton-outlined': {
                  borderColor: 'divider',
                  color: 'text.primary'
                }
              }}
            >
              <Typography variant="caption" sx={{ 
                fontSize: '0.75rem',
                lineHeight: 1,
                mb: 0.5
              }}>
                {item.day}
              </Typography>
              <Typography variant="body1" sx={{ 
                fontWeight: isActive ? 600 : 400,
                lineHeight: 1
              }}>
                {isActive ? (
                  <>
                    {item.month}<br />
                    {item.date}
                  </>
                ) : (
                  item.date
                )}
              </Typography>
            </Button>
          );
        })}

        <Button 
          size="small" 
          sx={{ 
            minWidth: 32, 
            height: 32,
            p: 0,
            color: 'text.primary'
          }}
        >
          <ChevronRightIcon fontSize="small" />
        </Button>
      </Box>
    </Box>
  );
}

export default DayTabs;