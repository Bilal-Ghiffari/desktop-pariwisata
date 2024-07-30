import { Button } from "@/components/ui/button";
import { Form } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import { savePassagerDetail } from "@/services/passeger-detail/actions";
import { ActionResult } from "@/services/passeger-detail/type.types";
import * as React from "react";
import { useFormState } from "react-dom";

interface IFormPassagerDetailMobileProps {}

const initialState: ActionResult = {
  errorDesc: [],
  errorTitle: "",
};

const FormPassagerDetailMobile: React.FunctionComponent<
  IFormPassagerDetailMobileProps
> = (props) => {
  const [state, formAction] = useFormState(savePassagerDetail, initialState);
  return (
    <form action={formAction} className="w-full space-y-6">
      <div className="flex gap-5">
        <div className="flex flex-col gap-2 w-full">
          <Label htmlFor="typeid">Tipe ID</Label>
          <Select>
            <SelectTrigger className="px-[16px] py-3 h-full">
              <SelectValue placeholder="Tipe ID" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="light">KTP</SelectItem>
              <SelectItem value="dark">Passpor</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <div className="flex flex-col gap-2 w-full">
          <Label htmlFor="nomorIndentitas">No.ID</Label>
          <Input
            className="px-[16px] py-3 rounded-[8px] border"
            placeholder="Nomor Indentitas"
            name="nomorIndentitas"
            type="number"
            id="nomorIndentitas"
            required
          />
        </div>
      </div>
      <div className="flex flex-col gap-2 w-full">
        <Label htmlFor="fullName">Nama Lengkap</Label>
        <Input
          className="px-[16px] py-3 rounded-[8px] border"
          placeholder="Masukan nama lengkap sesuai ID"
          name="fullName"
          id="fullName"
          required
        />
      </div>
      <div className="flex flex-col gap-2 w-full">
        <Label htmlFor="tipePenumpang">Tipe Penumpang</Label>
        <Select>
          <SelectTrigger className="px-[16px] py-3 h-full">
            <SelectValue placeholder="Pilih Tipe Penumpang" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="light">Dewasa</SelectItem>
            <SelectItem value="dark">Anak Anak</SelectItem>
          </SelectContent>
        </Select>
      </div>
      <Button className="py-3 bg-[#175399] hover:bg-[#356499] text-center font-bold shadow-lg rounded-full text-sm w-full">
        Simpan
      </Button>
    </form>
  );
};

export default FormPassagerDetailMobile;
