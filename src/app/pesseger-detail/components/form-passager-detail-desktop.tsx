"use client";

import { Input } from "@/components/ui/input";
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

const AllTypeId = [
  { label: "KTP", value: "ktp" },
  { label: "Passpor", value: "passpor" },
];

const AllCountry = [
  { label: "Palestine", value: "palestine" },
  { label: "Jamaica", value: "jamaica" },
  { label: "Las Vegas", value: "las vegas" },
  { label: "Arab Saudi", value: "arab saudi" },
  { label: "Indonesia Raya", value: "indonesia" },
  { label: "Timor Leste", value: "timor leste" },
  { label: "Papua Nugini", value: "papua nugini" },
];

const PassegerInput: React.FunctionComponent<IPassegerInputProps> = ({
  id,
  type,
}) => {
  const { isSwitch, setTypeID, typeId, passengerTypes, handleTypeChange } =
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
            <Select onValueChange={(val) => setTypeID(id, val)}>
              <SelectTrigger className="px-[16px] py-3 h-full">
                <SelectValue placeholder="Tipe ID" />
              </SelectTrigger>
              <SelectContent>
                {AllTypeId.map((item, i) => (
                  <SelectItem key={item.label + i} value={item.value}>
                    {item.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>

            <Input
              className="px-[16px] py-3 rounded-[8px] border"
              placeholder={typeId[id] === "ktp" ? "Nomor Indentitas" : "Paspor"}
              name={typeId[id] === "ktp" ? "nomorIndentitas" : "noPaspor"}
              type="number"
              id={typeId[id] === "ktp" ? "nomorIndentitas" : "noPaspor"}
              required
            />

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
          <div className="flex flex-row gap-4">
            <Select onValueChange={(val) => setTypeID(id, val)}>
              <SelectTrigger className="px-[16px] py-3 h-full">
                <SelectValue placeholder="Kewarganegaraan" />
              </SelectTrigger>
              <SelectContent>
                {AllCountry.map((item, i) => (
                  <SelectItem key={item.label + i} value={item.value}>
                    {item.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PassegerInput;
