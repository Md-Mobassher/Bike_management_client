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
    setBike: (state, action) => {
      const { bikes } = action.payload;
      state.bikes = bikes;
    },
  },
});
export const { setBike } = bikeSlice.actions;

export default bikeSlice.reducer;

export const selectCurrentBike = (state: RootState) => state;
