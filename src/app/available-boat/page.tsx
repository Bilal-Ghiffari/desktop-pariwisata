"use client";

import * as React from "react";
import NavBar from "../components/containers/navbar";

import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Drawer,
  DrawerContent,
  DrawerFooter,
  DrawerTrigger,
} from "@/components/ui/drawer";

import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { RootState } from "@/lib/store";
import { dateFormat } from "@/utils";
import Image from "next/image";
import { useSelector } from "react-redux";
import CardTicketBoat from "../components/containers/card-ticket-boat";
import Footers from "../components/containers/footers";
import Arrival from "./components/arrival";
import LeavingDate from "./components/leaving-date";
import Passenger from "./components/passenger";
import ReturnDate from "./components/return-date";
import Departure from "./components/departure";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";

interface IAvailableBoatProps {}

const AvailableBoat: React.FunctionComponent<IAvailableBoatProps> = (props) => {
  const state = useSelector((state: RootState) => state.boatFilter);
  const [isSwitch, setIsSwitch] = React.useState<boolean>(false);
  const dataRegion = [
    { name: "Gilimanuk", value: "gilimanuk" },
    { name: "Merak", value: "merak" },
    { name: "Nusapeninda", value: "nusapeninda" },
    { name: "Labuan Bajo", value: "LabuanBajo" },
  ];

  return (
    <>
      <div className="md:hidden block z-10 bg-gradient-to-r from-cyan-500 to-blue-500 w-full shadow-lg md:py-8 py-4 md:px-6 px-4 rounded-b-xl sticky top-0">
        <div className="grid md:flex md:justify-between grid-cols-1 md:space-y-0 space-y-3">
          <div className="flex flex-row gap-x-3 font-bold items-center text-lg">
            <Link href="/">
              <ArrowLeft className="w-6 h-6" />
            </Link>
            <h3 className="capitalize">{state?.departure || "not found"}</h3>
            <svg
              width="9"
              height="10"
              viewBox="0 0 9 10"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M0.237793 0H3.4096L8.47568 5L3.4096 10H0.237793L5.3259 5L0.237793 0Z"
                fill="black"
              />
            </svg>
            <h3 className="capitalize">{state?.arrival || "not found"}</h3>
            <div className="ml-auto">
              <Drawer>
                <DrawerTrigger asChild>
                  <Button className="bg-[#175399] w-full">Change</Button>
                </DrawerTrigger>
                <DrawerContent>
                  <div className="grid grid-cols-1 gap-4 mb-4">
                    <Departure data={dataRegion} />
                    <Arrival data={dataRegion} />
                    <LeavingDate
                      isSwitch={isSwitch}
                      setIsSwitch={setIsSwitch}
                    />
                    <ReturnDate isSwitch={isSwitch} />
                    <Passenger />
                  </div>
                  <DrawerFooter>
                    <Button className="w-full py-5 bg-[#175399]">
                      <Image
                        width={20}
                        height={20}
                        src="/images/form-filter-boats/search-button.svg"
                        alt="icon-search"
                        className="mr-2"
                      />
                      Search Ship
                    </Button>
                  </DrawerFooter>
                </DrawerContent>
              </Drawer>
            </div>
          </div>
          <div className="flex md:flex-row gap-x-3 ml-9 text-sm">
            <span>
              {dateFormat(state.leavingDate || "", "ddd DD MMM YYYY")}
            </span>
            <Separator orientation="vertical" className="bg-white/20" />
            <span>{state.passeger} passegers</span>
            <Separator
              orientation="vertical"
              className="bg-white/20 md:block hidden"
            />
          </div>
        </div>
      </div>
      <div className="md:container p-4 md:mx-auto mx-0">
        <NavBar className="md:flex hidden" />
        <h3 className="text-[32px] md:block hidden font-bold text-[#175399] my-16">
          Hasil Pencarian kamu
        </h3>
        <div className="grid grid-rows-1 md:grid-cols-3 grid-cols-1 gap-x-10 mb-10 sticky top-0">
          <div className="grid-rows-1 col-span-1 gap-y-5 h-min md:grid hidden">
            <div className="border py-8 px-6 rounded-2xl shadow-md space-y-5">
              <div className="flex flex-col gap-y-4 w-full">
                <Label htmlFor="priceRange" className="font-semibold text-lg">
                  Price Range
                </Label>
                <Input
                  className="px-[16px] py-3 rounded-[8px] border"
                  placeholder="IDR Maximum"
                  name="priceRange"
                  type="number"
                  id="priceRange"
                  required
                />
                <Input
                  className="px-[16px] py-3 rounded-[8px] border"
                  placeholder="IDR Maximum"
                  name="priceRange"
                  type="number"
                  id="priceRange"
                  required
                />
              </div>
              <div className="flex flex-col gap-y-5 w-full">
                <Label htmlFor="priceRange" className="font-semibold text-lg">
                  Cari Armada
                </Label>
                {/* <Select>
                  <SelectTrigger className="px-[16px] py-3 h-full">
                    <SelectValue placeholder="Search Armada" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="light">Blue Water Express</SelectItem>
                    <SelectItem value="dark">Cakalang</SelectItem>
                  </SelectContent>
                </Select> */}
                <div className="flex items-center space-x-2">
                  <Checkbox id="terms" />
                  <label
                    htmlFor="terms"
                    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                  >
                    Blue Water Express
                  </label>
                </div>
                <div className="flex items-center space-x-2">
                  <Checkbox id="terms" />
                  <label
                    htmlFor="terms"
                    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                  >
                    Cikalang
                  </label>
                </div>
                <Button variant="outline">Reset</Button>
              </div>
            </div>
          </div>
          <div className="grid grid-rows-1 col-span-2  gap-y-5 h-min">
            <div className="md:mt-0 mt-10">
              <h3 className="font-semibold text-2xl">
                Tiket Yang Tersedia{" "}
                <span className="text-gray-400/80 text-sm font-normal">
                  3 Tiket Tersedia
                </span>
              </h3>
            </div>
            <div className="md:block hidden bg-gradient-to-r from-cyan-500 to-blue-500 w-full shadow-lg md:py-8 py-4 md:px-6 px-4 rounded-xl">
              <div className="bg-white/20 py-5 md:px-8 px-4 w-full rounded-xl space-y-3">
                <div className="grid md:flex md:justify-between grid-cols-1 md:space-y-0 space-y-3">
                  <div className="flex flex-row gap-x-5 font-bold items-center text-lg">
                    <h3 className="capitalize">{state?.departure}</h3>
                    <svg
                      width="9"
                      height="10"
                      viewBox="0 0 9 10"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M0.237793 0H3.4096L8.47568 5L3.4096 10H0.237793L5.3259 5L0.237793 0Z"
                        fill="black"
                      />
                    </svg>
                    <h3 className="capitalize">{state?.arrival}</h3>
                  </div>
                  <div className="flex md:flex-row gap-x-3 md:items-center items-start">
                    <span>
                      {dateFormat(state.leavingDate || "", "ddd DD MMM YYYY")}
                    </span>
                    <Separator orientation="vertical" className="bg-white/20" />
                    <span>{state.passeger} passegers</span>
                    <Separator
                      orientation="vertical"
                      className="bg-white/20 md:block hidden"
                    />
                    <span className="md:block hidden">Regular</span>
                  </div>
                  <div className="md:block hidden">
                    <Dialog>
                      <DialogTrigger asChild>
                        <Button className="bg-[#175399] w-full">
                          Change search
                        </Button>
                      </DialogTrigger>
                      <DialogContent className="min-w-max">
                        <div className="grid grid-cols-2 gap-4 mb-4">
                          <Departure data={dataRegion} />
                          <Arrival data={dataRegion} />
                          <LeavingDate
                            isSwitch={isSwitch}
                            setIsSwitch={setIsSwitch}
                          />
                          <ReturnDate isSwitch={isSwitch} />
                          <Passenger />
                        </div>
                        <DialogFooter>
                          <Button className="w-1/2 py-5 bg-[#175399]">
                            <Image
                              width={20}
                              height={20}
                              src="/images/form-filter-boats/search-button.svg"
                              alt="icon-search"
                              className="mr-2"
                            />
                            Search Ship
                          </Button>
                        </DialogFooter>
                      </DialogContent>
                    </Dialog>
                  </div>
                </div>
              </div>
            </div>
            <CardTicketBoat />
            <CardTicketBoat />
            {/* <CardTicketBoat /> */}
          </div>
        </div>
      </div>
      <Footers />
    </>
  );
};

export default AvailableBoat;
