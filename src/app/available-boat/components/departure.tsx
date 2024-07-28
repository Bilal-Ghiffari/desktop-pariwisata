import * as React from "react";
import { DataRegionType } from "./Arrival";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "@/lib/store";
import { IconsSelection } from "@/app/components/containers/form-filters-boat/icons";
import FieldSelections from "@/app/components/containers/form-filters-boat/field-selection";
import { searchBoat } from "@/lib/features/boatfilterSlice";

interface IDepartureProps {
  data: DataRegionType[];
}

const Departure: React.FunctionComponent<IDepartureProps> = ({ data }) => {
  const dispatch = useDispatch<AppDispatch>();
  const { departure } = useSelector((state: RootState) => state.boatFilter);
  return (
    <div className="flex items-center bg-white p-4 rounded-lg shadow-sm">
      <IconsSelection type="icondeparture" />
      <FieldSelections
        data={data}
        onValueChange={(val: string) =>
          dispatch(searchBoat({ departure: val }))
        }
        placeholder="Berangkat"
        title="Berangkat"
        value={departure || ""}
      />
    </div>
  );
};

export default Departure;
