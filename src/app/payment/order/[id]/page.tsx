import { CardDetailPayment } from "@/app/components/containers/card";
import {
  CardTickets,
  TripDetail,
} from "@/app/components/containers/card-ticket";
import Footers from "@/app/components/containers/footers";
import NavBar from "@/app/components/containers/navbar";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import * as React from "react";

interface IPaymentProps {}

const PaymentOrder: React.FunctionComponent<IPaymentProps> = (props) => {
  return (
    <div className="container mx-auto">
      <NavBar />
      <div className="mb-16">
        <div className="space-y-4 mb-16 mt-8">
          <h3 className="text-4xl font-bold">Detail Pesanan</h3>
          <span className="text-[#F3761B] text-xl font-medium">
            Lengkapi Data Diri dan pastikan detail pesanan
          </span>
        </div>
        <div className="grid grid-rows-1 grid-cols-2 gap-x-10">
          <div className="grid grid-rows-1 gap-y-5 h-min">
            <CardTickets>
              <div className="flex flex-row gap-x-[10px] py-5 px-4 items-center font-bold text-base">
                <svg
                  width="14"
                  height="12"
                  viewBox="0 0 14 12"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M9.00016 8.66797H11.0002C11.3668 8.66797 11.6668 8.36797 11.6668 8.0013V4.0013C11.6668 3.63464 11.3668 3.33464 11.0002 3.33464H9.00016C8.6335 3.33464 8.3335 3.63464 8.3335 4.0013V8.0013C8.3335 8.36797 8.6335 8.66797 9.00016 8.66797ZM9.66683 4.66797H10.3335V7.33463H9.66683V4.66797ZM5.00016 8.66797H7.00016C7.36683 8.66797 7.66683 8.36797 7.66683 8.0013V4.0013C7.66683 3.63464 7.36683 3.33464 7.00016 3.33464H5.00016C4.6335 3.33464 4.3335 3.63464 4.3335 4.0013V8.0013C4.3335 8.36797 4.6335 8.66797 5.00016 8.66797ZM5.66683 4.66797H6.3335V7.33463H5.66683V4.66797ZM3.00016 3.33464C2.6335 3.33464 2.3335 3.63464 2.3335 4.0013V8.0013C2.3335 8.36797 2.6335 8.66797 3.00016 8.66797C3.36683 8.66797 3.66683 8.36797 3.66683 8.0013V4.0013C3.66683 3.63464 3.36683 3.33464 3.00016 3.33464ZM0.333496 2.0013V10.0013C0.333496 10.7346 0.933496 11.3346 1.66683 11.3346H12.3335C13.0668 11.3346 13.6668 10.7346 13.6668 10.0013V2.0013C13.6668 1.26797 13.0668 0.667969 12.3335 0.667969H1.66683C0.933496 0.667969 0.333496 1.26797 0.333496 2.0013ZM11.6668 10.0013H2.3335C1.96683 10.0013 1.66683 9.7013 1.66683 9.33463V2.66797C1.66683 2.3013 1.96683 2.0013 2.3335 2.0013H11.6668C12.0335 2.0013 12.3335 2.3013 12.3335 2.66797V9.33463C12.3335 9.7013 12.0335 10.0013 11.6668 10.0013Z"
                    fill="#175399"
                  />
                </svg>
                Rincian Harga
              </div>
              <Separator className="w-full" />
              <div className="flex flex-col gap-y-4 py-8 px-4 text-lg">
                <div className="flex justify-between">
                  <span>Harga Ticket</span>
                  <span className="font-bold">IDR 300.000</span>
                </div>
                <div className="flex justify-between">
                  <span>Harga Ticket</span>
                  <span className="font-bold">IDR 300.000</span>
                </div>
                <div className="flex justify-between">
                  <span>Harga Ticket</span>
                  <span className="font-bold">IDR 300.000</span>
                </div>
              </div>
              <Separator className="w-full" />
              <div className="flex flex-col gap-y-2 my-8 px-4">
                <h3 className="text-lg font-normal text-[#202020]">
                  Total Pembayaran
                </h3>
                <span className="text-[22px] font-bold text-[#D61355]">
                  IDR 615.000
                </span>
              </div>
            </CardTickets>
            <CardDetailPayment className="py-5">
              <Accordion type="single" collapsible className="px-4">
                {Array(5)
                  .fill(5)
                  .map((_, id) => (
                    <AccordionItem value={`item-${id}`} key={id}>
                      <AccordionTrigger className="hover:no-underline">
                        Mobile banking
                      </AccordionTrigger>
                      <AccordionContent>
                        <ol className="">
                          <li>
                            Silahkan buka aplikasi BRI Mobile {">"} pilih menu
                            Internet Banking BRI
                          </li>
                          <li>
                            Masukkan User ID dan Password {">"} klik Login
                          </li>
                          <li>Pilih menu Transfer {"> "}Transfer Dalam Bank</li>
                        </ol>
                      </AccordionContent>
                    </AccordionItem>
                  ))}
              </Accordion>
            </CardDetailPayment>
          </div>
          <div className="grid grid-rows-1 gap-y-5 h-min">
            <CardTickets>
              <div className="flex justify-between py-5 px-4">
                <span className="text-lg">Bayar Sebelum</span>
                <div className="flex flex-row gap-x-1 items-center">
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g clip-path="url(#clip0_4220_9618)">
                      <path
                        d="M7.9935 1.33203C4.3135 1.33203 1.3335 4.3187 1.3335 7.9987C1.3335 11.6787 4.3135 14.6654 7.9935 14.6654C11.6802 14.6654 14.6668 11.6787 14.6668 7.9987C14.6668 4.3187 11.6802 1.33203 7.9935 1.33203ZM8.00016 13.332C5.0535 13.332 2.66683 10.9454 2.66683 7.9987C2.66683 5.05203 5.0535 2.66536 8.00016 2.66536C10.9468 2.66536 13.3335 5.05203 13.3335 7.9987C13.3335 10.9454 10.9468 13.332 8.00016 13.332ZM7.8535 4.66536H7.8135C7.54683 4.66536 7.3335 4.8787 7.3335 5.14536V8.29203C7.3335 8.52536 7.4535 8.74537 7.66016 8.86537L10.4268 10.5254C10.6535 10.6587 10.9468 10.592 11.0802 10.3654C11.2202 10.1387 11.1468 9.8387 10.9135 9.70537L8.3335 8.17203V5.14536C8.3335 4.8787 8.12016 4.66536 7.8535 4.66536Z"
                        fill="#FF3860"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_4220_9618">
                        <rect width="16" height="16" fill="white" />
                      </clipPath>
                    </defs>
                  </svg>
                  <p className="text-lg text-[#D61355] font-bold">
                    2 maret, 15:00
                  </p>
                </div>
              </div>
              <Separator className="w-full" />
              <div className="flex flex-col gap-y-2 my-8 px-4 justify-center items-center">
                <h3 className="text-lg font-normal text-[#202020]">
                  Sisa waktu pembayaran
                </h3>
                <span className="font-bold text-[#D61355] text-4xl">
                  23:59:59
                </span>
              </div>
            </CardTickets>
            <CardTickets>
              <div className="flex justify-between py-5 px-4">
                <span className="text-lg">Bayar Sebelum</span>
                <div className="flex flex-row gap-x-1 items-center">
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g clip-path="url(#clip0_4220_9618)">
                      <path
                        d="M7.9935 1.33203C4.3135 1.33203 1.3335 4.3187 1.3335 7.9987C1.3335 11.6787 4.3135 14.6654 7.9935 14.6654C11.6802 14.6654 14.6668 11.6787 14.6668 7.9987C14.6668 4.3187 11.6802 1.33203 7.9935 1.33203ZM8.00016 13.332C5.0535 13.332 2.66683 10.9454 2.66683 7.9987C2.66683 5.05203 5.0535 2.66536 8.00016 2.66536C10.9468 2.66536 13.3335 5.05203 13.3335 7.9987C13.3335 10.9454 10.9468 13.332 8.00016 13.332ZM7.8535 4.66536H7.8135C7.54683 4.66536 7.3335 4.8787 7.3335 5.14536V8.29203C7.3335 8.52536 7.4535 8.74537 7.66016 8.86537L10.4268 10.5254C10.6535 10.6587 10.9468 10.592 11.0802 10.3654C11.2202 10.1387 11.1468 9.8387 10.9135 9.70537L8.3335 8.17203V5.14536C8.3335 4.8787 8.12016 4.66536 7.8535 4.66536Z"
                        fill="#FF3860"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_4220_9618">
                        <rect width="16" height="16" fill="white" />
                      </clipPath>
                    </defs>
                  </svg>
                  <p className="text-lg text-[#D61355] font-bold">
                    2 maret, 15:00
                  </p>
                </div>
              </div>
              <Separator className="w-full" />
              <div className="flex flex-col gap-y-2 my-8 px-4 justify-center items-center">
                <h3 className="text-lg font-normal text-[#202020]">
                  Sisa waktu pembayaran
                </h3>
                <span className="font-bold text-[#D61355] text-4xl">
                  23:59:59
                </span>
              </div>
            </CardTickets>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PaymentOrder;
