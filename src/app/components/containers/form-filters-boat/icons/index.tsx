import { cn } from "@/lib/utils";
import Image from "next/image";
import React from "react";

type IconsType = {
  type?: "icondeparture" | "iconarrival" | "leavingdate" | "returndate";
} & Pick<React.ComponentPropsWithoutRef<"div">, "className">;

export function IconsSelection({ type, className }: IconsType) {
  return (
    <div
      className={cn([
        "flex items-center justify-center w-12 h-12 bg-blue-100 rounded-full mr-4",
        className,
      ])}
    >
      {type === "icondeparture" && (
        <Image
          width={100}
          height={24}
          src="/images/form-filter-boats/departure.svg"
          alt="icon-departure"
        />
      )}
      {type === "iconarrival" && (
        <Image
          width={100}
          height={24}
          src="/images/form-filter-boats/arrival.svg"
          alt="icon-arrival"
        />
      )}
    </div>
  );
}

export function IconsDate({ type, className }: IconsType) {
  return (
    <div
      className={cn([
        "flex items-center justify-center w-12 h-12 bg-blue-100 rounded-full mr-4",
        className,
      ])}
    >
      {type === "leavingdate" && (
        <Image
          width={100}
          height={43}
          src="/images/form-filter-boats/leavingdate.svg"
          alt="icon-leavingdate"
        />
      )}
      {type === "returndate" && (
        <Image
          width={100}
          height={43}
          src="/images/form-filter-boats/returndate.svg"
          alt="icon-departure"
        />
      )}
    </div>
  );
}

export function IconPassenger({ className }: IconsType) {
  return (
    <div
      className={cn([
        "flex items-center justify-center w-12 h-12 bg-blue-100 rounded-full mr-4",
        className,
      ])}
    >
      <Image
        width={100}
        height={24}
        src="/images/form-filter-boats/passenger.svg"
        alt="icon-passenger"
      />
    </div>
  );
}
