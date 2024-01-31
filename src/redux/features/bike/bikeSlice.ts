import { RootState } from "@/redux/store";
import { createSlice } from "@reduxjs/toolkit";

export interface IBike {}

interface IInitialState {
  bikes: null | IBike[];
}
const initialState: IInitialState = {
  bikes: null,
};

export const bikeSlice = createSlice({
  name: "bike",
  initialState,
  reducers: {
    addBike: (state, action) => {
      const { bikes } = action.payload;
      state.bikes = bikes;
    },
    deleteBike: (state, action) => {
      const { bikes } = action.payload;
      state.bikes = bikes;
    },
    updateBike: (state, action) => {
      const { bikes } = action.payload;
      state.bikes = bikes;
    },
  },
});
export const { addBike, deleteBike, updateBike } = bikeSlice.actions;

export default bikeSlice.reducer;

export const selectCurrentBike = (state: RootState) => state;
