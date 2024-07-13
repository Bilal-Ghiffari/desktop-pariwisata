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
import { Switch } from "@/components/ui/switch";
import * as React from "react";

interface IDetailPesananaProps {}

const DetailPesanana: React.FunctionComponent<IDetailPesananaProps> = (
  props
) => {
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
          <div className="grid grid-cols-1 gap-y-5 h-max">
            <CardDetailPayment>
              <label htmlFor="">Nama depan</label>
              <input
                type="text"
                className="px-[16px] py-4 rounded-[8px] border border-[#999999] focus:outline-none"
                placeholder="Nama depan"
              />
              <label htmlFor="">Nama depan</label>
              <input
                type="text"
                className="px-[16px] py-4 rounded-[8px] border border-[#999999] focus:outline-none"
                placeholder="Nama depan"
              />
              <label htmlFor="">Nama depan</label>
              <input
                type="text"
                className="px-[16px] py-4 rounded-[8px] border border-[#999999] focus:outline-none"
                placeholder="Nama depan"
              />
              {/* <div className="flex justify-between">
              <span className="font-bold">Tambahkan sebagai penumpang</span>
              <Switch
              // checked={field.value}
              // onCheckedChange={field.onChange}
              />
            </div> */}
            </CardDetailPayment>
            <CardDetailPayment>
              <label htmlFor="">Nama depan</label>
              <input
                type="text"
                className="px-[16px] py-4 rounded-[8px] border border-[#999999] focus:outline-none"
                placeholder="Nama depan"
              />
              <label htmlFor="">Nama depan</label>
              <input
                type="text"
                className="px-[16px] py-4 rounded-[8px] border border-[#999999] focus:outline-none"
                placeholder="Nama depan"
              />
              <label htmlFor="">Nama depan</label>
              <input
                type="text"
                className="px-[16px] py-4 rounded-[8px] border border-[#999999] focus:outline-none"
                placeholder="Nama depan"
              />
              <div className="grid grid-cols-2 gap-x-4">
                <div className="flex flex-col gap-y-4">
                  <label htmlFor="">Nama depan</label>
                  <input
                    type="text"
                    className="px-[16px] w-full py-4 rounded-[8px] border border-[#999999] focus:outline-none"
                    placeholder="Nama depan"
                  />
                </div>
                <div className="flex flex-col gap-y-4">
                  <label htmlFor="">Nama depan</label>
                  <input
                    type="text"
                    className="w-full px-[16px] py-4 rounded-[8px] border border-[#999999] focus:outline-none"
                    placeholder="Nama depan"
                  />
                </div>
              </div>
            </CardDetailPayment>
            <button className="w-full bg-[#EDF5FF] flex justify-center py-4 gap-4 text-center items-center text-[#175399] mb-24 text-lg rounded-[10px]">
              <svg
                width="22"
                height="16"
                viewBox="0 0 22 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M14 8C16.21 8 18 6.21 18 4C18 1.79 16.21 0 14 0C11.79 0 10 1.79 10 4C10 6.21 11.79 8 14 8ZM5 6V4C5 3.45 4.55 3 4 3C3.45 3 3 3.45 3 4V6H1C0.45 6 0 6.45 0 7C0 7.55 0.45 8 1 8H3V10C3 10.55 3.45 11 4 11C4.55 11 5 10.55 5 10V8H7C7.55 8 8 7.55 8 7C8 6.45 7.55 6 7 6H5ZM14 10C11.33 10 6 11.34 6 14V15C6 15.55 6.45 16 7 16H21C21.55 16 22 15.55 22 15V14C22 11.34 16.67 10 14 10Z"
                  fill="#175399"
                />
              </svg>
              Tambah Penumpang
            </button>
          </div>
          <div className="grid grid-cols-1 gap-y-8">
            <CardTickets>
              <CardTickets.Content>
                <CardTickets.Header
                  imageUrl="/images/Blue Water Express 1.png"
                  imageAlt="Blue Water Express"
                  title="Blue Water Express"
                />
                <CardTickets.Section>
                  <div className="flex flex-row gap-2 items-center">
                    <Badge variant="badgecard">Regular</Badge>
                    <div className="w-full">
                      <Separator className="" />
                    </div>
                  </div>
                  <TripDetail>
                    <TripDetail.Date>Senin, 1 Juli 2024</TripDetail.Date>
                    <TripDetail.Location>
                      Ketapang, Banyuwangi ( 10:45 WIB )
                    </TripDetail.Location>
                  </TripDetail>
                  <div className="flex flex-row gap-x-4">
                    <div>
                      <svg
                        width="6"
                        height="51"
                        viewBox="0 0 6 51"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M3 0.216146C1.52724 0.216146 0.333333 1.41005 0.333333 2.88281C0.333333 4.35557 1.52724 5.54948 3 5.54948C4.47276 5.54948 5.66667 4.35557 5.66667 2.88281C5.66667 1.41005 4.47276 0.216146 3 0.216146ZM3 50.8828L5.88675 45.8828H0.113249L3 50.8828ZM2.5 2.88281V3.88281H3.5V2.88281H2.5ZM2.5 5.88281L2.5 7.88281H3.5V5.88281H2.5ZM2.5 9.88281V11.8828H3.5V9.88281H2.5ZM2.5 13.8828V15.8828H3.5V13.8828H2.5ZM2.5 17.8828V19.8828H3.5V17.8828H2.5ZM2.5 21.8828V23.8828H3.5L3.5 21.8828H2.5ZM2.5 25.8828L2.5 27.8828H3.5V25.8828H2.5ZM2.5 29.8828V31.8828H3.5V29.8828H2.5ZM2.5 33.8828V35.8828H3.5V33.8828H2.5ZM2.5 37.8828V39.8828H3.5V37.8828H2.5ZM2.5 41.8828L2.5 43.8828H3.5V41.8828H2.5ZM2.5 45.8828V47.8828H3.5V45.8828H2.5Z"
                          fill="#999999"
                        />
                      </svg>
                    </div>
                    <div className="flex items-center">
                      <span className="text-[#999999] text-[13px] font-normal">
                        Estimasi waktu penyebrangan 45 menit
                      </span>
                    </div>
                  </div>
                  <TripDetail>
                    <TripDetail.Date>Senin, 1 Juli 2024</TripDetail.Date>
                    <TripDetail.Location>
                      Ketapang, Banyuwangi ( 10:45 WIB )
                    </TripDetail.Location>
                  </TripDetail>
                </CardTickets.Section>
              </CardTickets.Content>
              <div className="w-full bg-[#E2880029] py-4 px-5 my-5">
                <div className="flex flex-row gap-x-2">
                  <svg
                    width="14"
                    height="15"
                    viewBox="0 0 14 15"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M7.00016 0.714844C3.32016 0.714844 0.333496 3.70151 0.333496 7.38151C0.333496 11.0615 3.32016 14.0482 7.00016 14.0482C10.6802 14.0482 13.6668 11.0615 13.6668 7.38151C13.6668 3.70151 10.6802 0.714844 7.00016 0.714844ZM7.00016 8.04818C6.6335 8.04818 6.3335 7.74818 6.3335 7.38151V4.71484C6.3335 4.34818 6.6335 4.04818 7.00016 4.04818C7.36683 4.04818 7.66683 4.34818 7.66683 4.71484V7.38151C7.66683 7.74818 7.36683 8.04818 7.00016 8.04818ZM7.66683 10.7148H6.3335V9.38151H7.66683V10.7148Z"
                      fill="#F3761B"
                    />
                  </svg>
                  <span className="text-[13px] text-[#F3761B]">
                    Masuk ke pelabuhan (Check-In) sebelum jam{" "}
                    <span className="font-bold">10:00 WIB</span>
                  </span>
                </div>
              </div>
            </CardTickets>
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
            <button className="tex-center bg-[#175399] text-white text-lg py-4 rounded-lg">
              Lanjut Pembayaran
            </button>
            <CardTickets>
              <Accordion type="single" collapsible className="px-4 py-5">
                <AccordionItem value="item-1">
                  <AccordionTrigger className="hover:no-underline">
                    Syarat dan Ketentuan
                  </AccordionTrigger>
                  <AccordionContent>
                    <ol className="list-decimal">
                      <li>
                        lorem ipsum dolor sit amet consectetur adipiscing elit
                        sed do eiusmod tempor incididunt ut labore et
                      </li>
                      <li>
                        lorem ipsum dolor sit amet consectetur adipiscing elit
                        sed do eiusmod tempor incididunt ut labore et
                      </li>
                      <li>
                        lorem ipsum dolor sit amet consectetur adipiscing elit
                        sed do eiusmod tempor incididunt ut labore et
                      </li>
                    </ol>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </CardTickets>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailPesanana;
