import React, { useState } from 'react';
import {
  Avatar,
  List,
  ListItem,
  ListItemText,
  Typography,
  Paper,
  Radio,
  FormControl,
  Box
} from '@mui/material';

const profiles = [
  {
    name: 'Alice Johnson',
    title: 'Product Manager',
    image: 'https://randomuser.me/api/portraits/women/1.jpg',
    id: 'alice',
  },
  {
    name: 'Bob Smith',
    title: 'Frontend Developer',
    image: 'https://randomuser.me/api/portraits/men/2.jpg',
    id: 'bob',
  },
  {
    name: 'Carol Lee',
    title: 'UX Designer',
    image: 'https://randomuser.me/api/portraits/women/3.jpg',
    id: 'carol',
  },
];

const ProfileListWithRadioStart = () => {
  const [selectedProfile, setSelectedProfile] = useState('');

interface Profile {
    name: string;
    title: string;
    image: string;
    id: string;
}

const handleChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    setSelectedProfile(event.target.value);
};

  return (
    <Paper elevation={3} sx={{ maxWidth: 400,width:400,boxShadow:0, margin: '0px', p: 0 }}>
      <Typography variant="h6" gutterBottom>
        Select a Team Member
      </Typography>
      <FormControl component="fieldset">
        <List>
          {profiles.map((profile) => (
            <ListItem
              key={profile.id}
              disableGutters
              sx={{ display: 'flex', alignItems: 'center', cursor: 'pointer' }}
              onClick={() => setSelectedProfile(profile.id)}
              component="div"
            >
              <Radio
                checked={selectedProfile === profile.id}
                onChange={handleChange}
                value={profile.id}
              />
              <Avatar
                alt={profile.name}
                src={profile.image}
                sx={{ mx: 2 }}
              />
              <ListItemText
                primary={profile.name}
                secondary={profile.title}
              />
            </ListItem>
          ))}
        </List>
      </FormControl>
    </Paper>
  );
};

export default ProfileListWithRadioStart;
