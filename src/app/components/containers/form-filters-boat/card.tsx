"use client";

import * as React from "react";

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
import { Switch } from "@/components/ui/switch";
import { searchBoat, updateQuantities } from "@/lib/features/boatfilterSlice";
import { AppDispatch, RootState } from "@/lib/store";
import { cn } from "@/lib/utils";
import { useFiltersBoatActions } from "@/services/filter-boat/state";
import { dateFormat } from "@/utils";
import { useDispatch, useSelector } from "react-redux";
import FieldDates from "./field-dates";
import PassengerCounter from "./field-passenger";
import FieldSelections from "./field-selection";
import { IconPassenger, IconsDate, IconsSelection } from "./icons";
import Image from "next/image";
import { useTranslation } from "react-i18next";

interface ICardFilterBoatProps {}

const CardFilterBoat: React.FunctionComponent<ICardFilterBoatProps> = (
  props
) => {
  const { t } = useTranslation();
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
    { name: "Sanur", value: "sanur" },
    { name: "Merak", value: "merak" },
    { name: "Nusapeninda", value: "nusapeninda" },
    { name: "Labuan Bajo", value: "LabuanBajo" },
  ];
  return (
    <div className="md:max-w-4xl max-w-sm relative z-20 md:mx-auto mt-10 bg-white shadow-lg rounded-lg p-6 transform md:-translate-x-6 translate-x-2 md:-translate-y-[13.5rem] -translate-y-[21.5rem] top-5 drop-shadow-lg">
      <div className="flex mb-4">
        <button className="px-4 py-2 bg-blue-600 text-white rounded-l-lg focus:outline-none">
          {t("hero.card-title-filter")}
        </button>
      </div>
      <div className="grid md:grid-cols-2 grid-cols-1 gap-4 mb-4">
        <div className="flex items-center bg-white p-4 rounded-lg shadow-sm">
          <IconsSelection type="icondeparture" />
          <FieldSelections
            data={dataRegion}
            onValueChange={(val: string) =>
              dispatch(searchBoat({ departure: val }))
            }
            placeholder={t("hero.card-field-1")}
            title={t("hero.card-field-1")}
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
            placeholder={t("hero.card-field-2")}
            title={t("hero.card-field-2")}
            value={state.arrival || ""}
          />
        </div>
        <div className="flex items-center bg-white p-4 rounded-lg shadow-sm">
          <IconsDate type="leavingdate" />
          <FieldDates
            title={t("hero.card-field-3")}
            disabled={(date) => date < new Date(Date.now())}
            onSelect={(day: any) => {
              if (day) {
                dispatch(searchBoat({ leavingDate: day.toISOString() }));
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
                <span>{dateFormat(new Date(Date.now()), "DD MMM YYYY")}</span>
              )}
            </div>
          </FieldDates>
          <div className="ml-auto text-center space-y-3">
            <p className="text-gray-400/70 text-[15px]">Pulang Pergi</p>
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
                state.leavingDate ? state.leavingDate : Date.now()
              );
              return date <= leaveDate;
            }}
            onSelect={(day: any) => {
              if (day) {
                dispatch(searchBoat({ returnDate: day.toISOString() }));
              }
            }}
            selected={
              state.returnDate
                ? new Date(state.returnDate)
                : new Date(state.leavingDate ? state.leavingDate : Date.now())
            }
            title={t("hero.card-field-4")}
          >
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
          </FieldDates>
        </div>
        <div className="flex items-center bg-white p-4 rounded-lg shadow-sm">
          <IconPassenger />
          <div>
            <div className="text-sm text-gray-500">
              {t("hero.card-field-5")}
            </div>
            <Dialog>
              <DialogTrigger asChild>
                <span className="text-lg flex w-full cursor-pointer">
                  {state.adultQuantity} {t("hero.card-field-5-title-1")}{" "}
                  {state.childQuantity} {t("hero.card-field-5-title-2")}
                </span>
              </DialogTrigger>
              <DialogContent className="sm:max-w-md">
                <DialogHeader>
                  <DialogTitle>{t("hero.card-field-5-title")}</DialogTitle>
                  {/* <DialogDescription>
                    Pastikan jumlah penumpangnya sesuai biar dapat asuransi
                    perjalanan.
                  </DialogDescription> */}
                </DialogHeader>
                <div className="flex flex-col gap-y-5 my-5">
                  <PassengerCounter
                    label={t("hero.card-field-5-title-1")}
                    minQuantity={1}
                    quantity={state.adultQuantity}
                    onIncrement={() =>
                      dispatch(
                        updateQuantities({
                          adultQuantity: state.adultQuantity + 1,
                        })
                      )
                    }
                    onDecrement={() =>
                      dispatch(
                        updateQuantities({
                          adultQuantity: state.adultQuantity - 1,
                        })
                      )
                    }
                  />
                  <PassengerCounter
                    label={
                      <div className="flex flex-col gap-y-[2px]">
                        <span>{t("hero.card-field-5-title-2")}</span>
                        <span className="text-gray-400/80 text-[13px]">
                          {t("hero.card-field-5-title-3")}
                        </span>
                      </div>
                    }
                    minQuantity={0}
                    onIncrement={() =>
                      dispatch(
                        updateQuantities({
                          childQuantity: state.childQuantity + 1,
                        })
                      )
                    }
                    onDecrement={() =>
                      dispatch(
                        updateQuantities({
                          childQuantity: state.childQuantity - 1,
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
                      {t("hero.card-field-5-button")}
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
          onClick={handleSubmit}
          className="px-6 py-3 bg-blue-600 text-white rounded-lg focus:outline-none flex items-center"
        >
          <Image
            width={20}
            height={20}
            src="/images/form-filter-boats/search-button.svg"
            alt="icon-search"
            className="mr-2"
          />
          {t("hero.card-field-button")}
        </Button>
      </div>
    </div>
  );
};

export default CardFilterBoat;
