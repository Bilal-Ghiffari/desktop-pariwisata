"use client";

import * as React from "react";
import {
  AlertCircle,
  ArrowDown,
  ArrowLeft,
  ArrowRight,
  ChevronDown,
  Dot,
} from "lucide-react";
import NavBar from "../components/containers/navbar";
import { Separator } from "@/components/ui/separator";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Switch } from "@/components/ui/switch";
import { useSelector } from "react-redux";
import { RootState } from "@/lib/store";
import PassegerInput from "./form/form-passager-detail";
import { usePassengerContext } from "@/services/passeger-detail/PassengerContext";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import Image from "next/image";
import { useRouter } from "next/navigation";
import Footers from "../components/containers/footers";
import Link from "next/link";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";

interface IPassegerDetailsProps {}

const AllCountry = [
  { label: "Indonesia", value: "indonesia" },
  { label: "Jamaica", value: "jamaica" },
  { label: "Amerika", value: "amerika" },
];

const PassegerDetails: React.FunctionComponent<IPassegerDetailsProps> = (
  props
) => {
  const { isSwitch, handleSwitchChange, passengers } = usePassengerContext();
  const [isChecked, isSetIsChecked] = React.useState<boolean>(false);
  const router = useRouter();

  return (
    <>
      <div className="md:hidden block z-10 bg-gradient-to-r from-cyan-500 h-screen to-blue-500 w-full shadow-lg  sticky top-0">
        <div className="py-4 pl-4">
          <div className="flex flex-row items-center">
            <Link href="/">
              <ArrowLeft className="w-6 h-6" />
            </Link>
            <h3 className="font-semibold pl-5 text-lg text-center">
              Selesaikan Pesananmu
            </h3>
          </div>
          <Carousel>
            <CarouselContent>
              {Array.from({ length: 2 }).map((_, index) => (
                <CarouselItem key={index} className="basis-10/12">
                  <div className="md:hidden bg-white rounded-xl p-3 flex flex-col mt-10 space-y-3">
                    <div className="text-[#C5C5C5] flex justify-between items-center text-sm">
                      <p>Senin, 29 Juli 2024</p>
                      <ChevronDown className="w-6 h-6 text-black" />
                    </div>
                    <div className="flex justify-between items-center">
                      <p>Sanur</p>
                      <ArrowRight className="w-5 h-5" />
                      <p>Nusapeninda</p>
                    </div>
                    <div className="flex flex-row gap-x-4 text-sm text-[#C5C5C5]">
                      <p>BLUE EXPRESS</p>
                      <Dot />
                      <p>REGULAR</p>
                    </div>
                    <p className="text-sm text-[#C5C5C5]">3 Dewasa, 1 Bayi</p>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>
        </div>
        <div className="bg-white w-full transform rounded-t-xl z-20 flex-1 p-4 h-screen">
          <h2 className="text-lg font-semibold mb-5">Detail Pemesanan</h2>
          <div className="p-8 flex flex-col border rounded-xl mb-20 w-full">
            <div className="space-y-5">
              <div className="flex flex-col gap-y-2">
                <span className="text-gray-400/45">Full Name</span>
                <h3 className="font-semibold">Bilal AL Ghiffari</h3>
              </div>
              <div className="flex flex-col gap-y-2">
                <span className="text-gray-400/45">Email</span>
                <h3 className="font-semibold">bilalalghiffari53@gmail.com</h3>
              </div>
              <div className="flex flex-col gap-y-2">
                <span className="text-gray-400/45">No Telepon</span>
                <h3 className="font-semibold">08242374235235</h3>
              </div>
            </div>
            <div className="flex justify-between mt-10">
              <p className="text-gray-400/45">Tambahkan sebagai penumpang</p>
              <Switch
                id="add as passenger"
                checked={isSwitch}
                onCheckedChange={handleSwitchChange}
              />
            </div>
          </div>
        </div>
      </div>
      <div className="container mx-auto">
        <NavBar className="md:flex hidden" />

        {/* <div className="grid grid-cols-2 gap-x-10 my-10">
          <div className="grid grid-rows-1 gap-y-5 h-min">
            <div className="p-8 flex flex-col bg-white shadow-lg rounded-[30px] mb-20 w-2/3">
              <div className="space-y-5">
                <div className="flex flex-col gap-y-2">
                  <span className="text-gray-400/45">Full Name</span>
                  <h3 className="font-semibold">Bilal AL Ghiffari</h3>
                </div>
                <div className="flex flex-col gap-y-2">
                  <span className="text-gray-400/45">Email</span>
                  <h3 className="font-semibold">bilalalghiffari53@gmail.com</h3>
                </div>
                <div className="flex flex-col gap-y-2">
                  <span className="text-gray-400/45">No Telepon</span>
                  <h3 className="font-semibold">08242374235235</h3>
                </div>
              </div>
              <div className="flex justify-between mt-10">
                <p className="text-gray-400/45">Tambahkan sebagai penumpang</p>
                <Switch
                  id="add as passenger"
                  checked={isSwitch}
                  onCheckedChange={handleSwitchChange}
                />
              </div>
            </div>
            <form className="w-4/5 space-y-10">
              {passengers.map((type, id) => (
                <PassegerInput key={id} type={type} id={id} />
              ))}
              <div className="flex justify-center">
                <div className="flex items-center space-x-2">
                  <Checkbox
                    id="terms"
                    checked={isChecked}
                    onCheckedChange={() => isSetIsChecked(!isChecked)}
                  />
                  <label
                    htmlFor="terms"
                    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 text-gray-400"
                  >
                    Saya menyetujui Syarat dan Ketentuan yang berlaku
                  </label>
                </div>
              </div>
              <Button
                onClick={() => router.replace("/checkout")}
                className="w-full py-7 bg-[#175399] hover:bg-[#356499] text-white font-bold shadow-lg rounded-full text-lg"
                type="button"
                disabled={!isChecked}
              >
                Lanjut Pembayaran
              </Button>
            </form>
          </div>
          <div className="bg-gray-200/20 p-8 rounded-lg h-max">
            <div className="p-8 flex flex-col bg-white rounded-[30px]">
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
                        className="w-full h-full"
                        viewBox="0 0 155 8"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M8 4L147 4.00001"
                          stroke="#8E949D"
                          strokeDasharray="2 2"
                        />
                        <circle cx="4" cy="4" r="3.5" stroke="#EDEDED" />
                        <circle cx="4" cy="4" r="2" fill="#121926" />
                        <circle cx="151" cy="4" r="3.5" stroke="#EDEDED" />
                        <circle cx="151" cy="4" r="2" fill="#121926" />
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
              <div className="flex justify-between mt-8">
                <p className="text-lg">Harga</p>
                <h2 className="text-xl text-[#D61355] font-semibold">
                  IDR 150.000
                </h2>
              </div>
            </div>
            <div className="p-8 mt-10">
              <h2 className="text-xl mb-10">Order Summary</h2>
              <div className="flex justify-between">
                <div className="space-y-4 text-[#909090] text-lg">
                  <h2>Harga Tiket</h2>
                  <h2>Jumlah Tiket</h2>
                  <h2>Biaya Admin</h2>
                  <h2>Biaya Applikasi</h2>
                </div>
                <div className="space-y-4 font-semibold text-lg">
                  <h2>IDR 150.000</h2>
                  <h2>1</h2>
                  <h2>IDR 5.000</h2>
                  <h2>IDR 2.000</h2>
                </div>
              </div>
              <Separator className="my-5 bg-[#c5c5c5]" />
              <div className="flex justify-between">
                <div>
                  <h2 className="text-[#909090] text-lg">Total Payment</h2>
                </div>
                <div>
                  <h2 className="text-[#FF4242] text-lg font-bold">
                    IDR 157.000
                  </h2>
                </div>
              </div>
            </div>
          </div>
        </div> */}
      </div>
      <Footers />
    </>
  );
};

export default PassegerDetails;
