// store/boatFilterSlice.ts
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export enum FilterActionKind {
  SEARCH_BOAT = "SEARCH_BOAT",
  UPDATE_QUANTITIES = "UPDATE_QUANTITIES",
}

type FilterState = {
  departure: string | null;
  arrival: string | null;
  leavingDate: string | null;
  returnDate: string | null;
  passeger: number;
  adultQuantity: number;
  childQuantity: number;
};

const initialState: FilterState = {
  departure: "",
  arrival: "",
  leavingDate: new Date(Date.now()).toISOString(),
  returnDate: "",
  passeger: 1,
  adultQuantity: 1,
  childQuantity: 0,
};

const boatFilterSlice = createSlice({
  name: "boatFilter",
  initialState,
  reducers: {
    searchBoat(state, action: PayloadAction<Partial<FilterState>>) {
      const { departure, arrival, leavingDate, returnDate, passeger } =
        action.payload;
      state.departure = departure ?? state.departure;
      state.arrival = arrival ?? state.arrival;
      state.leavingDate = leavingDate ?? state.leavingDate;
      state.returnDate = returnDate ?? state.returnDate;
      state.passeger = passeger ?? state.passeger;
    },
    updateQuantities(state, action: PayloadAction<Partial<FilterState>>) {
      const { adultQuantity, childQuantity } = action.payload;
      state.adultQuantity = adultQuantity ?? state.adultQuantity;
      state.childQuantity = childQuantity ?? state.childQuantity;
      state.passeger =
        (adultQuantity ?? state.adultQuantity) +
        (childQuantity ?? state.childQuantity);
    },
  },
});

export const { searchBoat, updateQuantities } = boatFilterSlice.actions;

export default boatFilterSlice.reducer;
