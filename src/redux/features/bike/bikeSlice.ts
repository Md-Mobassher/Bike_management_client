import { RootState } from "@/redux/store";
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  bikes: [],
  status: "idle",
  error: null,
  selectedBike: null,
};

export const bikeSlice = createSlice({
  name: "bike",
  initialState,
  reducers: {
    clearSelectedBike: (state) => {
      state.selectedBike = null;
    },
  },
});
export const {} = bikeSlice.actions;

export default bikeSlice.reducer;

export const selectCurrentBike = (state: RootState) => state;
