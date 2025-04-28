import React, { useEffect, useState } from 'react';
import { Box } from '@mui/material';
import ActivitiesHeader from './ActivitiesHeader';
import DayTabs from './DayTabs';
import ActivityCard from './ActivityCard';

const activitiesData = [
  {
    id: 1,
    day: 'MON 27',
    date: '27.01.2025',
    title: 'Senso-ji Temple & Nakamise Shopping Street',
    time: 'Timing: 9:00 am onwards',
    duration: 'Duration: 3 hours',
    pickup: 'Pick up: From hotel',
    image: 'https://img.freepik.com/free-photo/type-entertainment-complex-popular-resort-with-pools-water-parks-turkey-with-more-than-5-million-visitors-year-amara-dolce-vita-luxury-hotel-resort-tekirova-kemer_146671-18728.jpg?t=st=1745734490~exp=1745738090~hmac=4ce51734fc5de1fa5778dacba59bc1690af85a21ea35fc4d963a11ce30420b79&w=2000'
  },
  {
    id: 2,
    day: 'MON 27',
    date: '27.01.2025',
    title: 'Tokyo Sky Tree',
    time: 'Timing: 1:00 pm Afternoon',
    duration: 'Duration: 2 hours',
    pickup: 'Pick up: From Nakamise Street',
    image: 'https://img.freepik.com/premium-photo/reception-area-luxury-greece-hotel-with-marble-floors_454608-777.jpg?w=2000',
  },
  {
    id: 3,
    day: 'MON 27',
    date: '27.01.2025',
    title: 'Kimono Wearing',
    time: 'Timing: Anytime before 5:00pm',
    duration: 'Duration: Flexible',
    pickup: 'Pick up: From hotel',
    image: 'https://img.freepik.com/premium-photo/type-entertainment-complex_146671-19411.jpg?w=2000',
  },
  {
    id: 4,
    day: 'TUE 28',
    date: '28.01.2025',
    title: 'Kimono Wearing',
    time: 'Timing: Anytime before 5:00pm',
    duration: 'Duration: Flexible',
    pickup: 'Pick up: From hotel',
    image: 'https://img.freepik.com/premium-photo/type-entertainment-complex_146671-19411.jpg?w=2000',
  },
  {
    id: 5,
    day: 'WED 29',
    date: '29.01.2025',
    title: 'Tokyo Sky Tree',
    time: 'Timing: 1:00 pm Afternoon',
    duration: 'Duration: 2 hours',
    pickup: 'Pick up: From Nakamise Street',
    image: 'https://img.freepik.com/premium-photo/reception-area-luxury-greece-hotel-with-marble-floors_454608-777.jpg?w=2000',
  },
];

function Activities() {
  const [selectedDay, setSelectedDay] = useState('MON 27');
  const filteredActivities = activitiesData.filter(activity => activity.day === selectedDay);
  return (
    <Box sx={{ p: 2 }}>
      <ActivitiesHeader />
      <DayTabs selectedDay={selectedDay} onDayChange={setSelectedDay} />
      {filteredActivities.map(activity => (
        <ActivityCard key={activity.id} {...activity} />
      ))}
    </Box>
  );
}

export default Activities;