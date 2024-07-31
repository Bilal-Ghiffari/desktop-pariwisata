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
  country: string;
  isSwitch: boolean;
  passengerTypes: string[];
  setCountry: (value: string) => void;
  handleTypeChange: (index: number, value: string) => void;
  handleSwitchChange: () => void;
}

const PassengerContext = createContext<PassengerContextType | undefined>(
  undefined
);

export const PassengerProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [country, setCountry] = useState<string>("");
  const [isSwitch, setIsSwitch] = useState<boolean>(false);
  const { boatFilter } = useSelector((state: RootState) => state);

  const passengers = useMemo(
    () => [
      ...Array(boatFilter.adultQuantity).fill("Dewasa"),
      ...Array(boatFilter.childQuantity).fill("Bayi"),
    ],
    [boatFilter]
  );

  const [passengerTypes, setPassengerTypes] = useState(
    passengers.map((type, id) =>
      id === 0 && isSwitch ? type.toLowerCase() : ""
    )
  );

  const handleTypeChange = useCallback((index: number, value: string) => {
    setPassengerTypes((prevTypes) => {
      const newTypes = [...prevTypes];
      newTypes[index] = value;
      return newTypes;
    });
  }, []);

  const handleSwitchChange = useCallback(() => {
    setIsSwitch((prevChecked) => {
      const newChecked = !prevChecked;
      setPassengerTypes(
        passengers.map((type, id) =>
          id === 0 && newChecked ? type.toLowerCase() : ""
        )
      );
      return newChecked;
    });
  }, [passengers]);

  return (
    <PassengerContext.Provider
      value={{
        passengers,
        country,
        isSwitch,
        passengerTypes,
        setCountry,
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
