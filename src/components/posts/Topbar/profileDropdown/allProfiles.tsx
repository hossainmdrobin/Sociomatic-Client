import React from 'react';
import {
  Avatar,
  List,
  ListItem,
  ListItemText,
  // Typography,
  Paper,
  Radio,
  FormControl,
} from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '@/redux/store';
import { setActiveAccount } from '@/redux/slices/accountsSlices/accountSlice';



const ProfileListWithRadioStart = () => {
  const accountData = useSelector((state: RootState) => state.persistedReducer.accounts);
  const dispatch = useDispatch();

  return (
    <Paper elevation={3} sx={{ maxWidth: 400, width: 400, boxShadow: 0, margin: '0px', p: 0 }}>
      {/* <Typography variant="h6" gutterBottom>
        Select a Team Member
      </Typography> */}
      <FormControl component="fieldset">
        <List>
          {accountData?.accounts?.map((profile) => (
            <ListItem
              key={profile._id}
              disableGutters
              sx={{ display: 'flex', alignItems: 'center', cursor: 'pointer' }}
              onClick={() => dispatch(setActiveAccount(profile))}
              component="div"
            >
              <Radio
                checked={accountData?.activeAccount?._id === profile._id}
              />
              <Avatar
                alt={profile.name}
                src={profile.photo}
                sx={{ mx: 2 }}
              />
              <ListItemText
                primary={profile?.name}
                secondary={profile?.accountType}
              />
            </ListItem>
          ))}
        </List>
      </FormControl>
    </Paper>
  );
};

export default ProfileListWithRadioStart;
