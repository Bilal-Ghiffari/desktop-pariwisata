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
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import Image from "next/image";

interface ICheckOutProps {}

const CheckOut: React.FunctionComponent<ICheckOutProps> = (props) => {
  const router = useRouter();
  return (
    <>
      <div className="md:hidden block z-10 bg-gradient-to-r from-cyan-500 h-max to-blue-500 w-full shadow-lg  sticky top-0">
        <div className="py-4 pl-4">
          <div className="flex flex-row items-center">
            <Link href="/">
              <ArrowLeft className="w-6 h-6" />
            </Link>
            <h3 className="font-semibold pl-5 text-lg text-center">
              Complete your booking
            </h3>
          </div>
        </div>
      </div>
      <div className="md:container px-4 md:mx-auto mx-0">
        <NavBar className="md:flex hidden" />
        <div className="justify-between my-10 items-center md:hidden flex">
          <h3 className="text-[16px] font-bold">Complete Payment in</h3>
          <div className="flex flex-row gap-x-[3px]">
            <div className="h-8 w-8 bg-[#E36F6F] rounded-sm py-2 px-1 flex justify-center items-center">
              <p className="text-lg font-semibold text-white">23</p>
            </div>
            <svg
              className="w-[6px]"
              viewBox="0 0 2 7"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M1.00266 6.59375C0.744141 6.59375 0.52255 6.50284 0.337891 6.32102C0.153232 6.1392 0.0623225 5.91761 0.0651633 5.65625C0.0623225 5.40057 0.153232 5.18182 0.337891 5C0.52255 4.81818 0.744141 4.72727 1.00266 4.72727C1.25266 4.72727 1.46999 4.81818 1.65465 5C1.84215 5.18182 1.93732 5.40057 1.94016 5.65625C1.93732 5.82955 1.89187 5.98722 1.8038 6.12926C1.71857 6.27131 1.60494 6.38494 1.46289 6.47017C1.32369 6.55256 1.17028 6.59375 1.00266 6.59375ZM1.00266 1.9233C0.744141 1.9233 0.52255 1.83239 0.337891 1.65057C0.153232 1.46591 0.0623225 1.24432 0.0651633 0.985795C0.0623225 0.730114 0.153232 0.511364 0.337891 0.329545C0.52255 0.144886 0.744141 0.0525568 1.00266 0.0525568C1.25266 0.0525568 1.46999 0.144886 1.65465 0.329545C1.84215 0.511364 1.93732 0.730114 1.94016 0.985795C1.93732 1.15625 1.89187 1.3125 1.8038 1.45455C1.71857 1.59659 1.60494 1.71023 1.46289 1.79545C1.32369 1.88068 1.17028 1.9233 1.00266 1.9233Z"
                fill="#E36F6F"
              />
            </svg>

            <div className="h-8 w-8 bg-[#E36F6F] rounded-sm py-2 px-1 flex justify-center items-center">
              <p className="text-lg font-semibold text-white">23</p>
            </div>
            <svg
              className="w-[6px]"
              viewBox="0 0 2 7"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M1.00266 6.59375C0.744141 6.59375 0.52255 6.50284 0.337891 6.32102C0.153232 6.1392 0.0623225 5.91761 0.0651633 5.65625C0.0623225 5.40057 0.153232 5.18182 0.337891 5C0.52255 4.81818 0.744141 4.72727 1.00266 4.72727C1.25266 4.72727 1.46999 4.81818 1.65465 5C1.84215 5.18182 1.93732 5.40057 1.94016 5.65625C1.93732 5.82955 1.89187 5.98722 1.8038 6.12926C1.71857 6.27131 1.60494 6.38494 1.46289 6.47017C1.32369 6.55256 1.17028 6.59375 1.00266 6.59375ZM1.00266 1.9233C0.744141 1.9233 0.52255 1.83239 0.337891 1.65057C0.153232 1.46591 0.0623225 1.24432 0.0651633 0.985795C0.0623225 0.730114 0.153232 0.511364 0.337891 0.329545C0.52255 0.144886 0.744141 0.0525568 1.00266 0.0525568C1.25266 0.0525568 1.46999 0.144886 1.65465 0.329545C1.84215 0.511364 1.93732 0.730114 1.94016 0.985795C1.93732 1.15625 1.89187 1.3125 1.8038 1.45455C1.71857 1.59659 1.60494 1.71023 1.46289 1.79545C1.32369 1.88068 1.17028 1.9233 1.00266 1.9233Z"
                fill="#E36F6F"
              />
            </svg>
            <div className="h-8 w-8 bg-[#E36F6F] rounded-sm py-2 px-1 flex justify-center items-center">
              <p className="text-lg font-semibold text-white">23</p>
            </div>
          </div>
        </div>
        <div className="bg-white shadow-lg p-4 rounded-xl md:hidden mb-8">
          <div className="flex justify-between">
            <div className="space-y-4 text-[#909090] text-sm">
              <h2>Harga Tiket</h2>
              <h2>Jumlah Tiket</h2>
              <h2>Biaya Admin</h2>
              <h2>Biaya Applikasi</h2>
            </div>
            <div className="space-y-4 font-semibold text-sm">
              <h2>IDR 150.0000</h2>
              <h2>1</h2>
              <h2>IDR 5.0000</h2>
              <h2>IDR 1.000</h2>
            </div>
          </div>
          <div className="mt-4 text-[#909090] text-sm">
            Ticket Reguler, Sanur - Nusapenida, ( Dewasa 1x )
          </div>
          <Separator className="my-5 bg-[#dadada]" />
          <div className="flex justify-between">
            <div>
              <h2 className="text-[#909090] text-sm">Total Payment</h2>
            </div>
            <div>
              <h2 className="text-[#FF4242] text-sm font-bold">IDR 157.000</h2>
            </div>
          </div>
        </div>
        {/* <div className="bg-white shadow-lg p-4 justify-between rounded-xl md:hidden flex mb-8">
          <div className="flex flex-col gap-y-4">
            <p>Nusapenida</p>
            <p>12:30 PM</p>
          </div>
          <div className="flex flex-col gap-y-4">
            <p>15h 40m</p>
            <p>
              <svg
                width="73"
                height="9"
                viewBox="0 0 73 9"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle
                  cx="68.4998"
                  cy="4.38772"
                  r="3.5"
                  transform="rotate(179.799 68.4998 4.38772)"
                  stroke="#D9E3E8"
                />
                <line
                  x1="64.5016"
                  y1="4.90173"
                  x2="36.5018"
                  y2="4.99998"
                  stroke="#D9E3E8"
                  stroke-dasharray="4 4"
                />
                <line
                  x1="36.5018"
                  y1="5"
                  x2="8.50194"
                  y2="5.09825"
                  stroke="#D9E3E8"
                  stroke-dasharray="4 4"
                />
                <circle
                  cx="4.50021"
                  cy="4.61227"
                  r="4"
                  transform="rotate(179.799 4.50021 4.61227)"
                  fill="#D9E3E8"
                />
              </svg>
            </p>
          </div>
          <div className="flex flex-col gap-y-4">
            <p>Sanur</p>
            <p>12:30 PM</p>
          </div>
        </div> */}
        <h3 className="text-[16px] font-bold text-start md:hidden block mb-3">
          Transfer to
        </h3>
        <div className="bg-white shadow-lg p-4 w-full rounded-xl md:hidden block mb-8">
          <div className="flex flex-col gap-y-3">
            <div className="flex flex-row gap-x-4">
              <div className="flex items-center">
                <Image
                  src="/images/briva 3.png"
                  width={40}
                  height={12}
                  className="w-10 h-3"
                  alt=""
                />
              </div>
              <h3 className="font-semibold text-sm">BRIVA (Virtual Account)</h3>
            </div>
            <div className="flex justify-between w-full bg-[#3079D9]/5 p-3 rounded-[12px]">
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
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M20.9902 7C20.9967 7.08042 21 7.16136 21 7.24264V15C21 16.6569 19.6569 18 18 18H10C8.34315 18 7 16.6569 7 15V5C7 3.34315 8.34315 2 10 2H15.7574C15.8386 2 15.9196 2.0033 16 2.00982V2L16.0107 2.01071C16.7136 2.07025 17.3761 2.3761 17.8787 2.87868L20.1213 5.12132C20.6239 5.6239 20.9298 6.28645 20.9893 6.98929L21 7H20.9902ZM18 16H10C9.44772 16 9 15.5523 9 15V5C9 4.44772 9.44772 4 10 4H15.7574C15.8399 4 15.9213 4.01019 16 4.02988V5C16 6.10457 16.8954 7 18 7H18.9701C18.9898 7.07871 19 7.16015 19 7.24264V15C19 15.5523 18.5523 16 18 16Z"
                    fill="#3079D9"
                  />
                </svg>
              </div>
            </div>
            <div className="flex flex-col gap-y-2">
              <h3 className="font-semibold text-sm">Total Payment</h3>
              <div className="flex justify-between w-full bg-[#3079D9]/5 p-3 rounded-[12px]">
                <h3 className="font-semibold text-sm">IDR 157.000</h3>
              </div>
            </div>
          </div>
        </div>
        <div className="md:hidden block h-auto border rounded-xl p-4 mb-5">
          <h3 className="text-[16px] font-bold text-start md:hidden block mb-3">
            Payment Instruction
          </h3>
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="item-1">
              <AccordionTrigger className="text-[16px] font-semibold">
                Transfer ATM
              </AccordionTrigger>
              <AccordionContent>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Aliquid, sunt corrupti eius aliquam velit tempore ex atque!
                Earum, magni! Dolorem, consectetur in dolorum quis incidunt quae
                esse repellat ipsam? Eligendi?
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
              <AccordionTrigger className="text-[16px] font-semibold">
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
              <AccordionTrigger className="text-[16px] font-semibold">
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
        <Button
          type="button"
          className="py-3 bg-[#175399] md:hidden text-center hover:bg-[#356499] font-bold shadow-lg rounded-full text-sm w-full mb-5"
          onClick={() => router.push("/success-payment")}
        >
          Confirm Payment
        </Button>
        <h3 className="text-[32px] font-bold md:block hidden text-[#175399] my-16">
          Complete your booking
        </h3>
        <div className="grid-cols-6 gap-x-10 md:grid hidden">
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
                  <Image
                    width={40}
                    height={12}
                    src="/images/briva 3.png"
                    className="w-10 h-3"
                    alt=""
                  />
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
                        fillRule="evenodd"
                        clipRule="evenodd"
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
