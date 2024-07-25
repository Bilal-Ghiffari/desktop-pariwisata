"use client";

import * as React from "react";
import NavBar from "../components/containers/navbar";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";

interface ISuccessPaymentProps {}

const SuccessPayment: React.FunctionComponent<ISuccessPaymentProps> = (
  props
) => {
  const router = useRouter();
  return (
    <div className="flex justify-center w-full items-center transform translate-y-1/4">
      <div className="flex flex-col space-y-5 items-center justify-center">
        <svg
          width="85"
          height="85"
          viewBox="0 0 85 85"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M36.6421 49.7797L27.5417 40.6774C26.7746 39.9102 25.8332 39.5266 24.7174 39.5266C23.6016 39.5266 22.6253 39.9451 21.7885 40.7821C21.0214 41.5493 20.6379 42.5258 20.6379 43.7115C20.6379 44.8972 21.0214 45.8737 21.7885 46.641L33.7132 58.568C34.4803 59.3352 35.4566 59.7189 36.6421 59.7189C37.8276 59.7189 38.8039 59.3352 39.571 58.568L63.3159 34.8185C64.083 34.0513 64.4665 33.1097 64.4665 31.9937C64.4665 30.8777 64.0481 29.9012 63.2113 29.0642C62.4442 28.297 61.4679 27.9134 60.2824 27.9134C59.0969 27.9134 58.1206 28.297 57.3535 29.0642L36.6421 49.7797ZM42.4999 84.0961C36.7119 84.0961 31.2725 82.9969 26.1818 80.7984C21.0912 78.6027 16.663 75.6216 12.8972 71.8552C9.13154 68.0887 6.15105 63.6597 3.95578 58.568C1.75772 53.4763 0.658691 48.0359 0.658691 42.2468C0.658691 36.4576 1.75772 31.0172 3.95578 25.9255C6.15105 20.8339 9.13154 16.4048 12.8972 12.6384C16.663 8.87195 21.0912 5.88949 26.1818 3.691C31.2725 1.49531 36.7119 0.397461 42.4999 0.397461C48.2879 0.397461 53.7273 1.49531 58.818 3.691C63.9087 5.88949 68.3369 8.87195 72.1026 12.6384C75.8683 16.4048 78.8488 20.8339 81.044 25.9255C83.2421 31.0172 84.3411 36.4576 84.3411 42.2468C84.3411 48.0359 83.2421 53.4763 81.044 58.568C78.8488 63.6597 75.8683 68.0887 72.1026 71.8552C68.3369 75.6216 63.9087 78.6027 58.818 80.7984C53.7273 82.9969 48.2879 84.0961 42.4999 84.0961Z"
            fill="#31A91D"
          />
        </svg>
        <div className="space-y-5 text-center">
          <h2 className="text-3xl text-[#31A91D] font-semibold">
            Pembelian Ticket Kamu Sudah Berhasil!
          </h2>
          <p className="text-xl text-gray-400/50">
            09 Juli 2024 - 08:37:44 WIB
          </p>
        </div>
        <div className="py-8 px-6 rounded-2xl shadow-md space-y-5 w-full">
          <div className="text-center space-y-3">
            <h4 className="text-gray-400/50">Penyedia Jasa</h4>
            <h2 className="font-semibold text-2xl">Brisaka</h2>
            <h4 className="text-gray-400">
              13453463463463 - Bilal Al Ghiffari
            </h4>
          </div>
          <div className="text-center pt-5">
            <h4 className="text-gray-400/50">Total Transaksi</h4>
            <h2 className="font-semibold text-2xl">IDR 157.000</h2>
          </div>
        </div>
        <Button
          className="w-full py-6"
          onClick={() => router.replace(`/ticket/detail-ticket/3297492342`)}
        >
          Continue
        </Button>
      </div>
    </div>
  );
};

export default SuccessPayment;
