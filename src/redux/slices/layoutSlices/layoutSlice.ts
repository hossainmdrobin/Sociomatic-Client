import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface topBarState {
  addProfileOpen: boolean,
  showLoader: boolean
}

const initialState: topBarState = {
  addProfileOpen: false,
  showLoader:false
};

const topBarSlice = createSlice({
  name: 'layout',
  initialState,
  reducers: {
    toggleAddProfile: (state) => {
      state.addProfileOpen = !state.addProfileOpen;
    },
    showLoader: (state, action: PayloadAction<boolean>) => {
      state.showLoader = action.payload;

      // rest are false
      state.addProfileOpen = false;
    }
    
  },
});

export const {
  toggleAddProfile,
  showLoader
} = topBarSlice.actions;
export default topBarSlice.reducer;
