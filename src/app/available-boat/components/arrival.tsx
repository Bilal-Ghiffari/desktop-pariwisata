import FieldSelections from "@/app/components/containers/form-filters-boat/field-selection";
import { IconsSelection } from "@/app/components/containers/form-filters-boat/icons";
import { searchBoat } from "@/lib/features/boatfilterSlice";
import { AppDispatch, RootState } from "@/lib/store";
import * as React from "react";
import { useDispatch, useSelector } from "react-redux";

export type DataRegionType = {
  name: string;
  value: string;
};

interface IArrivalProps {
  data: DataRegionType[];
}

const Arrival: React.FunctionComponent<IArrivalProps> = ({ data }) => {
  const dispatch = useDispatch<AppDispatch>();
  const { arrival } = useSelector((state: RootState) => state.boatFilter);
  return (
    <div className="flex items-center bg-white p-4 rounded-lg shadow-sm">
      <IconsSelection type="iconarrival" />
      <FieldSelections
        data={data}
        onValueChange={(val: string) => dispatch(searchBoat({ arrival: val }))}
        placeholder="Tujuan"
        title="Tujuan"
        value={arrival || ""}
      />
    </div>
  );
};

export default Arrival;
