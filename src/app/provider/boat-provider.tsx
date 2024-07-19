"use client";

import * as React from "react";

export enum FilterActionKind {
  SEARCH_BOAT = "SEARCH_BOAT",
  UPDATE_QUANTITIES = "UPDATE_QUANTITIES",
}

type FilterState = {
  departure?: string | null;
  arrival?: string | null;
  date?: Date | null;
  passeger?: number | null;
  adultQuantity?: number | null;
  childQuantity?: number | null;
};

type FilterAction = {
  type: FilterActionKind;
  payload: Partial<FilterState>;
};

export type BoatFilterContext = {
  state: FilterState;
  dispatch: React.Dispatch<FilterAction>;
};

function FilterReducers(state: FilterState, action: FilterAction): FilterState {
  const { payload, type } = action;
  switch (type) {
    case FilterActionKind.SEARCH_BOAT:
      return {
        ...state,
        departure: payload.departure ?? state.departure,
        arrival: payload.arrival ?? state.arrival,
        date: payload.date ?? state.date,
        passeger: payload.passeger ?? state.passeger,
      };
    case FilterActionKind.UPDATE_QUANTITIES:
      const newPassegerCount =
        (payload.adultQuantity ?? state.adultQuantity ?? 0) +
        (payload.childQuantity ?? state.childQuantity ?? 0);
      return {
        ...state,
        adultQuantity: payload.adultQuantity ?? state.adultQuantity,
        childQuantity: payload.childQuantity ?? state.childQuantity,
        passeger: newPassegerCount,
      };
    default:
      return state;
  }
}

const BoatContext = React.createContext<BoatFilterContext | null>(null);

export const BoatContextProvider: React.FunctionComponent<{
  children: React.ReactNode;
}> = ({ children }) => {
  const [state, dispatch] = React.useReducer(FilterReducers, {
    departure: "",
    arrival: "",
    date: null,
    passeger: 0,
    adultQuantity: 0,
    childQuantity: 0,
  });

  return (
    <BoatContext.Provider value={{ dispatch, state }}>
      {children}
    </BoatContext.Provider>
  );
};

export const useBoatContextProviderContext = () => {
  const context = React.useContext(BoatContext);

  if (!context) {
    throw new Error(
      "useBoatContextProviderContext must be used inside the BoatContextProviderContextProvider"
    );
  }

  return context;
};
