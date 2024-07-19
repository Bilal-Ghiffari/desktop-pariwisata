import { configureStore } from "@reduxjs/toolkit";
import boatFilterReducer from "./features/boatfilterSlice";
import userDetailReducer from "./features/userdetailSlice";

export const makeStore = configureStore({
  reducer: {
    boatFilter: boatFilterReducer,
    passeger: userDetailReducer,
  },
});

export type RootState = ReturnType<typeof makeStore.getState>;
export type AppDispatch = typeof makeStore.dispatch;
