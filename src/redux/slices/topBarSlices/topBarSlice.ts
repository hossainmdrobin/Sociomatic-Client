import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface topBarState {
  addProfileOpen: boolean;
}

const initialState: topBarState = {
  addProfileOpen: false,
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
