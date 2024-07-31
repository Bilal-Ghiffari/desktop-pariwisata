"use client";

import { Separator } from "@/components/ui/separator";
import {
  AlertCircle,
  ArrowLeft,
  ArrowRight,
  ChevronDown,
  Dot,
  Pencil,
  SquarePlus,
} from "lucide-react";
import * as React from "react";
import NavBar from "../components/containers/navbar";

import { Drawer, DrawerContent, DrawerTrigger } from "@/components/ui/drawer";

import { Alert, AlertDescription } from "@/components/ui/alert";
import { Button } from "@/components/ui/button";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import { Checkbox } from "@/components/ui/checkbox";
import { Switch } from "@/components/ui/switch";
import { RootState } from "@/lib/store";
import { cn } from "@/lib/utils";
import { usePassengerContext } from "@/services/passeger-detail/PassengerContext";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useSelector } from "react-redux";
import Footers from "../components/containers/footers";
import { IconsSelection } from "../components/containers/form-filters-boat/icons";
import PassegerInput from "./components/form-passager-detail-desktop";
import FormPassagerDetailMobile from "./components/form-passager-detail-mobile";

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
  const { passeger } = useSelector((state: RootState) => state);
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
                  <div className="md:hidden bg-white rounded-xl p-3 flex flex-col mt-10">
                    <div className="text-[#C5C5C5] flex justify-between items-center text-sm">
                      <p>Senin, 29 Juli 2024</p>
                      <Drawer>
                        <DrawerTrigger asChild>
                          <ChevronDown className="w-6 h-6 text-black" />
                        </DrawerTrigger>
                        <DrawerContent className="px-4">
                          <div className="flex flex-col space-y-3">
                            <h3 className="font-semibold">Blue Express</h3>
                            <div className="border p-5 rounded-xl flex flex-row gap-x-10">
                              <div className="flex flex-col space-y-5">
                                <div className="flex flex-col">
                                  <p className="font-semibold">20:00</p>
                                  <p>Sen, 29 Jul</p>
                                </div>
                                <p>10j 37m</p>
                                <div className="flex flex-col">
                                  <p className="font-semibold">20:00</p>
                                  <p>Sen, 29 Jul</p>
                                </div>
                              </div>
                              <svg
                                width="8"
                                height="152"
                                viewBox="0 0 8 152"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  d="M4 2.3295V149.67"
                                  stroke="#006CE5"
                                  stroke-linecap="round"
                                  stroke-dasharray="5 5"
                                />
                                <ellipse
                                  cx="4"
                                  cy="2.3295"
                                  rx="4"
                                  ry="2.3295"
                                  fill="#006CE5"
                                />
                                <ellipse
                                  cx="4"
                                  cy="149.671"
                                  rx="4"
                                  ry="2.3295"
                                  fill="#006CE5"
                                />
                              </svg>

                              <div className="flex flex-col space-y-7">
                                <div className="flex flex-col">
                                  <p className="font-semibold">Sanur</p>
                                </div>
                                <div className="flex flex-row items-center">
                                  <IconsSelection
                                    className="w- h-8"
                                    type="icondeparture"
                                  />
                                  <p>Blue Express</p>
                                </div>
                                <div className="">
                                  <p className="font-semibold">Nusapeninda</p>
                                </div>
                              </div>
                            </div>
                            <h3 className="font-semibold">Detail Harga</h3>
                            <div className="flex justify-between">
                              <h2>Total Harga</h2>
                              <h2 className="font-bold mb-10">IDR. 170.000</h2>
                            </div>
                          </div>
                        </DrawerContent>
                      </Drawer>
                    </div>
                    <div className="flex justify-between items-center my-2">
                      <p>Sanur</p>
                      <ArrowRight className="w-5 h-5" />
                      <p>Nusapeninda</p>
                    </div>
                    <div className="flex flex-row items-end gap-x-4 text-sm text-[#C5C5C5]">
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
        <div className="bg-white w-full rounded-t-xl z-20 flex-1 p-4 max-h-min">
          <h2 className="text-lg font-semibold mb-5">Detail Pemesanan</h2>
          <div className="p-8 flex flex-col border rounded-xl mb-5 w-full">
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
          <h2 className="text-lg font-semibold mb-4">Detail Penumpang</h2>
          <div className="flex flex-col gap-y-5 mb-10">
            {/* {isSwitch && id === 0 ? passeger.fullname ?? "" : ""} */}
            <div
              className={cn([
                "w-full p-4 bg-gray-400/10 rounded-lg flex items-center justify-between",
              ])}
            >
              <div
                className={cn([
                  "flex",
                  isSwitch ? "flex-col space-y-[3px]" : "",
                ])}
              >
                {isSwitch ? (
                  <>
                    <p className="text-[14px] text-[#C5C5C5]">
                      Penumpang 1 Dewasa
                    </p>
                    <h2>Bilal Al Ghiffari</h2>
                    <p className="text-[14px] text-[#C5C5C5]">
                      KTP - 31324234235235
                    </p>
                  </>
                ) : (
                  <h2>Penumpang 1 Dewasa</h2>
                )}
              </div>
              <Drawer>
                <DrawerTrigger asChild>
                  <Pencil className="w-5 h-5" />
                </DrawerTrigger>
                <DrawerContent className="px-4">
                  <h2 className="font-semibold">Informasi Penumpang</h2>
                  <Drawer>
                    <DrawerTrigger asChild>
                      <div className="border p-4 flex flex-row items-center rounded-xl my-5">
                        <SquarePlus className="w-5 h-5 mr-5 text-[#006CE5]" />
                        <p className="font-semibold">Tambah Penumpang baru</p>
                      </div>
                    </DrawerTrigger>
                    <DrawerContent className="px-4">
                      <div className="flex justify-center mb-10 mt-5">
                        <h3 className="font-semibold text-lg text-center">
                          Tambah Penumpang Baru
                        </h3>
                      </div>
                      <div className="flex flex-col gap-y-5 mb-7">
                        <FormPassagerDetailMobile />
                      </div>
                    </DrawerContent>
                  </Drawer>
                </DrawerContent>
              </Drawer>
            </div>
          </div>
          <Button type="button" className="py-3 bg-[#175399] hover:bg-[#356499] text-center font-bold shadow-lg rounded-full text-sm w-full" onClick={() => router.push("/checkout")}>
            Lanjutkan
          </Button>
        </div>
      </div>
      <div className="container mx-auto">
        <NavBar className="md:flex hidden" />

        <div className="grid-cols-2 gap-x-10 my-10 md:grid hidden">
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
        </div>
      </div>
      <Footers />
    </>
  );
};

export default PassegerDetails;
