import * as React from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select-filter";

interface IFieldSelectionsProps extends SelectionsType {}

type SelectionsType = {
  title: string;
  //   svg: React.ComponentPropsWithoutRef<"svg">;
  onValueChange: (val: string) => void;
  value: string;
  placeholder: string;
  data: region[];
};

type region = {
  value: string;
  name: string;
};

const FieldSelections: React.FunctionComponent<IFieldSelectionsProps> = ({
  data,
  onValueChange,
  placeholder,
  title,
  value,
}) => {
  return (
    <div>
      <div className="text-sm text-gray-500">{title}</div>
      <Select onValueChange={onValueChange} value={value}>
        <SelectTrigger className="w-full shadow-none">
          <SelectValue placeholder={placeholder} />
        </SelectTrigger>
        <SelectContent>
          {data?.map((item, i) => (
            <SelectItem
              key={item.value + i}
              value={item.value}
              className="text-lg font-semibold"
            >
              {item.name}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  );
};

export default FieldSelections;
