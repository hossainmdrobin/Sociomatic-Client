import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface topBarState {
  addProfileOpen: boolean,
  facebookPopOpen: boolean,
  instagramPopOpen: boolean,
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
    openFacebookPop: (state) => {
      // Open the Facebook popup
      state.facebookPopOpen = true;
      // Other popups should be closed when one is opened
      state.addProfileOpen = false;
      state.instagramPopOpen = false;
      state.tikTokPopOpen = false;
      state.linkedInPopOpen = false;
      state.pinterestPopOpen = false;
      state.xPopOpen = false;
    },
    closeFacebookPop: (state) => {
      state.facebookPopOpen = false;  
    },
    openInstagramPop: (state) => {
      // Open the Instagram popup
      state.instagramPopOpen = true;
      // Other popups should be closed when one is opened
      state.addProfileOpen = false;
      state.facebookPopOpen = false;
      state.tikTokPopOpen = false;
      state.linkedInPopOpen = false;
      state.pinterestPopOpen = false;
      state.xPopOpen = false;
    },
    closeInstagramPop: (state) => {
      state.instagramPopOpen = false;  
    }
  },
});

export const { toggleAddProfile } = topBarSlice.actions;
export default topBarSlice.reducer;
