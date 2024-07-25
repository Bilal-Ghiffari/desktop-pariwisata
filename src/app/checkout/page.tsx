"use client";

import * as React from "react";
import NavBar from "../components/containers/navbar";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";

interface ICheckOutProps {}

const CheckOut: React.FunctionComponent<ICheckOutProps> = (props) => {
  const router = useRouter();
  return (
    <div className="container mx-auto">
      <NavBar />
      <h3 className="text-[32px] font-bold text-[#175399] my-16">
        Hasil Pencarian kamu
      </h3>
      <div className="grid grid-cols-6 gap-x-10">
        <div className="col-span-3">
          <div className="bg-gray-300/20 rounded-xl p-7">
            <h2 className="text-xl mb-10">Order Sumary</h2>
            <div className="flex justify-between">
              <div className="space-y-4">
                <h2>Harga Tiket</h2>
                <h2>Jumlah Tiket</h2>
                <h2>Biaya Admin</h2>
                <h2>Biaya Applikasi</h2>
              </div>
              <div className="space-y-4 font-bold">
                <h2>IDR 150.0000</h2>
                <h2>1</h2>
                <h2>IDR 5.0000</h2>
                <h2>IDR 1.000</h2>
              </div>
            </div>
            <div className="mt-4">
              Ticket Reguler, Sanur - Nusapenida, ( Dewasa 1x )
            </div>
            <Separator className="my-5" />
            <div className="flex justify-between">
              <div>
                <h2>Total</h2>
              </div>
              <div>
                <h2>IDR 157.000</h2>
              </div>
            </div>
          </div>
          <div className="my-10">
            <Button
              className="w-full"
              onClick={() => router.replace("/success-payment")}
            >
              Confirm Payment
            </Button>
          </div>
        </div>
        <div className="col-span-3">
          <h2 className="font-semibold text-2xl">Payment method used</h2>
          <div className="mt-5">
            <div className="flex flex-row gap-x-4 mt-2">
              <img src="/images/briva 3.png" className="w-16 h-6" alt="" />
              <h3>BRIVA (Virtual Account)</h3>
            </div>
          </div>
          <div className="mt-5">
            <h2 className="text-gray-400">No. virtual account</h2>
            <div className="flex flex-row gap-x-4 mt-2">
              <div className="flex flex-row gap-x-10">
                <h3 className="font-semibold">26215 701 000435301</h3>
                <div className="flex flex-row gap-2">
                  <h3>Salin</h3>
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g clip-path="url(#clip0_1_3865)">
                      <path
                        d="M15 1H4C2.9 1 2 1.9 2 3V16C2 16.55 2.45 17 3 17C3.55 17 4 16.55 4 16V4C4 3.45 4.45 3 5 3H15C15.55 3 16 2.55 16 2C16 1.45 15.55 1 15 1ZM19 5H8C6.9 5 6 5.9 6 7V21C6 22.1 6.9 23 8 23H19C20.1 23 21 22.1 21 21V7C21 5.9 20.1 5 19 5ZM18 21H9C8.45 21 8 20.55 8 20V8C8 7.45 8.45 7 9 7H18C18.55 7 19 7.45 19 8V20C19 20.55 18.55 21 18 21Z"
                        fill="#FF7A58"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_1_3865">
                        <rect width="24" height="24" fill="white" />
                      </clipPath>
                    </defs>
                  </svg>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-14">
            <h2 className="font-semibold text-2xl">Cara Pembayaran</h2>
            <Accordion type="single" collapsible className="w-full h-96">
              <AccordionItem value="item-1">
                <AccordionTrigger className="text-lg">
                  Transfer ATM
                </AccordionTrigger>
                <AccordionContent>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Aliquid, sunt corrupti eius aliquam velit tempore ex atque!
                  Earum, magni! Dolorem, consectetur in dolorum quis incidunt
                  quae esse repellat ipsam? Eligendi?
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-2">
                <AccordionTrigger className="text-lg">
                  Agen BRILink
                </AccordionTrigger>
                <AccordionContent>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Est
                  minima nam illum in nesciunt odit perferendis libero voluptas
                  nostrum fugiat fuga, optio non expedita sequi asperiores, ad
                  eligendi, doloremque nemo.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-3">
                <AccordionTrigger className="text-lg">
                  Mobile Banking
                </AccordionTrigger>
                <AccordionContent>
                  <ol className="list-decimal pl-5 space-y-3">
                    <li>Silahkan buka aplikasi BRI Mobile</li>
                    <li>Masukkan User ID dan Password &gt; klik Login</li>
                    <li>Pilih menu BRIVA</li>
                    <li>Pilih Sumber Dana &gt; klik OK </li>
                    <li>Jika sudah silahkan klik Bayar</li>
                    <li>Kemudian silahkan masukan PIN</li>
                    <li>Selesai</li>
                  </ol>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CheckOut;
