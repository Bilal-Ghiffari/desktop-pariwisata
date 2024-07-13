import React from "react";

type ICardProps = Pick<
  React.ComponentPropsWithoutRef<"div">,
  "className" | "children"
>;
type ICardContentProps = Pick<
  React.ComponentPropsWithoutRef<"div">,
  "className" | "children"
>;
type ICardSectionProps = Pick<
  React.ComponentPropsWithoutRef<"div">,
  "className" | "children"
>;
type ICardBadgeProps = Pick<
  React.ComponentPropsWithoutRef<"div">,
  "className" | "children"
>;
type ICardFooterProps = Pick<
  React.ComponentPropsWithoutRef<"div">,
  "className" | "children"
>;

type ICardHeaderProps = Pick<
  React.ComponentPropsWithoutRef<"div">,
  "className" | "children"
> & {
  imageUrl: string;
  imageAlt: string;
  title: string;
};

type ICardTripDetailsProps = Pick<
  React.ComponentPropsWithoutRef<"div">,
  "className" | "children"
>;

type ICardTripDateProps = Pick<
  React.ComponentPropsWithoutRef<"span">,
  "className" | "children"
>;

type ICardTripLocationProps = Pick<
  React.ComponentPropsWithoutRef<"h2">,
  "className" | "children"
>;

const Card = ({ children }: ICardProps) => {
  return (
    <div className="border border-[#1918251A] rounded-[32px] bg-white">
      {children}
    </div>
  );
};

const CardHeader = ({ imageUrl, imageAlt, title }: ICardHeaderProps) => {
  return (
    <div className="flex flex-col px-6 py-8 items-center">
      <img src={imageUrl} alt={imageAlt} width={96} height={96} />
      <span className="text-[#175399] font-medium">{title}</span>
    </div>
  );
};

const TripDetails = ({ children }: ICardTripDetailsProps) => {
  return (
    <div className="flex flex-col gap-[6px] text-[#202020] font-bold">
      {children}
    </div>
  );
};

const TripDate = ({ children }: ICardTripDateProps) => {
  return <span className="text-sm font-bold">{children}</span>;
};

const TripLocation = ({ children }: ICardTripLocationProps) => {
  return <h2 className="text-xl">{children}</h2>;
};

const CardContent = ({ children }: ICardContentProps) => {
  return <div className="flex flex-col px-6 py-8">{children}</div>;
};

const CardSection = ({ children }: ICardSectionProps) => {
  return <div className="mt-12 space-y-6">{children}</div>;
};

const CardFooter = ({ children }: ICardFooterProps) => {
  return (
    <div className="flex justify-between items-end py-8 px-6">{children}</div>
  );
};

export const TripDetail = Object.assign(TripDetails, {
  Date: TripDate,
  Location: TripLocation,
});

export const CardTickets = Object.assign(Card, {
  Header: CardHeader,
  Content: CardContent,
  Section: CardSection,
  Footer: CardFooter,
});
