"use client";

import * as React from "react";
import { AlertCircle } from "lucide-react";
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
  return (
    <div className="container mx-auto">
      <NavBar />
      <div className="grid grid-rows-1 grid-cols-2 gap-x-10 mb-10">
        <div className="grid grid-rows-1 gap-y-5 h-min">
          <div className="p-8 flex flex-col  bg-white rounded-[30px] mb-20 w-2/3">
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
          <form action="" className="w-4/5">
            {passengers.map((type, id) => (
              <PassegerInput id={id} key={id} type={type} />
            ))}
            <div className="flex justify-center mt-5">
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
            <Button className="w-full mt-5" disabled={!isChecked}>
              Bayar Sekarang
            </Button>
          </form>
        </div>
        <div className="">
          <div className="p-8 flex flex-col bg-white shadow-lg rounded-[30px]">
            <h3>Detail Keberangkatan</h3>
            <div className="flex justify-between">
              <div className="flex items-center">
                <h3 className="text-xl">bl34734 - Reguler</h3>
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
                    <p className="text-sm text-gray-400/80">Sanur, Denpasar</p>
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
            <div className="flex justify-between mt-8">
              <p className="text-lg">Total Harga</p>
              <h2 className="text-xl text-[#D61355] font-semibold">
                IDR 84.000
              </h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PassegerDetails;
