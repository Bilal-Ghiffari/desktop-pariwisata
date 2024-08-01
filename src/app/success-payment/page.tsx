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
    <div className="flex justify-center w-full items-center transform md:translate-y-1/4 translate-y-[7%]">
      <div className="flex flex-col space-y-5 items-center justify-center mb-10 md:mx-0 mx-5">
        <svg
          className="mb-10"
          width="189"
          height="184"
          viewBox="0 0 189 184"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle cx="94.5" cy="95.5" r="55.1182" fill="#009758" />
          <path
            d="M69.5046 95.6195L86.2948 112.403L119.861 78.8364"
            stroke="#FEFEFF"
            strokeWidth="10.6088"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <circle cx="162" cy="43" r="7" fill="#3079D9" />
          <circle cx="79.5" cy="4.5" r="4.5" fill="#3079D9" />
          <circle cx="137.5" cy="29.5" r="4.5" fill="#3079D9" />
          <circle cx="162" cy="165" r="7" fill="#3079D9" />
          <circle cx="182" cy="109" r="7" fill="#3079D9" />
          <circle cx="154.5" cy="148.5" r="4.5" fill="#3079D9" />
          <circle cx="74.5" cy="179.5" r="4.5" fill="#3079D9" />
          <path
            d="M8 144C8 146.209 6.20914 148 4 148C1.79086 148 0 146.209 0 144C0 141.791 1.79086 140 4 140C6.20914 140 8 141.791 8 144Z"
            fill="#3079D9"
          />
          <circle cx="35" cy="33" r="4" fill="#3079D9" />
          <circle cx="8.5" cy="55.5" r="5.5" fill="#3079D9" />
          <circle cx="13.5" cy="121.5" r="5.5" fill="#3079D9" />
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
          className="w-full md:py-7 py-3 bg-[#175399] hover:bg-[#356499] text-white font-bold shadow-lg rounded-full md:text-lg text-sm"
          onClick={() => router.replace(`/ticket`)}
        >
          See Order List
        </Button>
      </div>
    </div>
  );
};

export default SuccessPayment;
