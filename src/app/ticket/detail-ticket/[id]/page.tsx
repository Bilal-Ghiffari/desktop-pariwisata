"use client";

import Footers from "@/app/components/containers/footers";
import NavBar from "@/app/components/containers/navbar";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

import { Separator } from "@/components/ui/separator";
import { RootState } from "@/lib/store";
import { cn } from "@/lib/utils";
import { AlertCircle, ArrowLeft, ChevronRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import * as React from "react";
import { useSelector } from "react-redux";

interface IDetailTicketProps {}

// grid md:grid-cols-2  sm:grid-cols-1
const DetailTicket: React.FunctionComponent<IDetailTicketProps> = (props) => {
  const state = useSelector((state: RootState) => state.boatFilter);
  console.log(state.passeger);
  return (
    <>
      <div className="md:hidden block z-10 bg-gradient-to-r from-cyan-500 h-max to-blue-500 w-full shadow-lg  sticky top-0">
        <div className="py-4 pl-4">
          <div className="flex flex-row items-center">
            <Link href="/">
              <ArrowLeft className="w-6 h-6" />
            </Link>
            <h3 className="font-semibold pl-5 text-lg text-center">
              Ticket Detail
            </h3>
          </div>
        </div>
      </div>
      <div className="md:container px-4 md:mx-auto mx-0 mt-5">
        <NavBar className="md:flex hidden" />

        <div className="flex-row gap-x-10 md:mt-20 mt-7 flex">
          <div className="md:w-1/2 w-full gap-x-10">
            <div className="md:p-8 p-4 flex flex-col max-h-min bg-white shadow-lg space-y-3 md:space-y-0 rounded-[30px]">
              <div className="md:hidden block">
                <Image
                  height={80}
                  width={80}
                  src="/images/Blue Water Express 1.png"
                  alt=""
                />
              </div>
              <div className="flex justify-between">
                <div className="flex items-center">
                  <h3 className="md:text-xl text-sm text-[#909090]">
                    bl34734 - Regular
                  </h3>
                </div>
                <div className="md:hidden flex">
                  <h3 className="font-bold">Blue Water Express</h3>
                </div>
                <div className="md:flex hidden flex-row items-center gap-x-3">
                  <Image
                    height={80}
                    width={80}
                    src="/images/Blue Water Express 1.png"
                    alt=""
                    className=""
                  />
                  <h3 className="font-bold">Blue Water Express</h3>
                </div>
              </div>
              <div className="flex flex-col gap-y-2 justify-center w-full">
                <div className="flex flex-row items-center gap-x-3 my-5">
                  <div className="flex items-center gap-[30px]">
                    <div className="flex flex-col gap-[2px] text-center min-w-max">
                      <p>Senin, 1 Juli 2024</p>
                      <p className="font-bold text-lg">09:00</p>
                      <p className="text-sm text-gray-400/80">Sanur</p>
                    </div>
                    <div className="space-y-2">
                      <svg
                        className="w-full md:block hidden"
                        height="6"
                        viewBox="0 0 542 6"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M0.333333 3C0.333333 4.47276 1.52724 5.66667 3 5.66667C4.47276 5.66667 5.66667 4.47276 5.66667 3C5.66667 1.52724 4.47276 0.333333 3 0.333333C1.52724 0.333333 0.333333 1.52724 0.333333 3ZM536.333 3C536.333 4.47276 537.527 5.66667 539 5.66667C540.473 5.66667 541.667 4.47276 541.667 3C541.667 1.52724 540.473 0.333333 539 0.333333C537.527 0.333333 536.333 1.52724 536.333 3ZM3 3.5H539V2.5H3V3.5Z"
                          fill="#808080"
                          fillOpacity="0.75"
                        />
                      </svg>
                      <ChevronRight className="md:hidden block w-6 h-6" />
                      <p className="text-[13px] md:block hidden text-gray-400/80 text-center">
                        45 menit
                      </p>
                    </div>
                    <div className="flex flex-col gap-[2px] text-center min-w-max">
                      <p>Senin, 1 Juli 2024</p>
                      <p className="font-bold text-lg">10:00</p>
                      <p className="text-sm text-gray-400/80">Nusanopeninda</p>
                    </div>
                  </div>
                </div>
              </div>
              <Alert variant="warning" className="md:p-3 py-2 px-1">
                <div className="flex items-center gap-x-2">
                  <AlertCircle className="h-4 w-4" />
                  <AlertDescription className="text-[13px]">
                    Masuk ke pelabuhan ( Check-In) sebelum jam 10:00
                  </AlertDescription>
                </div>
              </Alert>
            </div>
            <div className="my-10">
              <h3 className="font-semibold text-xl text-[#175399]">
                Detail Harga
              </h3>
              <div className="flex flex-col gap-y-5 mt-5">
                <div className="md:bg-gray-300/20 bg-white md:rounded-xl shadow-lg md:p-7 p-4 rounded-xl md:mb-0 mb-8">
                  <div className="flex justify-between">
                    <div className="space-y-4 text-[#909090] md:text-lg text-sm">
                      <h2>Harga Tiket</h2>
                      <h2>Jumlah Tiket</h2>
                      <h2>Biaya Admin</h2>
                      <h2>Biaya Applikasi</h2>
                    </div>
                    <div className="space-y-4 font-semibold md:text-lg text-sm">
                      <h2>IDR 150.0000</h2>
                      <h2>1</h2>
                      <h2>IDR 5.0000</h2>
                      <h2>IDR 1.000</h2>
                    </div>
                  </div>
                  <div className="mt-4 text-[#909090] md:text-lg text-sm">
                    Ticket Reguler, Sanur - Nusapenida, ( Dewasa 1x )
                  </div>
                  <Separator className="my-5 bg-[#dadada]" />
                  <div className="flex justify-between">
                    <div>
                      <h2 className="text-[#909090] md:text-lg text-sm">
                        Total Payment
                      </h2>
                    </div>
                    <div>
                      <h2 className="text-[#FF4242] md:text-lg text-sm font-bold">
                        IDR 157.000
                      </h2>
                    </div>
                  </div>
                </div>
              </div>
              <h3 className="font-semibold text-xl text-[#175399] md:hidden block">
                Detail Penumpang
              </h3>
              <Carousel>
                <CarouselContent>
                  {Array.from({ length: 2 }).map((_, index) => (
                    <CarouselItem key={index} className="basis-10/12">
                      <div className="md:hidden bg-white shadow-md rounded-xl p-2 flex flex-col my-5 space-y-5">
                        <div className="flex justify-between items-center text-sm">
                          <p className="font-semibold text-lg">
                            Penumpang {index + 1}
                          </p>
                        </div>
                        <div className="flex justify-between items-center my-2">
                          <div>
                            <p className="text-[#C5C5C5] text-[14px]">
                              Nama Lengkap
                            </p>
                            <p className="font-semibold text-[16px]">
                              Bilal Al Ghiffari
                            </p>
                          </div>
                          <div>
                            <p className="text-[#C5C5C5] text-[14px]">No.ID</p>
                            <p className="font-semibold text-[16px]">
                              31453456346464
                            </p>
                          </div>
                        </div>
                      </div>
                    </CarouselItem>
                  ))}
                </CarouselContent>
              </Carousel>
              <div className="mt-5">
                <Dialog>
                  <DialogTrigger asChild>
                    <Button
                      variant="outline"
                      className="w-full md:py-7 py-3 text-[#175399] font-bold rounded-md md:text-lg text-sm"
                    >
                      Tampilkan E-Ticket
                    </Button>
                  </DialogTrigger>
                  <DialogContent className="h-full p-4">
                    <Carousel className="max-w-sm md:max-w-md">
                      <CarouselContent>
                        {Array.from({ length: state.passeger }).map(
                          (_, index) => (
                            <CarouselItem
                              key={index}
                              className={cn([
                                state.passeger > 1 ? "basis-11/12" : "",
                              ])}
                            >
                              <div className="p-4 mt-8 bg-gradient-to-r max-w-max min-h-max from-[#3079D9] to-[#1E73E4] rounded-xl">
                                <div className="flex justify-between text-[#FEFEFF]">
                                  <div className="flex flex-col gap-y-4">
                                    <p className="font-bold">Nusapenida</p>
                                    <p className="font-semibold text-[13px]">
                                      Senin, 1 Juli 2024
                                    </p>
                                  </div>
                                  <div className="flex flex-col gap-y-4">
                                    <p className="font-semibold">15h 40m</p>
                                    <p className="">
                                      <svg
                                        width="73"
                                        height="9"
                                        viewBox="0 0 73 9"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                      >
                                        <circle
                                          cx="68.4998"
                                          cy="4.38772"
                                          r="3.5"
                                          transform="rotate(179.799 68.4998 4.38772)"
                                          stroke="#D9E3E8"
                                        />
                                        <line
                                          x1="64.5016"
                                          y1="4.90173"
                                          x2="36.5018"
                                          y2="4.99998"
                                          stroke="#D9E3E8"
                                          stroke-dasharray="4 4"
                                        />
                                        <line
                                          x1="36.5018"
                                          y1="5"
                                          x2="8.50194"
                                          y2="5.09825"
                                          stroke="#D9E3E8"
                                          stroke-dasharray="4 4"
                                        />
                                        <circle
                                          cx="4.50021"
                                          cy="4.61227"
                                          r="4"
                                          transform="rotate(179.799 4.50021 4.61227)"
                                          fill="#D9E3E8"
                                        />
                                      </svg>
                                    </p>
                                  </div>
                                  <div className="flex flex-col gap-y-4">
                                    <p className="font-bold">Sanur</p>
                                    <p className="font-semibold text-[13px]">
                                      Senin, 1 Juli 2024
                                    </p>
                                  </div>
                                </div>
                                <div className="p-4 bg-[#FFFFFF] rounded-xl mt-5 max-w-max">
                                  <div className="flex flex-row gap-x-4 items-center">
                                    <div className="flex items-center">
                                      <img
                                        src="/images/Blue Water Express 1.png"
                                        className="w-14 h-14"
                                        alt=""
                                      />
                                    </div>
                                    <h3 className="font-bold text-[16px]">
                                      Blue Water Express
                                    </h3>
                                  </div>
                                  <Separator />
                                  <div className="flex flex-wrap gap-5 mt-5">
                                    <div className="">
                                      <h3 className="text-[#81878D] text-[15px]">
                                        Boarding Time
                                      </h3>
                                      <p className="font-bold">09:00</p>
                                    </div>
                                    <div>
                                      <h3 className="text-[#81878D] text-[15px]">
                                        Arrive
                                      </h3>
                                      <p className="font-bold">09:00</p>
                                    </div>
                                    <div>
                                      <h3 className="text-[#81878D] text-[15px]">
                                        Class
                                      </h3>
                                      <p className="font-bold">Regular</p>
                                    </div>
                                    <div>
                                      <h3 className="text-[#81878D] text-[15px]">
                                        Name
                                      </h3>
                                      <p className="font-bold">
                                        Bilal Al Ghiffari
                                      </p>
                                    </div>
                                    <div>
                                      <h3 className="text-[#81878D] text-[15px]">
                                        No.ID
                                      </h3>
                                      <p className="font-bold">
                                        313423423423324232
                                      </p>
                                    </div>
                                  </div>
                                  <h2 className="text-center text-lg mt-10 font-semibold text-gray-400">
                                    Pindai Kode ini pada saat Masuk
                                  </h2>
                                  <div className="mt-7 flex justify-center">
                                    <img
                                      src="/images/barcode.png"
                                      className="w-40 h-40"
                                    />
                                  </div>
                                </div>
                              </div>
                            </CarouselItem>
                          )
                        )}
                      </CarouselContent>
                    </Carousel>
                  </DialogContent>
                </Dialog>
              </div>
            </div>
          </div>
          <div className="w-1/2 md:block hidden">
            <div className="bg-white shadow-lg rounded-[30px] p-8 space-y-4 mb-20">
              <Carousel orientation="vertical" className="">
                <CarouselContent
                  className={cn([
                    state.passeger > 1 ? "h-[530px]" : "max-h-max",
                  ])}
                >
                  {Array.from({ length: state.passeger }).map((_, index) => (
                    <CarouselItem key={index} className="md:basis-1/3">
                      <div className="bg-gray-200/40 rounded-lg p-7">
                        <h2>Penumpang {index + 1}</h2>
                        <Separator className="my-4" />
                        <div className="flex justify-between">
                          <div>
                            <h4 className="text-gray-400/50">Nama Lengkap</h4>
                            <h2>Bilal Al Ghiffari</h2>
                          </div>
                          <div>
                            <h4 className="text-gray-400/50">No ID</h4>
                            <h2>3294792359823758972357</h2>
                          </div>
                        </div>
                      </div>
                    </CarouselItem>
                  ))}
                </CarouselContent>
                <CarouselPrevious />
                <CarouselNext />
              </Carousel>
            </div>
          </div>
        </div>
      </div>
      <Footers />
    </>
  );
};

export default DetailTicket;
