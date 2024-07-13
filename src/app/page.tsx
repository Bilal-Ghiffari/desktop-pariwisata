"use client";

import React, { ChangeEvent, useState } from "react";
import NavBar from "./components/containers/navbar";
import { Button } from "@/components/ui/button";
import Footers from "./components/containers/footers";
import { CardTicket } from "./components/containers/card";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

// import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

import { cn } from "@/lib/utils";
import { dateFormat } from "@/utils";

export default function Home() {
  const [inputA, setInputA] = useState("");
  const [inputB, setInputB] = useState("");
  const [date, setDate] = React.useState<Date>();

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
          alt=""
        />
        <div className="container mx-auto absolute top-0 left-0 right-0 z-20">
          <NavBar />
          <div className="flex text-center justify-center flex-col gap-y-5 mt-[125px]">
            <span className="text-[22px] font-semibold text-[#BBBDC3]">
              life is too short for a wide and beautiful world
            </span>
            <h2 className="text-[52px] font-bold text-white">
              Enjoy Your Tour With Heavenly experience you've never had
            </h2>
          </div>
        </div>
      </div>
      <div className="max-w-4xl relative z-20 mx-auto mt-10 bg-white shadow-lg rounded-lg p-6 transform -translate-x-6 -translate-y-[13.5rem] top-5 drop-shadow-lg">
        <div className="flex mb-4">
          <button className="px-4 py-2 bg-blue-600 text-white rounded-l-lg focus:outline-none">
            Ferry
          </button>
        </div>
        <div className="grid grid-cols-2 gap-4 mb-4">
          <div className="flex items-center bg-white p-4 rounded-lg shadow-sm">
            <div className="flex items-center justify-center w-12 h-12 bg-blue-100 rounded-full mr-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 text-blue-600"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M3 10h3l3 9 3-18 3 12h3"
                />
              </svg>
            </div>
            <div>
              <div className="text-sm text-gray-500">Berangkat</div>
              <Select>
                <SelectTrigger className="w-[180px]">
                  <SelectValue placeholder="Merak" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="light" className="text-lg font-semibold">
                    Gilimanuk
                  </SelectItem>
                  <SelectItem value="dark" className="text-lg font-semibold">
                    Merak
                  </SelectItem>
                  <SelectItem value="system" className="text-lg font-semibold">
                    Bakauheni
                  </SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
          <div className="flex items-center bg-white p-4 rounded-lg shadow-sm">
            <div className="flex items-center justify-center w-12 h-12 bg-blue-100 rounded-full mr-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 text-blue-600"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M3 10h3l3 9 3-18 3 12h3"
                />
              </svg>
            </div>
            <div>
              <div className="text-sm text-gray-500">Tujuan</div>
              <Select>
                <SelectTrigger className="w-[180px]">
                  <SelectValue placeholder="Bakauheni" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="light" className="text-lg font-semibold">
                    Gilimanuk
                  </SelectItem>
                  <SelectItem value="dark" className="text-lg font-semibold">
                    Merak
                  </SelectItem>
                  <SelectItem value="system" className="text-lg font-semibold">
                    Bakauheni
                  </SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
          <div className="flex items-center bg-white p-4 rounded-lg shadow-sm">
            <div className="flex items-center justify-center w-12 h-12 bg-blue-100 rounded-full mr-4">
              <svg
                width="42"
                height="43"
                viewBox="0 0 42 43"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect y="0.5" width="42" height="42" rx="12" fill="#E8EDFF" />
                <g clip-path="url(#clip0_1_68)">
                  <path
                    d="M17.3333 20.2777H14.8889V22.7222H17.3333V20.2777ZM22.2222 20.2777H19.7778V22.7222H22.2222V20.2777ZM27.1111 20.2777H24.6667V22.7222H27.1111V20.2777ZM29.5556 11.7222H28.3333V9.27771H25.8889V11.7222H16.1111V9.27771H13.6667V11.7222H12.4444C11.0878 11.7222 10.0122 12.8222 10.0122 14.1666L10 31.2777C10 32.6222 11.0878 33.7222 12.4444 33.7222H29.5556C30.9 33.7222 32 32.6222 32 31.2777V14.1666C32 12.8222 30.9 11.7222 29.5556 11.7222ZM29.5556 31.2777H12.4444V17.8333H29.5556V31.2777Z"
                    fill="#3258E8"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_1_68">
                    <rect
                      width="32"
                      height="32"
                      fill="white"
                      transform="translate(5 5.5)"
                    />
                  </clipPath>
                </defs>
              </svg>
            </div>
            <div>
              <div className="text-sm text-gray-500">Pilih Tanggal</div>
              <Popover>
                <PopoverTrigger asChild>
                  <div className="text-lg font-semibold">
                    {date ? (
                      dateFormat(date, "DD MMM YYYY")
                    ) : (
                      <span>Pick a date</span>
                    )}
                  </div>
                  {/* <Button
                    variant={"outline"}
                    className={cn(
                      "w-[240px] justify-start text-left font-normal",
                      !date && "text-muted-foreground"
                    )}
                  >
                    <CalendarIcon className="mr-2 h-4 w-4" />
                date ? format(date, "PPP") : <span>Pick a date</span>
                  </Button> */}
                </PopoverTrigger>
                <PopoverContent className="w-auto p-0" align="start">
                  <Calendar
                    mode="single"
                    selected={date}
                    onSelect={setDate}
                    initialFocus
                  />
                </PopoverContent>
              </Popover>
            </div>
          </div>
          <div className="flex items-center bg-white p-4 rounded-lg shadow-sm">
            <div className="flex items-center justify-center w-12 h-12 bg-blue-100 rounded-full mr-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 text-blue-600"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M5.121 17.121A3 3 0 017.536 18H16.464a3 3 0 012.415-1.415l2.121-2.121M12 3v12m-6 6h12"
                />
              </svg>
            </div>
            <div>
              <div className="text-sm text-gray-500">Penumpang</div>
              <Dialog>
                <DialogTrigger asChild>
                  <span className="text-lg font-semibold flex w-full cursor-pointer">
                    1
                  </span>
                </DialogTrigger>
                <DialogContent className="sm:max-w-md">
                  <DialogHeader>
                    <DialogTitle>Atur Jumlah Penumpang</DialogTitle>
                    <DialogDescription>
                      Pastikan jumlah penumpangnya sesuai biar dapat asuransi
                      perjalanan.
                    </DialogDescription>
                  </DialogHeader>
                  <div className="flex flex-col gap-y-5">
                    <div className="flex justify-between gap-x-4">
                      <div>Dewasa</div>
                      <div className="flex flex-row gap-x-5">
                        <button>
                          <svg
                            width="40"
                            height="40"
                            viewBox="0 0 40 40"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <rect
                              width="40"
                              height="40"
                              rx="8"
                              fill="#D9D9D9"
                            />
                            <g clip-path="url(#clip0_4427_9165)">
                              <path
                                fill-rule="evenodd"
                                clip-rule="evenodd"
                                d="M27 21H13C12.45 21 12 20.55 12 20C12 19.45 12.45 19 13 19H27C27.55 19 28 19.45 28 20C28 20.55 27.55 21 27 21Z"
                                fill="#999999"
                              />
                            </g>
                            <defs>
                              <clipPath id="clip0_4427_9165">
                                <rect
                                  width="24"
                                  height="24"
                                  fill="white"
                                  transform="translate(8 8)"
                                />
                              </clipPath>
                            </defs>
                          </svg>
                        </button>
                        <span className="text-lg font-semibold flex items-center">
                          1
                        </span>
                        <button>
                          <svg
                            width="40"
                            height="40"
                            viewBox="0 0 40 40"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <rect
                              width="40"
                              height="40"
                              rx="8"
                              fill="#175399"
                            />
                            <g clip-path="url(#clip0_4427_9171)">
                              <path
                                d="M26 21H21V26C21 26.55 20.55 27 20 27C19.45 27 19 26.55 19 26V21H14C13.45 21 13 20.55 13 20C13 19.45 13.45 19 14 19H19V14C19 13.45 19.45 13 20 13C20.55 13 21 13.45 21 14V19H26C26.55 19 27 19.45 27 20C27 20.55 26.55 21 26 21Z"
                                fill="white"
                              />
                            </g>
                            <defs>
                              <clipPath id="clip0_4427_9171">
                                <rect
                                  width="24"
                                  height="24"
                                  fill="white"
                                  transform="translate(8 8)"
                                />
                              </clipPath>
                            </defs>
                          </svg>
                        </button>
                      </div>
                    </div>
                    <div className="flex justify-between gap-x-4">
                      <div>Anak Anak</div>
                      <div className="flex flex-row gap-x-5">
                        <button>
                          <svg
                            width="40"
                            height="40"
                            viewBox="0 0 40 40"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <rect
                              width="40"
                              height="40"
                              rx="8"
                              fill="#D9D9D9"
                            />
                            <g clip-path="url(#clip0_4427_9165)">
                              <path
                                fill-rule="evenodd"
                                clip-rule="evenodd"
                                d="M27 21H13C12.45 21 12 20.55 12 20C12 19.45 12.45 19 13 19H27C27.55 19 28 19.45 28 20C28 20.55 27.55 21 27 21Z"
                                fill="#999999"
                              />
                            </g>
                            <defs>
                              <clipPath id="clip0_4427_9165">
                                <rect
                                  width="24"
                                  height="24"
                                  fill="white"
                                  transform="translate(8 8)"
                                />
                              </clipPath>
                            </defs>
                          </svg>
                        </button>
                        <span className="text-lg font-semibold flex items-center">
                          1
                        </span>
                        <button>
                          <svg
                            width="40"
                            height="40"
                            viewBox="0 0 40 40"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <rect
                              width="40"
                              height="40"
                              rx="8"
                              fill="#175399"
                            />
                            <g clip-path="url(#clip0_4427_9171)">
                              <path
                                d="M26 21H21V26C21 26.55 20.55 27 20 27C19.45 27 19 26.55 19 26V21H14C13.45 21 13 20.55 13 20C13 19.45 13.45 19 14 19H19V14C19 13.45 19.45 13 20 13C20.55 13 21 13.45 21 14V19H26C26.55 19 27 19.45 27 20C27 20.55 26.55 21 26 21Z"
                                fill="white"
                              />
                            </g>
                            <defs>
                              <clipPath id="clip0_4427_9171">
                                <rect
                                  width="24"
                                  height="24"
                                  fill="white"
                                  transform="translate(8 8)"
                                />
                              </clipPath>
                            </defs>
                          </svg>
                        </button>
                      </div>
                    </div>
                  </div>
                  <DialogFooter className="sm:justify-start">
                    <DialogClose asChild>
                      <Button
                        type="button"
                        className="flex w-full bg-blue-600 text-white hover:bg-blue-500"
                        variant="secondary"
                      >
                        Simpan
                      </Button>
                    </DialogClose>
                  </DialogFooter>
                </DialogContent>
              </Dialog>
            </div>
          </div>
        </div>
        <div className="flex justify-end">
          <button className="px-6 py-3 bg-blue-600 text-white rounded-lg focus:outline-none flex items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 mr-2"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M3 10h3l3 9 3-18 3 12h3"
              />
            </svg>
            Cari Ferry
          </button>
        </div>
      </div>
    </div>
  );
}
