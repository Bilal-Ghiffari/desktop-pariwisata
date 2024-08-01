"use client";

import React, {
  createContext,
  useState,
  useMemo,
  useCallback,
  ReactNode,
} from "react";
import { useSelector } from "react-redux";
import { RootState } from "@/lib/store";

interface PassengerContextType {
  passengers: string[];
  typeId: string[];
  isSwitch: boolean;
  passengerTypes: string[];
  setTypeID: (index: number, value: string) => void;
  handleTypeChange: (index: number, value: string) => void;
  handleSwitchChange: () => void;
}

const PassengerContext = createContext<PassengerContextType | undefined>(
  undefined
);

export const PassengerProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [isSwitch, setIsSwitch] = useState<boolean>(false);
  const { boatFilter } = useSelector((state: RootState) => state);

  const passengers = useMemo(
    () => [
      ...Array(boatFilter.adultQuantity).fill("Dewasa"),
      ...Array(boatFilter.childQuantity).fill("Bayi"),
    ],
    [boatFilter.adultQuantity, boatFilter.childQuantity]
  );

  const [passengerTypes, setPassengerTypes] = useState<string[]>(
    passengers.map((type, id) =>
      id === 0 && isSwitch ? type.toLowerCase() : ""
    )
  );

  const [typeId, setTypeId] = useState<string[]>(passengers.map(() => ""));

  React.useEffect(() => {
    setPassengerTypes(
      passengers.map((type, id) =>
        id === 0 && isSwitch ? type.toLowerCase() : ""
      )
    );
  }, [isSwitch, passengers]);

  const setTypeID = useCallback((index: number, value: string) => {
    setTypeId((prevCountries) => {
      const newCountries = [...prevCountries];
      newCountries[index] = value;
      return newCountries;
    });
  }, []);

  const handleTypeChange = useCallback((index: number, value: string) => {
    setPassengerTypes((prevTypes) => {
      const newTypes = [...prevTypes];
      newTypes[index] = value;
      return newTypes;
    });
  }, []);

  const handleSwitchChange = useCallback(() => {
    setIsSwitch((prevChecked) => !prevChecked);
  }, []);

  return (
    <PassengerContext.Provider
      value={{
        passengers,
        typeId,
        isSwitch,
        passengerTypes,
        setTypeID,
        handleTypeChange,
        handleSwitchChange,
      }}
    >
      {children}
    </PassengerContext.Provider>
  );
};

export const usePassengerContext = () => {
  const context = React.useContext(PassengerContext);
  if (context === undefined) {
    throw new Error(
      "usePassengerContext must be used within a PassengerProvider"
    );
  }
  return context;
};
