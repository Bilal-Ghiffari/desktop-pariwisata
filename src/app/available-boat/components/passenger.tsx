import PassengerCounter from "@/app/components/containers/form-filters-boat/field-passenger";
import { IconPassenger } from "@/app/components/containers/form-filters-boat/icons";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { updateQuantities } from "@/lib/features/boatfilterSlice";
import { AppDispatch, RootState } from "@/lib/store";
import { DialogClose } from "@radix-ui/react-dialog";
import * as React from "react";
import { useDispatch, useSelector } from "react-redux";

interface IPassengerProps {}

const Passenger: React.FunctionComponent<IPassengerProps> = (props) => {
  const dispatch = useDispatch<AppDispatch>();
  const { adultQuantity, childQuantity } = useSelector(
    (state: RootState) => state.boatFilter
  );
  return (
    <div className="flex items-center bg-white p-4 rounded-lg shadow-sm">
      <IconPassenger />
      <div>
        <div className="text-sm text-gray-500">Penumpang</div>
        <Dialog>
          <DialogTrigger asChild>
            <span className="text-lg flex w-full cursor-pointer">
              {adultQuantity} Dewasa {childQuantity} Bayi
            </span>
          </DialogTrigger>
          <DialogContent className="sm:max-w-md">
            <DialogHeader>
              <DialogTitle>Atur Jumlah Penumpang</DialogTitle>
            </DialogHeader>
            <div className="flex flex-col gap-y-5">
              <PassengerCounter
                label="Dewasa"
                minQuantity={1}
                quantity={adultQuantity}
                onIncrement={() =>
                  dispatch(
                    updateQuantities({
                      adultQuantity: adultQuantity + 1,
                    })
                  )
                }
                onDecrement={() =>
                  dispatch(
                    updateQuantities({
                      adultQuantity: adultQuantity - 1,
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
                      childQuantity: childQuantity + 1,
                    })
                  )
                }
                onDecrement={() =>
                  dispatch(
                    updateQuantities({
                      childQuantity: childQuantity - 1,
                    })
                  )
                }
                quantity={childQuantity}
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
  );
};

export default Passenger;
