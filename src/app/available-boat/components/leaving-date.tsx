import FieldDates from "@/app/components/containers/form-filters-boat/field-dates";
import { IconsDate } from "@/app/components/containers/form-filters-boat/icons";
import { Switch } from "@/components/ui/switch";
import { searchBoat } from "@/lib/features/boatfilterSlice";
import { AppDispatch, RootState } from "@/lib/store";
import { dateFormat } from "@/utils";
import * as React from "react";
import { useDispatch, useSelector } from "react-redux";

interface ILeavingDateProps {
  isSwitch: boolean;
  setIsSwitch: React.Dispatch<React.SetStateAction<boolean>>;
}

const LeavingDate: React.FunctionComponent<ILeavingDateProps> = ({
  isSwitch,
  setIsSwitch,
}) => {
  const dispatch = useDispatch<AppDispatch>();
  const { leavingDate, returnDate } = useSelector(
    (state: RootState) => state.boatFilter
  );
  const handleSwitchButton = React.useCallback(() => {
    if (isSwitch) {
      dispatch(searchBoat({ returnDate: "" }));
    }
    setIsSwitch(!isSwitch);
  }, [isSwitch]);

  React.useEffect(() => {
    if (returnDate !== "") {
      setIsSwitch(true);
    }
  }, [returnDate]);
  return (
    <div className="flex items-center bg-white p-4 rounded-lg shadow-sm">
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
        selected={leavingDate ? new Date(leavingDate) : new Date(Date.now())}
      >
        <div className="text-lg">
          {leavingDate ? (
            dateFormat(leavingDate, "DD MMM YYYY")
          ) : (
            <span>{dateFormat(new Date(Date.now()), "DD MMM YYYY")}</span>
          )}
        </div>
      </FieldDates>

      <div className="ml-auto md:ml-0 text-center space-y-3 pl-10">
        <p className="text-gray-400/45 text-[15px]">Pulang Pergi</p>
        <Switch
          id="add as passenger"
          checked={isSwitch}
          onCheckedChange={handleSwitchButton}
        />
      </div>
    </div>
  );
};

export default LeavingDate;
