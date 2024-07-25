"use client";

import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { ChevronLast, ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import * as React from "react";

interface ICardTicketProps {
  returnDate?: boolean;
  status: "success" | "pending" | "cancel";
}

const CardTicket: React.FunctionComponent<ICardTicketProps> = ({
  returnDate,
  status,
}) => {
  const router = useRouter();
  return (
    <div
      className="bg-white shadow-md rounded-xl p-7 cursor-pointer"
      onClick={() => router.push("/ticket/detail-ticket/32y48y234y234")}
    >
      <div className="flex justify-between">
        <div className="">
          <Image
            src="/images/Blue Water Express 1.png"
            width={80}
            height={80}
            alt=""
          />
        </div>
        <div className="flex items-center">
          {status === "success" && <Badge variant="success">Lunas</Badge>}
          {status === "pending" && <Badge variant="pending">Menunggu</Badge>}
          {status === "cancel" && <Badge variant="destructive">Cancel</Badge>}
        </div>
      </div>
      <div className="">Kode Pemesanan: YQT5A7</div>
      <Separator className="my-5" />
      <div className="flex justify-between">
        <div>
          <h2 className="text-lg">Gilimanuk</h2>
          <h2 className="font-semibold text-lg">07:00</h2>
          <h2 className="text-sm">13 April 2024</h2>
        </div>
        <div className="flex items-center">
          {returnDate ? (
            <ChevronLeft className="w-5 h-5" />
          ) : (
            <ChevronRight className="h-5 w-5" />
          )}
        </div>
        <div>
          <h2 className="text-lg">Nusapeninda</h2>
          <h2 className="text-end font-semibold text-lg">19:05</h2>
          <h2 className="text-sm text-end">20 April 2024</h2>
        </div>
      </div>
    </div>
  );
};

export default CardTicket;
