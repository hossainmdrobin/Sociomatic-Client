import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from "uuid";

// Define the shape of each match filter item
interface MatchFilterItem {
  id?: string;
  looking: string;
  lookingfor: string;
}

// Define the state shape
interface MatchFilterState {
  matchfilter: MatchFilterItem[];
}

const initialmatchfilter: MatchFilterState = {
  matchfilter: [
    {
      id: uuidv4(),
      looking: "",
      lookingfor: "",
    },
  ],
};

export const filterSlice = createSlice({
  name: "matchfilter",
  initialState: initialmatchfilter,
  reducers: {
    showmatchfilter: (state) => state,

    updateMatch: (
      state,
      action: PayloadAction<{ id: string; looking: string; lookingfor: string }>
    ) => {
      const { id, looking, lookingfor } = action.payload;
      const match = state.matchfilter.find((m) => m.id === id);
      if (match) {
        match.looking = looking;
        match.lookingfor = lookingfor;
      }
    },
  },
});

export const { showmatchfilter, updateMatch } = filterSlice.actions;
export default filterSlice.reducer;
