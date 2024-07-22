import Image from "next/image";
import * as React from "react";

interface IPassengerCounterProps extends PassegerCounterType {}

type PassegerCounterType = {
  label: string | React.ReactNode;
  quantity: number;
  minQuantity: number;
  onDecrement: () => void;
  onIncrement: () => void;
};

const PassengerCounter: React.FunctionComponent<IPassengerCounterProps> = ({
  label,
  quantity,
  minQuantity,
  onDecrement,
  onIncrement,
}) => {
  return (
    <div className="flex justify-between gap-x-4">
      <div>{label}</div>
      <div className="flex flex-row gap-x-5">
        <button disabled={quantity === minQuantity} onClick={onDecrement}>
          <Image
            width={40}
            height={40}
            src="/images/form-filter-boats/decrement.svg"
            alt="icon-increment"
          />
        </button>
        <span className="text-lg font-semibold flex items-center w-3">
          {quantity}
        </span>
        <button onClick={onIncrement}>
          <Image
            width={40}
            height={40}
            src="/images/form-filter-boats/increment.svg"
            alt="icon-increment"
          />
        </button>
      </div>
    </div>
  );
};

export default PassengerCounter;
