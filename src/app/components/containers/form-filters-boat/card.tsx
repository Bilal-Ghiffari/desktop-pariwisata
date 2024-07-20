"use client";

import * as React from "react";
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

import { cn } from "@/lib/utils";
import { dateFormat } from "@/utils";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "@/lib/store";
import { searchBoat, updateQuantities } from "@/lib/features/boatfilterSlice";
import { useFiltersBoatActions } from "@/services/filter-boat/state";
import { Switch } from "@/components/ui/switch";

interface ICardFilterBoatProps {}

const CardFilterBoat: React.FunctionComponent<ICardFilterBoatProps> = (
  props
) => {
  const dispatch = useDispatch<AppDispatch>();
  const state = useSelector((state: RootState) => state.boatFilter);
  const { handleOnSubmit } = useFiltersBoatActions();
  const [isSwitch, setIsSwitch] = React.useState<boolean>(false);
  const handleSwitchButton = React.useCallback(() => {
    if (isSwitch) {
      dispatch(searchBoat({ returnDate: "" }));
    }
    setIsSwitch(!isSwitch);
  }, [isSwitch]);

  console.log(state);
  return (
    <div className="max-w-4xl relative z-20 mx-auto mt-10 bg-white shadow-lg rounded-lg p-6 transform -translate-x-6 -translate-y-[13.5rem] top-5 drop-shadow-lg">
      <div className="flex mb-4">
        <button className="px-4 py-2 bg-blue-600 text-white rounded-l-lg focus:outline-none">
          Ferry
        </button>
      </div>
      <div className="grid grid-cols-2 gap-4 mb-4">
        <div className="flex items-center bg-white p-4 rounded-lg shadow-sm">
          <div className="flex items-center justify-center w-12 h-12 bg-blue-100 rounded-full mr-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 text-blue-600"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M3 10h3l3 9 3-18 3 12h3"
              />
            </svg>
          </div>
          <div>
            <div className="text-sm text-gray-500">Berangkat</div>
            <Select
              onValueChange={(val: string) =>
                dispatch(searchBoat({ departure: val }))
              }
              value={state.departure || ""}
            >
              <SelectTrigger className="w-full shadow-none">
                <SelectValue placeholder="Berangkat" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="gilimanuk" className="text-lg font-semibold">
                  Gilimanuk
                </SelectItem>
                <SelectItem value="merak" className="text-lg font-semibold">
                  Merak
                </SelectItem>
                <SelectItem value="bakauheni" className="text-lg font-semibold">
                  Bakauheni
                </SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>
        <div className="flex items-center bg-white p-4 rounded-lg shadow-sm">
          <div className="flex items-center justify-center w-12 h-12 bg-blue-100 rounded-full mr-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 text-blue-600"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M3 10h3l3 9 3-18 3 12h3"
              />
            </svg>
          </div>
          <div>
            <div className="text-sm text-gray-500">Tujuan</div>
            <Select
              onValueChange={(val: string) =>
                dispatch(searchBoat({ arrival: val }))
              }
              value={state.arrival || ""}
            >
              <SelectTrigger className="w-full shadow-none">
                <SelectValue placeholder="Tujuan" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="gilimanuk" className="text-lg font-semibold">
                  Gilimanuk
                </SelectItem>
                <SelectItem value="merak" className="text-lg font-semibold">
                  Merak
                </SelectItem>
                <SelectItem value="bakauheni" className="text-lg font-semibold">
                  Bakauheni
                </SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>
        <div className="flex items-center bg-white p-4 rounded-lg shadow-sm">
          <div className="flex items-center justify-center w-12 h-12 bg-blue-100 rounded-full mr-4">
            <svg
              width="42"
              height="43"
              viewBox="0 0 42 43"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect y="0.5" width="42" height="42" rx="12" fill="#E8EDFF" />
              <g clipPath="url(#clip0_1_68)">
                <path
                  d="M17.3333 20.2777H14.8889V22.7222H17.3333V20.2777ZM22.2222 20.2777H19.7778V22.7222H22.2222V20.2777ZM27.1111 20.2777H24.6667V22.7222H27.1111V20.2777ZM29.5556 11.7222H28.3333V9.27771H25.8889V11.7222H16.1111V9.27771H13.6667V11.7222H12.4444C11.0878 11.7222 10.0122 12.8222 10.0122 14.1666L10 31.2777C10 32.6222 11.0878 33.7222 12.4444 33.7222H29.5556C30.9 33.7222 32 32.6222 32 31.2777V14.1666C32 12.8222 30.9 11.7222 29.5556 11.7222ZM29.5556 31.2777H12.4444V17.8333H29.5556V31.2777Z"
                  fill="#3258E8"
                />
              </g>
              <defs>
                <clipPath id="clip0_1_68">
                  <rect
                    width="32"
                    height="32"
                    fill="white"
                    transform="translate(5 5.5)"
                  />
                </clipPath>
              </defs>
            </svg>
          </div>
          <div>
            <div className="text-sm text-gray-500">Pilih Tanggal Pergi</div>
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
                      dispatch(searchBoat({ leavingDate: day.toISOString() }));
                    }
                  }}
                  disabled={(date) => date < new Date(Date.now())}
                  initialFocus
                />
              </PopoverContent>
            </Popover>
          </div>
          <div className="ml-auto text-center space-y-3">
            <p className="text-gray-400/45 text-[15px]">Pulang Pergi</p>
            <Switch
              id="add as passenger"
              checked={isSwitch}
              onCheckedChange={handleSwitchButton}
            />
          </div>
        </div>
        <div
          className={cn([
            "flex items-center bg-white p-4 rounded-lg shadow-sm",
            !isSwitch && "hidden",
          ])}
        >
          <div className="flex items-center justify-center w-12 h-12 bg-blue-100 rounded-full mr-4">
            <svg
              width="42"
              height="43"
              viewBox="0 0 42 43"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect y="0.5" width="42" height="42" rx="12" fill="#E8EDFF" />
              <g clipPath="url(#clip0_1_68)">
                <path
                  d="M17.3333 20.2777H14.8889V22.7222H17.3333V20.2777ZM22.2222 20.2777H19.7778V22.7222H22.2222V20.2777ZM27.1111 20.2777H24.6667V22.7222H27.1111V20.2777ZM29.5556 11.7222H28.3333V9.27771H25.8889V11.7222H16.1111V9.27771H13.6667V11.7222H12.4444C11.0878 11.7222 10.0122 12.8222 10.0122 14.1666L10 31.2777C10 32.6222 11.0878 33.7222 12.4444 33.7222H29.5556C30.9 33.7222 32 32.6222 32 31.2777V14.1666C32 12.8222 30.9 11.7222 29.5556 11.7222ZM29.5556 31.2777H12.4444V17.8333H29.5556V31.2777Z"
                  fill="#3258E8"
                />
              </g>
              <defs>
                <clipPath id="clip0_1_68">
                  <rect
                    width="32"
                    height="32"
                    fill="white"
                    transform="translate(5 5.5)"
                  />
                </clipPath>
              </defs>
            </svg>
          </div>
          <div>
            <div className="text-sm text-gray-500">Pilih Tanggal Pulang</div>
            <Popover>
              <PopoverTrigger asChild>
                <div className="text-lg">
                  {state.returnDate ? (
                    dateFormat(state.returnDate, "DD MMM YYYY")
                  ) : (
                    <span>
                      {dateFormat(
                        new Date(
                          state.leavingDate ? state.leavingDate : Date.now()
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
                          state.leavingDate ? state.leavingDate : Date.now()
                        )
                  }
                  onSelect={(day: any) => {
                    if (day) {
                      dispatch(searchBoat({ returnDate: day.toISOString() }));
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
        <div className="flex items-center bg-white p-4 rounded-lg shadow-sm">
          <div className="flex items-center justify-center w-12 h-12 bg-blue-100 rounded-full mr-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 text-blue-600"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M5.121 17.121A3 3 0 017.536 18H16.464a3 3 0 012.415-1.415l2.121-2.121M12 3v12m-6 6h12"
              />
            </svg>
          </div>
          <div>
            <div className="text-sm text-gray-500">Penumpang</div>
            <Dialog>
              <DialogTrigger asChild>
                <span className="text-lg flex w-full cursor-pointer">
                  {state.adultQuantity} Dewasa {state.childQuantity} Bayi
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
                        disabled={state.adultQuantity!! === 1 ? true : false}
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
                          <rect width="40" height="40" rx="8" fill="#D9D9D9" />
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
                      <span className="text-lg font-semibold flex items-center w-3">
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
                          <rect width="40" height="40" rx="8" fill="#175399" />
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
                        disabled={state.childQuantity!! === 0 ? true : false}
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
                          <rect width="40" height="40" rx="8" fill="#D9D9D9" />
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
                              re{" "}
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
                      <span className="text-lg font-semibold flex items-center w-3">
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
                      >
                        <svg
                          width="40"
                          height="40"
                          viewBox="0 0 40 40"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <rect width="40" height="40" rx="8" fill="#175399" />
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
      </div>
      <div className="flex justify-end">
        <Button
          onClick={handleOnSubmit}
          className="px-6 py-3 bg-blue-600 text-white rounded-lg focus:outline-none flex items-center"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5 mr-2"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M3 10h3l3 9 3-18 3 12h3"
            />
          </svg>
          Cari Ferry
        </Button>
      </div>
    </div>
  );
};

export default CardFilterBoat;
