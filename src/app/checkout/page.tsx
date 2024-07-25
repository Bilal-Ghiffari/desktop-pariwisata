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
import Footers from "../components/containers/footers";

interface ICheckOutProps {}

const CheckOut: React.FunctionComponent<ICheckOutProps> = (props) => {
  const router = useRouter();
  return (
    <>
      <div className="container mx-auto">
        <NavBar />
        <h3 className="text-[32px] font-bold text-[#175399] my-16">
          Complete your booking
        </h3>
        <div className="grid grid-cols-6 gap-x-10">
          <div className="col-span-3">
            <div className="bg-gray-300/20 rounded-xl p-7">
              <div className="flex justify-between">
                <div className="space-y-4 text-[#909090] text-lg">
                  <h2>Harga Tiket</h2>
                  <h2>Jumlah Tiket</h2>
                  <h2>Biaya Admin</h2>
                  <h2>Biaya Applikasi</h2>
                </div>
                <div className="space-y-4 font-semibold text-lg">
                  <h2>IDR 150.0000</h2>
                  <h2>1</h2>
                  <h2>IDR 5.0000</h2>
                  <h2>IDR 1.000</h2>
                </div>
              </div>
              <div className="mt-4 text-[#909090] text-lg">
                Ticket Reguler, Sanur - Nusapenida, ( Dewasa 1x )
              </div>
              <Separator className="my-5 bg-[#dadada]" />
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
            <div className="my-10">
              <Button
                className="w-full py-7 bg-[#175399] hover:bg-[#356499] text-white font-bold shadow-lg rounded-full text-lg"
                onClick={() => router.replace("/success-payment")}
              >
                Confirm Payment
              </Button>
            </div>
          </div>
          <div className="col-span-3">
            <h2 className="font-semibold text-2xl">Transfer to</h2>
            <div className="mt-5">
              <div className="flex flex-row gap-x-4 mt-2">
                <div className="flex items-center">
                  <img src="/images/briva 3.png" className="w-10 h-3" alt="" />
                </div>
                <h3 className="font-semibold text-lg">
                  BRIVA (Virtual Account)
                </h3>
              </div>
            </div>
            <div className="mt-5">
              <div className="flex flex-row gap-x-4 mt-2">
                <div className="flex justify-between w-1/2 bg-[#3079D9]/5 p-3 rounded-[12px]">
                  <h3 className="font-semibold text-sm">26215 701 000435301</h3>
                  <div className="flex flex-row gap-2">
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M7 6H6C4.34315 6 3 7.34315 3 9V19C3 20.6569 4.34315 22 6 22H14C15.6569 22 17 20.6569 17 19V18H15V19C15 19.5523 14.5523 20 14 20H6C5.44772 20 5 19.5523 5 19V9C5 8.44772 5.44772 8 6 8H7V6Z"
                        fill="#3079D9"
                      />
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M20.9902 7C20.9967 7.08042 21 7.16136 21 7.24264V15C21 16.6569 19.6569 18 18 18H10C8.34315 18 7 16.6569 7 15V5C7 3.34315 8.34315 2 10 2H15.7574C15.8386 2 15.9196 2.0033 16 2.00982V2L16.0107 2.01071C16.7136 2.07025 17.3761 2.3761 17.8787 2.87868L20.1213 5.12132C20.6239 5.6239 20.9298 6.28645 20.9893 6.98929L21 7H20.9902ZM18 16H10C9.44772 16 9 15.5523 9 15V5C9 4.44772 9.44772 4 10 4H15.7574C15.8399 4 15.9213 4.01019 16 4.02988V5C16 6.10457 16.8954 7 18 7H18.9701C18.9898 7.07871 19 7.16015 19 7.24264V15C19 15.5523 18.5523 16 18 16Z"
                        fill="#3079D9"
                      />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
            <div className="mt-14">
              <h2 className="font-semibold text-2xl">Payment Instruction</h2>
              <Accordion
                type="single"
                collapsible
                className="w-full h-auto mb-20"
              >
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
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Est minima nam illum in nesciunt odit perferendis libero
                    voluptas nostrum fugiat fuga, optio non expedita sequi
                    asperiores, ad eligendi, doloremque nemo.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-3">
                  <AccordionTrigger className="text-lg">
                    Mobile Banking
                  </AccordionTrigger>
                  <AccordionContent>
                    <ol className="list-decimal pl-5 space-y-3 text-[16px]">
                      <li>
                        Silahkan buka aplikasi <b>BRI Mobile</b>
                      </li>
                      <li>
                        Masukkan <b>User ID dan Password &gt; klik Login</b>
                      </li>
                      <li>
                        Pilih menu <b>BRIVA</b>
                      </li>
                      <li>
                        Pilih <b>Sumber Dana</b> &gt; klik OK{" "}
                      </li>
                      <li>
                        Jika sudah silahkan klik <b>Bayar</b>
                      </li>
                      <li>
                        Kemudian silahkan masukan <b>PIN</b>
                      </li>
                      <li>Selesai</li>
                    </ol>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>
          </div>
        </div>
      </div>
      <Footers />
    </>
  );
};

export default CheckOut;
