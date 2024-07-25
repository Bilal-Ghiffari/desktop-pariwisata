"use client";

import Footers from "@/app/components/containers/footers";
import NavBar from "@/app/components/containers/navbar";
import { Alert, AlertDescription } from "@/components/ui/alert";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Separator } from "@/components/ui/separator";
import { RootState } from "@/lib/store";
import { AlertCircle } from "lucide-react";
import Image from "next/image";
import * as React from "react";
import { useSelector } from "react-redux";

interface IDetailTicketProps {}

// grid md:grid-cols-2  sm:grid-cols-1
const DetailTicket: React.FunctionComponent<IDetailTicketProps> = (props) => {
  const state = useSelector((state: RootState) => state.boatFilter);
  return (
    <>
      <div className="container mx-auto h-screen">
        <NavBar />
        <div className="flex flex-row gap-x-5 mt-20">
          <div className="w-1/2 gap-x-10">
            <div className="p-8 flex flex-col max-h-min bg-white shadow-lg rounded-[30px]">
              <div className="flex justify-between">
                <div className="flex items-center">
                  <h3 className="text-xl text-[#909090]">bl34734 - Regular</h3>
                </div>
                <div className="flex flex-row items-center gap-x-3">
                  <Image
                    height={80}
                    width={80}
                    src="/images/Blue Water Express 1.png"
                    alt=""
                  />
                  <h3 className="font-bold">Blue Water Express</h3>
                </div>
              </div>
              <div className="flex flex-col gap-y-2 justify-center w-full">
                <div className="flex flex-row items-center gap-x-3">
                  <div className="flex items-center gap-[30px]">
                    <div className="flex flex-col gap-[2px] text-center min-w-max">
                      <p>Senin, 1 Juli 2024</p>
                      <p className="font-bold text-lg">09:00</p>
                      <p className="text-sm text-gray-400/80">
                        Sanur, Denpasar
                      </p>
                    </div>
                    <div className="space-y-2">
                      <svg
                        className="w-full"
                        height="6"
                        viewBox="0 0 542 6"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M0.333333 3C0.333333 4.47276 1.52724 5.66667 3 5.66667C4.47276 5.66667 5.66667 4.47276 5.66667 3C5.66667 1.52724 4.47276 0.333333 3 0.333333C1.52724 0.333333 0.333333 1.52724 0.333333 3ZM536.333 3C536.333 4.47276 537.527 5.66667 539 5.66667C540.473 5.66667 541.667 4.47276 541.667 3C541.667 1.52724 540.473 0.333333 539 0.333333C537.527 0.333333 536.333 1.52724 536.333 3ZM3 3.5H539V2.5H3V3.5Z"
                          fill="#808080"
                          fill-opacity="0.75"
                        />
                      </svg>
                      <p className="text-[13px] text-gray-400/80 text-center">
                        45 menit
                      </p>
                    </div>
                    <div className="flex flex-col gap-[2px] text-center min-w-max">
                      <p>Senin, 1 Juli 2024</p>
                      <p className="font-bold text-lg">10:00</p>
                      <p className="text-sm text-gray-400/80">
                        Nusanopeninda, Lombok
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <Alert variant="warning" className="mt-10">
                <div className="flex items-center gap-x-2">
                  <AlertCircle className="h-4 w-4" />
                  <AlertDescription className="">
                    Masuk ke pelabuhan ( Check-In) sebelum jam 10:00
                  </AlertDescription>
                </div>
              </Alert>
            </div>
          </div>
          <div className="w-1/2">
            <div className="bg-white shadow-lg rounded-[30px] p-8 space-y-4">
              <Carousel
                orientation="vertical"
                opts={{ align: "start", loop: true }}
              >
                <CarouselContent className="h-[350px]">
                  {Array.from({ length: state.passeger }).map((_, index) => (
                    <CarouselItem key={index} className="md:basis-1/2">
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
