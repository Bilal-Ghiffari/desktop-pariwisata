"use client";

import * as React from "react";
import NavBar from "../components/containers/navbar";

// import { Button } from "@/components/ui/button";

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

import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Switch } from "@/components/ui/switch";
import { searchBoat, updateQuantities } from "@/lib/features/boatfilterSlice";
import { AppDispatch, RootState } from "@/lib/store";
import { cn } from "@/lib/utils";
import { useFiltersBoatActions } from "@/services/filter-boat/state";
import { dateFormat } from "@/utils";
import { useDispatch, useSelector } from "react-redux";
import CardTicketBoat from "../components/containers/card-ticket-boat";
import FieldDates from "../components/containers/form-filters-boat/field-dates";
import PassengerCounter from "../components/containers/form-filters-boat/field-passenger";
import FieldSelections from "../components/containers/form-filters-boat/field-selection";
import {
  IconPassenger,
  IconsDate,
  IconsSelection,
} from "../components/containers/form-filters-boat/icons";
import { useRouter } from "next/navigation";
import Footers from "../components/containers/footers";
import Image from "next/image";

interface IAvailableBoatProps {}

const AvailableBoat: React.FunctionComponent<IAvailableBoatProps> = (props) => {
  const dispatch = useDispatch<AppDispatch>();
  const state = useSelector((state: RootState) => state.boatFilter);
  const { handleSubmit } = useFiltersBoatActions();
  const [isSwitch, setIsSwitch] = React.useState<boolean>(false);
  const handleSwitchButton = React.useCallback(() => {
    if (isSwitch) {
      dispatch(searchBoat({ returnDate: "" }));
    }
    setIsSwitch(!isSwitch);
  }, [isSwitch]);

  React.useEffect(() => {
    if (state.returnDate !== "") {
      setIsSwitch(true);
    }
  }, [state.returnDate]);

  const dataRegion = [
    { name: "Gilimanuk", value: "gilimanuk" },
    { name: "Merak", value: "merak" },
    { name: "Nusapeninda", value: "nusapeninda" },
    { name: "Labuan Bajo", value: "LabuanBajo" },
  ];

  return (
    <>
      <div className="container mx-auto">
        <NavBar />
        <h3 className="text-[32px] font-bold text-[#175399] my-16">
          Hasil Pencarian kamu
        </h3>
        <div className="grid grid-rows-1 grid-cols-3 gap-x-10 mb-10">
          <div className="grid grid-rows-1 col-span-1 gap-y-5 h-min">
            {/* <div className="border py-8 px-6 rounded-2xl shadow-md space-y-5">
            dsgfsdgsdfsdfsdf
          </div> */}
          </div>
          <div className="grid grid-rows-1 col-span-2 gap-y-5 h-min">
            <div>
              <h3 className="font-semibold text-2xl">
                Tiket Yang Tersedia{" "}
                <span className="text-gray-400/80 text-sm font-normal">
                  3 Tiket Tersedia
                </span>
              </h3>
            </div>
            <div className="bg-gradient-to-r from-cyan-500 to-blue-500 shadow-lg py-8 px-6 flex flex-col rounded-xl">
              <div className="bg-white/20 py-5 px-8 w-full rounded-xl space-y-3">
                <div className="flex justify-between">
                  <div className="flex flex-row gap-x-5 font-bold items-center text-lg">
                    <h3 className="capitalize">{state?.arrival}</h3>
                    <svg
                      width="9"
                      height="10"
                      viewBox="0 0 9 10"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M0.237793 0H3.4096L8.47568 5L3.4096 10H0.237793L5.3259 5L0.237793 0Z"
                        fill="black"
                      />
                    </svg>
                    <h3 className="capitalize">{state.departure}</h3>
                  </div>
                  <div className="flex flex-row gap-x-3 items-center">
                    <span>
                      {dateFormat(state.leavingDate || "", "ddd DD MMM YYYY")}
                    </span>
                    <Separator orientation="vertical" className="bg-white/20" />
                    <span>{state.passeger} passegers</span>
                    <Separator orientation="vertical" className="bg-white/20" />
                    <span>Regular</span>
                  </div>
                  <div>
                    <Dialog>
                      <DialogTrigger asChild>
                        <Button className="bg-[#175399]">Change search</Button>
                      </DialogTrigger>
                      <DialogContent className="min-w-max">
                        <div className="grid grid-cols-2 gap-4 mb-4">
                          <div className="flex items-center bg-white p-4 rounded-lg shadow-sm">
                            <IconsSelection type="icondeparture" />
                            <FieldSelections
                              data={dataRegion}
                              onValueChange={(val: string) =>
                                dispatch(searchBoat({ departure: val }))
                              }
                              placeholder="Berangkat"
                              title="Berangkat"
                              value={state.departure || ""}
                            />
                          </div>
                          <div className="flex items-center bg-white p-4 rounded-lg shadow-sm">
                            <IconsSelection type="iconarrival" />
                            <FieldSelections
                              data={dataRegion}
                              onValueChange={(val: string) =>
                                dispatch(searchBoat({ arrival: val }))
                              }
                              placeholder="Tujuan"
                              title="Tujuan"
                              value={state.arrival || ""}
                            />
                          </div>
                          <div className="flex items-center bg-white p-4 rounded-lg shadow-sm gap-4">
                            <IconsDate type="leavingdate" />
                            <FieldDates
                              title="Pilih Tanggal Pergi"
                              disabled={(date) => date < new Date(Date.now())}
                              onSelect={(day: any) => {
                                if (day) {
                                  dispatch(
                                    searchBoat({
                                      leavingDate: day.toISOString(),
                                    })
                                  );
                                }
                              }}
                              selected={
                                state.leavingDate
                                  ? new Date(state.leavingDate)
                                  : new Date(Date.now())
                              }
                            >
                              <div className="text-lg">
                                {state.leavingDate ? (
                                  dateFormat(state.leavingDate, "DD MMM YYYY")
                                ) : (
                                  <span>
                                    {dateFormat(
                                      new Date(Date.now()),
                                      "DD MMM YYYY"
                                    )}
                                  </span>
                                )}
                              </div>
                            </FieldDates>

                            <div className="ml-auto text-center space-y-3">
                              <p className="text-gray-400/45 text-[15px]">
                                Pulang Pergi
                              </p>
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
                            <IconsDate type="returndate" />
                            <FieldDates
                              disabled={(date) => {
                                const leaveDate = new Date(
                                  state.leavingDate
                                    ? state.leavingDate
                                    : Date.now()
                                );
                                return date <= leaveDate;
                              }}
                              onSelect={(day: any) => {
                                if (day) {
                                  dispatch(
                                    searchBoat({
                                      returnDate: day.toISOString(),
                                    })
                                  );
                                }
                              }}
                              selected={
                                state.returnDate
                                  ? new Date(state.returnDate)
                                  : new Date(
                                      state.leavingDate
                                        ? state.leavingDate
                                        : Date.now()
                                    )
                              }
                              title="Pilih Tangal Pulang"
                            >
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
                            </FieldDates>
                          </div>
                          <div className="flex items-center bg-white p-4 rounded-lg shadow-sm">
                            <IconPassenger />
                            <div>
                              <div className="text-sm text-gray-500">
                                Penumpang
                              </div>
                              <Dialog>
                                <DialogTrigger asChild>
                                  <span className="text-lg flex w-full cursor-pointer">
                                    {state.adultQuantity} Dewasa{" "}
                                    {state.childQuantity} Bayi
                                  </span>
                                </DialogTrigger>
                                <DialogContent className="sm:max-w-md">
                                  <DialogHeader>
                                    <DialogTitle>
                                      Atur Jumlah Penumpang
                                    </DialogTitle>
                                  </DialogHeader>
                                  <div className="flex flex-col gap-y-5">
                                    <PassengerCounter
                                      label="Dewasa"
                                      minQuantity={1}
                                      quantity={state.adultQuantity}
                                      onIncrement={() =>
                                        dispatch(
                                          updateQuantities({
                                            adultQuantity:
                                              state.adultQuantity + 1,
                                          })
                                        )
                                      }
                                      onDecrement={() =>
                                        dispatch(
                                          updateQuantities({
                                            adultQuantity:
                                              state.adultQuantity - 1,
                                          })
                                        )
                                      }
                                    />
                                    <PassengerCounter
                                      label={
                                        <div className="flex flex-col gap-y-[2px]">
                                          <span>Anak Anak</span>
                                          <span className="text-gray-400/80 text-[13px]">
                                            Untuk umur dibawah 3 tahun
                                          </span>
                                        </div>
                                      }
                                      minQuantity={0}
                                      onIncrement={() =>
                                        dispatch(
                                          updateQuantities({
                                            childQuantity:
                                              state.childQuantity + 1,
                                          })
                                        )
                                      }
                                      onDecrement={() =>
                                        dispatch(
                                          updateQuantities({
                                            childQuantity:
                                              state.childQuantity - 1,
                                          })
                                        )
                                      }
                                      quantity={state.childQuantity}
                                    />
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
                        <DialogFooter>
                          <Button className="w-1/2 py-5 bg-[#175399]">
                            <Image
                              width={20}
                              height={20}
                              src="/images/form-filter-boats/search-button.svg"
                              alt="icon-search"
                              className="mr-2"
                            />
                            Search Ship
                          </Button>
                        </DialogFooter>
                      </DialogContent>
                    </Dialog>
                  </div>
                </div>
              </div>
            </div>
            <CardTicketBoat />
            <CardTicketBoat />
            <CardTicketBoat />
          </div>
        </div>
      </div>
      <Footers />
    </>
  );
};

export default AvailableBoat;
