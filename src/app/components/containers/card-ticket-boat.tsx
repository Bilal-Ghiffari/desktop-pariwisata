import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { useRouter } from "next/navigation";
import * as React from "react";

interface ICardTicketBoatProps {}

const CardTicketBoat: React.FunctionComponent<ICardTicketBoatProps> = (
  props
) => {
  const router = useRouter();
  return (
    <div className="bg-white p-6 rounded-[24px] shadow-sm">
      <div className="flex flex-row gap-x-5">
        <div className="flex flex-col gap-y-2 w-1/2">
          <div className="flex flex-row items-center gap-x-3">
            <Image
              width={80}
              height={80}
              src="/images/Blue Water Express 1.png"
              alt="image boats"
            />
            <h3 className="font-bold">Blue Water Express</h3>
          </div>
          <div className="flex flex-row gap-x-2 items-center">
            <span className="text-sm text-gray-400/80">BL2 32452395</span>
            <Badge>Regular</Badge>
          </div>
        </div>
        <div className="flex flex-col gap-y-2 justify-center w-full">
          <div className="flex flex-row items-center gap-x-3">
            <div className="flex items-center gap-[30px]">
              <div className="flex flex-col gap-[2px] text-center">
                <p className="font-bold text-lg">09:00</p>
                <p className="text-sm text-gray-400/80">Sanur, Denpasar</p>
              </div>
              <div className="space-y-2">
                <Image
                  width={1625}
                  height={17}
                  className="w-full h-full"
                  src="/images/Vector 1.png"
                  alt="icon"
                />
                <p className="text-[13px] text-gray-400/80 text-center">
                  45 menit
                </p>
              </div>
              <div className="flex flex-col gap-[2px] text-center">
                <p className="font-bold text-lg">10:00</p>
                <p className="text-sm text-gray-400/80">
                  Nusanopeninda, Lombok
                </p>
              </div>
            </div>
          </div>
          {/* <div className="flex flex-row gap-x-2 items-center"></div> */}
        </div>
      </div>
      <div className="flex justify-between mt-10">
        <div>
          <p className="text-gray-300 text-sm">Total Harga</p>
          <h3 className="text-[#D61355] text-[20px] font-bold">IDR 150.000</h3>
        </div>
        <Button onClick={() => router.replace("/pesseger-detail")}>
          Pilih Tiket
        </Button>
      </div>
    </div>
  );
};

export default CardTicketBoat;
