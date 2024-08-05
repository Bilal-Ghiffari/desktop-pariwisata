// store/boatFilterSlice.ts
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export enum FilterActionKind {
  SEARCH_BOAT = "SEARCH_BOAT",
  UPDATE_QUANTITIES = "UPDATE_QUANTITIES",
  FILTERSRBOAT = "FILTER_BOAT",
  RESETFILTERSBOAT = "RESET_FILTER_BOAT",
  TOGGLEFEAT = "TOGGLE_FEAT",
}

type FilterState = {
  departure: string | null;
  arrival: string | null;
  leavingDate: string | null;
  returnDate: string | null;
  passeger: number;
  adultQuantity: number;
  childQuantity: number;
  stateFilters: { key: string; value: any }[];
  armada: string[];
  minimumPrice: string;
  maximumPrice: string;
};

const initialState: FilterState = {
  departure: "",
  arrival: "",
  leavingDate: new Date(Date.now()).toISOString(),
  returnDate: "",
  passeger: 1,
  adultQuantity: 1,
  childQuantity: 0,
  stateFilters: [],
  armada: [],
  minimumPrice: "",
  maximumPrice: "",
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
    filterBoat(state, action: PayloadAction<Partial<FilterState>>) {
      const { minimumPrice, maximumPrice } = action.payload;
      state.minimumPrice = minimumPrice ?? state.minimumPrice;
      state.maximumPrice = maximumPrice ?? state.maximumPrice;
    },
    toggleFleet(state, action: PayloadAction<string>) {
      const fleetItem = action.payload;
      if (state.armada.includes(fleetItem)) {
        state.armada = state.armada.filter((item) => item !== fleetItem);
      } else {
        state.armada.push(fleetItem);
      }
    },
    removeFilter(state, action: PayloadAction<{ key: string; value?: any }>) {
      const { key, value } = action.payload;

      if (key === "armada" && value) {
        state.armada = state.armada.filter((item) => item !== value);
        // Update stateFilters array
        state.stateFilters = state.stateFilters
          .map((filter) => {
            if (filter.key === "armada") {
              const updatedValue = filter.value.filter(
                (item: string) => item !== value
              );
              return { ...filter, value: updatedValue };
            }
            return filter;
          })
          .filter((filter) => filter.value.length > 0);
      } else {
        state.stateFilters = state.stateFilters.filter(
          (filter) => filter.key !== key
        );
        if (key === "minimumPrice") {
          state.minimumPrice = "";
        } else if (key === "maximumPrice") {
          state.maximumPrice = "";
        }
      }
    },
    resetFilter(state) {
      state.stateFilters = [];
      state.armada = [];
      state.minimumPrice = "";
      state.maximumPrice = "";
    },
    addFilters(state) {
      const { minimumPrice, maximumPrice } = state;

      state.stateFilters = state.stateFilters.filter(
        (filter) => !["minimumPrice", "maximumPrice"].includes(filter.key)
      );

      state.stateFilters = state.stateFilters.filter(
        (filter) => filter.key !== "armada"
      );
      if (state.armada.length > 0) {
        state.stateFilters.push({ key: "armada", value: state.armada });
      }

      if (minimumPrice !== null) {
        state.stateFilters.push({ key: "minimumPrice", value: minimumPrice });
      }
      if (maximumPrice !== null) {
        state.stateFilters.push({ key: "maximumPrice", value: maximumPrice });
      }
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

export const {
  searchBoat,
  filterBoat,
  removeFilter,
  resetFilter,
  toggleFleet,
  addFilters,
  updateQuantities,
} = boatFilterSlice.actions;

export default boatFilterSlice.reducer;
