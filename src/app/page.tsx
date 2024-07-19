"use client";

import React, { ChangeEvent, useState } from "react";
import NavBar from "./components/containers/navbar";
import CardFilterBoat from "./components/containers/form-filters-boat/card";
import { BoatContextProvider } from "./provider/boat-provider";
import Image from "next/image";

export default function Home() {
  const [inputA, setInputA] = useState("");
  const [inputB, setInputB] = useState("");

  const handleInputAChange = (event: ChangeEvent<HTMLInputElement>) => {
    setInputA(event.target.value);
  };

  const handleInputBChange = (event: ChangeEvent<HTMLInputElement>) => {
    setInputB(event.target.value);
  };

  const swapValues = () => {
    setInputA(inputB);
    setInputB(inputA);
  };
  return (
    <div>
      <div className="w-full h-[704px] relative">
        <div className="absolute inset-0 bg-black opacity-30 z-10"></div>
        <img
          src="/images/image 4.png"
          className="w-full h-full object-cover object-center"
          alt="image-hero-pariwisata"
        />
        <div className="container mx-auto absolute top-0 left-0 right-0 z-20">
          <NavBar />
          <div className="flex text-center justify-center flex-col gap-y-5 mt-[125px]">
            <span className="text-[22px] font-semibold text-[#BBBDC3]">
              life is too short for a wide and beautiful world
            </span>
            <h2 className="text-[52px] font-bold text-white">
              Enjoy Your Tour With Heavenly experience you&apos;ve never had
            </h2>
          </div>
        </div>
      </div>
      <CardFilterBoat />
    </div>
  );
}
