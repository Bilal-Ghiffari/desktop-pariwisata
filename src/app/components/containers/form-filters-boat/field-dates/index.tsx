import * as React from "react";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { RootState } from "@/lib/store";
import { Calendar } from "@/components/ui/calendar";
import { cn } from "@/lib/utils";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTrigger,
} from "@/components/ui/dialog";
import { DialogTitle } from "@radix-ui/react-dialog";

interface IFieldDatesProps extends DatesType {}

type DatesType = {
  title: string;
  children: React.ReactNode;
  selected: Date;
  onSelect: (day: any) => void;
  disabled: (date: any) => boolean;
};

const FieldDates: React.FunctionComponent<IFieldDatesProps> = ({
  disabled,
  children,
  onSelect,
  selected,
  title,
}) => {
  return (
    <div>
      <div className="text-sm text-gray-500">{title}</div>
      <Popover>
        <PopoverTrigger asChild>{children}</PopoverTrigger>
        <PopoverContent className="w-auto p-0" align="start">
          <Calendar
            mode="single"
            selected={selected}
            onSelect={onSelect}
            disabled={disabled}
            initialFocus
          />
        </PopoverContent>
      </Popover>
    </div>
  );
};

export default FieldDates;
