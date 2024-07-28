import FieldDates from "@/app/components/containers/form-filters-boat/field-dates";
import { IconsDate } from "@/app/components/containers/form-filters-boat/icons";
import { searchBoat } from "@/lib/features/boatfilterSlice";
import { AppDispatch, RootState } from "@/lib/store";
import { cn } from "@/lib/utils";
import { dateFormat } from "@/utils";
import * as React from "react";
import { useDispatch, useSelector } from "react-redux";

interface IReturnDateProps {
  isSwitch: boolean;
}

const ReturnDate: React.FunctionComponent<IReturnDateProps> = ({
  isSwitch,
}) => {
  const dispatch = useDispatch<AppDispatch>();
  const { leavingDate, returnDate } = useSelector(
    (state: RootState) => state.boatFilter
  );
  return (
    <div
      className={cn([
        "flex items-center bg-white p-4 rounded-lg shadow-sm",
        !isSwitch && "hidden",
      ])}
    >
      <IconsDate type="returndate" />
      <FieldDates
        disabled={(date) => {
          const leaveDate = new Date(leavingDate ? leavingDate : Date.now());
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
          returnDate
            ? new Date(returnDate)
            : new Date(leavingDate ? leavingDate : Date.now())
        }
        title="Pilih Tangal Pulang"
      >
        <div className="text-lg">
          {returnDate ? (
            dateFormat(returnDate, "DD MMM YYYY")
          ) : (
            <span>
              {dateFormat(
                new Date(leavingDate ? leavingDate : Date.now()),
                "DD MMM YYYY"
              )}
            </span>
          )}
        </div>
      </FieldDates>
    </div>
  );
};

export default ReturnDate;
