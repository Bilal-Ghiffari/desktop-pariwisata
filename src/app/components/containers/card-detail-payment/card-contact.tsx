import { cn } from "@/lib/utils";
import * as React from "react";

type ICardContactProps = Pick<
  React.ComponentPropsWithoutRef<"div">,
  "className" | "children"
>;

type ICardContactHeaderProps = Pick<
  React.ComponentPropsWithoutRef<"div">,
  "className" | "children"
>;

type ICardContactFormInputProps = Pick<
  React.ComponentPropsWithoutRef<"div">,
  "className" | "children"
>;

const CardContactContainer: React.FunctionComponent<ICardContactProps> = ({
  children,
}) => {
  return (
    <div className="border border-[#D9D9D9] rounded-2xl h-max">{children}</div>
    // <div className="grid grid-cols-1 gap-y-5 w-1/2">
    // </div>
  );
};

const CardContactHeader: React.FunctionComponent<ICardContactHeaderProps> = ({
  children,
}) => {
  return <div className="flex gap-x-2 flex-row p-6">{children}</div>;
};

const CardContactFormInput: React.FunctionComponent<
  ICardContactFormInputProps
> = ({ children, className }) => {
  return (
    <div className={cn("flex flex-col gap-y-4 px-6 py-10 w-full", className)}>
      {children}
    </div>
  );
};

export const CardContact = Object.assign(CardContactContainer, {
  Header: CardContactHeader,
  Content: CardContactFormInput,
});
