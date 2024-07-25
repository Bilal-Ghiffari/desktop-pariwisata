"use client";

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Separator } from "@/components/ui/separator";
import { RootState } from "@/lib/store";
import { savePassagerDetail } from "@/services/passeger-detail/actions";
import { usePassengerContext } from "@/services/passeger-detail/PassengerContext";
import { ActionResult } from "@/services/passeger-detail/type.types";
import * as React from "react";
import { useFormState } from "react-dom";
import { useSelector } from "react-redux";

interface IPassegerInputProps {
  id: number;
  type: string;
}

const initialState: ActionResult = {
  errorTitle: null,
  errorDesc: [],
};

const AllCountry = [
  { label: "Indonesia", value: "indonesia" },
  { label: "Jamaica", value: "jamaica" },
  { label: "Amerika", value: "amerika" },
];

const PassegerInput: React.FunctionComponent<IPassegerInputProps> = ({
  id,
  type,
}) => {
  const { isSwitch, setCountry, country, passengerTypes, handleTypeChange } =
    usePassengerContext();
  const { passeger } = useSelector((state: RootState) => state);

  return (
    <div className="">
      <div className="flex flex-col space-x-2 border border-gray-200">
        <div>
          <p className="p-5 font-semibold">
            Penumpang {id + 1} ({type})
          </p>
          <Separator className="" />
        </div>
        <div className="p-8 space-y-3">
          <div className="flex flex-col gap-y-4">
            <input
              type="text"
              className="px-[16px] py-4 rounded-[8px] h-12 border border-[#999999] focus:outline-none"
              placeholder="Nama Lengkap"
              defaultValue={isSwitch && id === 0 ? passeger.fullname ?? "" : ""}
              name="fullname"
            />
          </div>
          <div className="flex flex-row gap-x-2">
            <Select onValueChange={(val) => setCountry(val)}>
              <SelectTrigger className="w-[280px] h-12">
                <SelectValue placeholder="Kewarganegaraan" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  {AllCountry.map((item) => (
                    <SelectItem value={item.value} key={item.value}>
                      {item.label}
                    </SelectItem>
                  ))}
                </SelectGroup>
              </SelectContent>
            </Select>
            {country === "indonesia" ? (
              <input
                type="text"
                className="px-[16px] py-4 h-12 rounded-[8px] border border-[#999999] focus:outline-none"
                placeholder="Nomor Ktp/Nik"
                name="IcNomor"
              />
            ) : (
              <input
                type="text"
                className="px-[16px] py-4 h-12 rounded-[8px] border border-[#999999] focus:outline-none"
                placeholder="Nomor Paspor"
                name="nomorPaspor"
              />
            )}
            <Select
              value={passengerTypes[id]}
              onValueChange={(val) => handleTypeChange(id, val)}
            >
              <SelectTrigger className="w-[180px] h-12">
                <SelectValue placeholder="Tipe Penumpang" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  {type === "Dewasa" ? (
                    <SelectItem value="dewasa">Dewasa</SelectItem>
                  ) : (
                    <SelectItem value="bayi">Bayi</SelectItem>
                  )}
                </SelectGroup>
              </SelectContent>
            </Select>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PassegerInput;
