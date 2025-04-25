import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface topBarState {
  addProfileOpen: boolean,
  facebookPopOpen: boolean,
  instagramPopOpen: boolean,
  twitterPopOpen: boolean,
  tikTokPopOpen: boolean,
  linkedInPopOpen: boolean,
  pinterestPopOpen: boolean,
  xPopOpen: boolean,
}

const initialState: topBarState = {
  addProfileOpen: false,
  
  // social login popups
  facebookPopOpen: false,
  instagramPopOpen: false,
  twitterPopOpen: false,
  tikTokPopOpen: false,
  linkedInPopOpen: false,
  pinterestPopOpen: false,
  xPopOpen: false,
};

const topBarSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    toggleAddProfile: (state) => {
      state.addProfileOpen = !state.addProfileOpen;
    },
    
  },
});

export const { toggleAddProfile } = topBarSlice.actions;
export default topBarSlice.reducer;
