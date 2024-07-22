"use client";

import * as React from "react";
import NavBar from "../components/containers/navbar";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select-filter";

// import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

import { dateFormat } from "@/utils";
import { Button } from "@/components/ui/button";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "@/lib/store";
import { searchBoat, updateQuantities } from "@/lib/features/boatfilterSlice";
import { useFiltersBoatActions } from "@/services/filter-boat/state";
import CardTicketBoat from "../components/containers/card-ticket-boat";

interface IAvailableBoatProps {}

const AvailableBoat: React.FunctionComponent<IAvailableBoatProps> = (props) => {
  const dispatch = useDispatch<AppDispatch>();
  const state = useSelector((state: RootState) => state.boatFilter);
  const { handleSubmit } = useFiltersBoatActions();

  return (
    <div className="container mx-auto">
      <NavBar />
      <h3 className="text-[32px] font-bold text-[#175399] my-16">
        Hasil Pencarian kamu
      </h3>
      <div className="grid grid-rows-1 grid-cols-3 gap-x-10 mb-10">
        <div className="grid grid-rows-1 col-span-1 gap-y-5 h-min">
          <div className="border py-8 px-6 rounded-2xl shadow-md">
            <div className="grid grid-cols-2 gap-5">
              <div className="rounded-lg shadow-sm p-4 bg-gray-300/10">
                <div className="text-sm text-gray-400">Berangkat</div>
                <Select
                  onValueChange={(val: string) =>
                    dispatch(searchBoat({ departure: val }))
                  }
                  value={state.departure || ""}
                  disabled={true}
                >
                  <SelectTrigger className="w-full shadow-none">
                    <SelectValue placeholder="Berangkat" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem
                      value="gilimanuk"
                      className="text-lg font-semibold"
                    >
                      Gilimanuk
                    </SelectItem>
                    <SelectItem value="merak" className="text-lg font-semibold">
                      Merak
                    </SelectItem>
                    <SelectItem
                      value="bakauheni"
                      className="text-lg font-semibold"
                    >
                      Bakauheni
                    </SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="rounded-lg sshadow-sm hadow-sm p-4 bg-gray-300/10">
                <div className="text-sm text-gray-500">Tujuan</div>
                <Select
                  onValueChange={(val: string) =>
                    dispatch(searchBoat({ arrival: val }))
                  }
                  value={state.arrival || ""}
                  disabled={true}
                >
                  <SelectTrigger className="w-full shadow-none">
                    <SelectValue placeholder="Tujuan" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem
                      value="gilimanuk"
                      className="text-lg font-semibold"
                    >
                      Gilimanuk
                    </SelectItem>
                    <SelectItem value="merak" className="text-lg font-semibold">
                      Merak
                    </SelectItem>
                    <SelectItem
                      value="bakauheni"
                      className="text-lg font-semibold"
                    >
                      Bakauheni
                    </SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-5">
              <div className="flex items-center p-4 rounded-lg shadow-sm">
                <div>
                  <div className="text-sm text-gray-500">
                    Pilih Tanggal Pergi
                  </div>
                  <Popover>
                    <PopoverTrigger asChild>
                      <div className="text-lg">
                        {state.leavingDate ? (
                          dateFormat(state.leavingDate, "DD MMM YYYY")
                        ) : (
                          <span>
                            {dateFormat(new Date(Date.now()), "DD MMM YYYY")}
                          </span>
                        )}
                      </div>
                    </PopoverTrigger>
                    <PopoverContent className="w-auto p-0" align="start">
                      <Calendar
                        mode="single"
                        selected={
                          state.leavingDate
                            ? new Date(state.leavingDate)
                            : new Date(Date.now())
                        }
                        onSelect={(day: any) => {
                          if (day) {
                            dispatch(
                              searchBoat({ leavingDate: day.toISOString() })
                            );
                          }
                        }}
                        disabled={(date) => date < new Date(Date.now())}
                        initialFocus
                      />
                    </PopoverContent>
                  </Popover>
                </div>
              </div>
              {state.returnDate && (
                <div className="flex items-center p-4 rounded-lg shadow-sm">
                  <div>
                    <div className="text-sm text-gray-500">
                      Pilih Tanggal Pulang
                    </div>
                    <Popover>
                      <PopoverTrigger asChild>
                        <div className="text-lg">
                          {state.returnDate ? (
                            dateFormat(state.returnDate, "DD MMM YYYY")
                          ) : (
                            <span>
                              {dateFormat(
                                new Date(
                                  state.leavingDate
                                    ? state.leavingDate
                                    : Date.now()
                                ),
                                "DD MMM YYYY"
                              )}
                            </span>
                          )}
                        </div>
                      </PopoverTrigger>
                      <PopoverContent className="w-auto p-0" align="start">
                        <Calendar
                          mode="single"
                          selected={
                            state.returnDate
                              ? new Date(state.returnDate)
                              : new Date(
                                  state.leavingDate
                                    ? state.leavingDate
                                    : Date.now()
                                )
                          }
                          onSelect={(day: any) => {
                            if (day) {
                              dispatch(
                                searchBoat({ returnDate: day.toISOString() })
                              );
                            }
                          }}
                          disabled={(date) => {
                            const leaveDate = new Date(
                              state.leavingDate ? state.leavingDate : Date.now()
                            );
                            return date <= leaveDate;
                          }}
                          initialFocus
                        />
                      </PopoverContent>
                    </Popover>
                  </div>
                </div>
              )}

              <div className="rounded-lg sshadow-sm hadow-sm p-4">
                <div className="text-sm text-gray-500">Penumpang</div>
                <Dialog>
                  <DialogTrigger asChild>
                    <span className="text-lg flex w-full cursor-pointer">
                      {state.adultQuantity} Dewasa, {state.childQuantity} Bayi
                    </span>
                  </DialogTrigger>
                  <DialogContent className="sm:max-w-md">
                    <DialogHeader>
                      <DialogTitle>Atur Jumlah Penumpang</DialogTitle>
                      <DialogDescription>
                        Pastikan jumlah penumpangnya sesuai biar dapat asuransi
                        perjalanan.
                      </DialogDescription>
                    </DialogHeader>
                    <div className="flex flex-col gap-y-5">
                      <div className="flex justify-between gap-x-4">
                        <div>Dewasa</div>
                        <div className="flex flex-row gap-x-5">
                          <button
                            disabled={
                              state.adultQuantity!! === 0 ? true : false
                            }
                            onClick={() =>
                              dispatch(
                                updateQuantities({
                                  adultQuantity: state.adultQuantity - 1,
                                })
                              )
                            }
                          >
                            <svg
                              width="40"
                              height="40"
                              viewBox="0 0 40 40"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <rect
                                width="40"
                                height="40"
                                rx="8"
                                fill="#D9D9D9"
                              />
                              <g clipPath="url(#clip0_4427_9165)">
                                <path
                                  fill-rule="evenodd"
                                  clip-rule="evenodd"
                                  d="M27 21H13C12.45 21 12 20.55 12 20C12 19.45 12.45 19 13 19H27C27.55 19 28 19.45 28 20C28 20.55 27.55 21 27 21Z"
                                  fill="#999999"
                                />
                              </g>
                              <defs>
                                <clipPath id="clip0_4427_9165">
                                  <rect
                                    width="24"
                                    height="24"
                                    fill="white"
                                    transform="translate(8 8)"
                                  />
                                </clipPath>
                              </defs>
                            </svg>
                          </button>
                          <span className="text-lg font-semibold flex items-center">
                            {state.adultQuantity}
                          </span>
                          <button
                            onClick={() =>
                              dispatch(
                                updateQuantities({
                                  adultQuantity: state.adultQuantity + 1,
                                })
                              )
                            }
                          >
                            <svg
                              width="40"
                              height="40"
                              viewBox="0 0 40 40"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <rect
                                width="40"
                                height="40"
                                rx="8"
                                fill="#175399"
                              />
                              <g clipPath="url(#clip0_4427_9171)">
                                <path
                                  d="M26 21H21V26C21 26.55 20.55 27 20 27C19.45 27 19 26.55 19 26V21H14C13.45 21 13 20.55 13 20C13 19.45 13.45 19 14 19H19V14C19 13.45 19.45 13 20 13C20.55 13 21 13.45 21 14V19H26C26.55 19 27 19.45 27 20C27 20.55 26.55 21 26 21Z"
                                  fill="white"
                                />
                              </g>
                              <defs>
                                <clipPath id="clip0_4427_9171">
                                  <rect
                                    width="24"
                                    height="24"
                                    fill="white"
                                    transform="translate(8 8)"
                                  />
                                </clipPath>
                              </defs>
                            </svg>
                          </button>
                        </div>
                      </div>
                      <div className="flex justify-between gap-x-4">
                        <div className="flex flex-col gap-y-[2px]">
                          <span>Anak Anak</span>
                          <span className="text-gray-400/80 text-[13px]">
                            Untuk umur dibawah 3 tahun
                          </span>
                        </div>
                        <div className="flex flex-row gap-x-5">
                          <button
                            disabled={
                              state.childQuantity!! === 0 ? true : false
                            }
                            onClick={() =>
                              dispatch(
                                updateQuantities({
                                  childQuantity: state.childQuantity - 1,
                                })
                              )
                            }
                          >
                            <svg
                              width="40"
                              height="40"
                              viewBox="0 0 40 40"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <rect
                                width="40"
                                height="40"
                                rx="8"
                                fill="#D9D9D9"
                              />
                              <g clipPath="url(#clip0_4427_9165)">
                                <path
                                  fill-rule="evenodd"
                                  clip-rule="evenodd"
                                  d="M27 21H13C12.45 21 12 20.55 12 20C12 19.45 12.45 19 13 19H27C27.55 19 28 19.45 28 20C28 20.55 27.55 21 27 21Z"
                                  fill="#999999"
                                />
                              </g>
                              <defs>
                                <clipPath id="clip0_4427_9165">
                                  <rect
                                    width="24"
                                    height="24"
                                    fill="white"
                                    transform="translate(8 8)"
                                  />
                                </clipPath>
                              </defs>
                            </svg>
                          </button>
                          <span className="text-lg font-semibold flex items-center">
                            {state.childQuantity}
                          </span>
                          <button
                            onClick={() =>
                              dispatch(
                                updateQuantities({
                                  childQuantity: state.childQuantity + 1,
                                })
                              )
                            }
                            disabled={
                              state.childQuantity >= state.adultQuantity
                                ? true
                                : false
                            }
                          >
                            <svg
                              width="40"
                              height="40"
                              viewBox="0 0 40 40"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <rect
                                width="40"
                                height="40"
                                rx="8"
                                fill="#175399"
                              />
                              <g clipPath="url(#clip0_4427_9171)">
                                <path
                                  d="M26 21H21V26C21 26.55 20.55 27 20 27C19.45 27 19 26.55 19 26V21H14C13.45 21 13 20.55 13 20C13 19.45 13.45 19 14 19H19V14C19 13.45 19.45 13 20 13C20.55 13 21 13.45 21 14V19H26C26.55 19 27 19.45 27 20C27 20.55 26.55 21 26 21Z"
                                  fill="white"
                                />
                              </g>
                              <defs>
                                <clipPath id="clip0_4427_9171">
                                  <rect
                                    width="24"
                                    height="24"
                                    fill="white"
                                    transform="translate(8 8)"
                                  />
                                </clipPath>
                              </defs>
                            </svg>
                          </button>
                        </div>
                      </div>
                    </div>
                    <DialogFooter className="sm:justify-start">
                      <DialogClose asChild>
                        <Button
                          type="button"
                          className="flex w-full bg-blue-600 text-white hover:bg-blue-500"
                          variant="secondary"
                        >
                          Simpan
                        </Button>
                      </DialogClose>
                    </DialogFooter>
                  </DialogContent>
                </Dialog>
              </div>
            </div>
            <Button className="w-full mt-7" onClick={handleSubmit}>
              Cari Lagi
            </Button>
          </div>
        </div>
        <div className="grid grid-rows-1 col-span-2 gap-y-5 h-min">
          <div>
            <h3 className="font-semibold text-2xl">
              Ticket Yang Tersedia{" "}
              <span className="text-gray-400/80 text-sm font-normal">
                3 Tiket Tersedia
              </span>
            </h3>
          </div>
          <CardTicketBoat />
          <CardTicketBoat />
        </div>
      </div>
    </div>
  );
};

export default AvailableBoat;
