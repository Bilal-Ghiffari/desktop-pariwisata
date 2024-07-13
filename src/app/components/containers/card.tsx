import * as React from "react";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";
import { CardTickets, TripDetail } from "./card-ticket";
import { CardContact } from "./card-detail-payment/card-contact";
import { Switch } from "@/components/ui/switch";

interface ICardDetailPaymentProps {
  children: React.ReactNode;
  className: string;
}

interface ICardTicketProps {
  children: React.ReactNode;
}

export const CardTicket: React.FunctionComponent<ICardTicketProps> = (
  props
) => {
  return (
    <CardTickets>
      <CardTickets.Content>
        <CardTickets.Header
          imageUrl="/images/Blue Water Express 1.png"
          imageAlt="Blue Water Express"
          title="Blue Water Express"
        />
        <CardTickets.Section>
          {/* <div className="flex flex-row gap-2 items-center px-4">
            <Badge variant="badgecard">Regular</Badge>
            <Separator className="w-full" />
          </div> */}
          <TripDetail>
            <TripDetail.Date>Senin, 1 Juli 2024</TripDetail.Date>
            <TripDetail.Location>
              Ketapang, Banyuwangi ( 10:45 WIB )
            </TripDetail.Location>
          </TripDetail>
          <div className="flex flex-row gap-x-4">
            <div>
              <svg
                width="6"
                height="51"
                viewBox="0 0 6 51"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M3 0.216146C1.52724 0.216146 0.333333 1.41005 0.333333 2.88281C0.333333 4.35557 1.52724 5.54948 3 5.54948C4.47276 5.54948 5.66667 4.35557 5.66667 2.88281C5.66667 1.41005 4.47276 0.216146 3 0.216146ZM3 50.8828L5.88675 45.8828H0.113249L3 50.8828ZM2.5 2.88281V3.88281H3.5V2.88281H2.5ZM2.5 5.88281L2.5 7.88281H3.5V5.88281H2.5ZM2.5 9.88281V11.8828H3.5V9.88281H2.5ZM2.5 13.8828V15.8828H3.5V13.8828H2.5ZM2.5 17.8828V19.8828H3.5V17.8828H2.5ZM2.5 21.8828V23.8828H3.5L3.5 21.8828H2.5ZM2.5 25.8828L2.5 27.8828H3.5V25.8828H2.5ZM2.5 29.8828V31.8828H3.5V29.8828H2.5ZM2.5 33.8828V35.8828H3.5V33.8828H2.5ZM2.5 37.8828V39.8828H3.5V37.8828H2.5ZM2.5 41.8828L2.5 43.8828H3.5V41.8828H2.5ZM2.5 45.8828V47.8828H3.5V45.8828H2.5Z"
                  fill="#999999"
                />
              </svg>
            </div>
            <div className="flex items-center">
              <span className="text-[#999999] text-[13px] font-normal">
                Estimasi waktu penyebrangan 45 menit
              </span>
            </div>
          </div>
          <TripDetail>
            <TripDetail.Date>Senin, 1 Juli 2024</TripDetail.Date>
            <TripDetail.Location>
              Ketapang, Banyuwangi ( 10:45 WIB )
            </TripDetail.Location>
          </TripDetail>
        </CardTickets.Section>
      </CardTickets.Content>
      <div className="w-full bg-[#E2880029] py-4 px-5 my-5">
        <div className="flex flex-row gap-x-2">
          <svg
            width="14"
            height="15"
            viewBox="0 0 14 15"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M7.00016 0.714844C3.32016 0.714844 0.333496 3.70151 0.333496 7.38151C0.333496 11.0615 3.32016 14.0482 7.00016 14.0482C10.6802 14.0482 13.6668 11.0615 13.6668 7.38151C13.6668 3.70151 10.6802 0.714844 7.00016 0.714844ZM7.00016 8.04818C6.6335 8.04818 6.3335 7.74818 6.3335 7.38151V4.71484C6.3335 4.34818 6.6335 4.04818 7.00016 4.04818C7.36683 4.04818 7.66683 4.34818 7.66683 4.71484V7.38151C7.66683 7.74818 7.36683 8.04818 7.00016 8.04818ZM7.66683 10.7148H6.3335V9.38151H7.66683V10.7148Z"
              fill="#F3761B"
            />
          </svg>
          <span className="text-[13px] text-[#F3761B]">
            Masuk ke pelabuhan (Check-In) sebelum jam{" "}
            <span className="font-bold">10:00 WIB</span>
          </span>
        </div>
      </div>
      <Separator className="mt-16" />
      <CardTickets.Footer>
        <div className="flex flex-col">
          <span className="text-sm text-[#B5B5B5] font-bold">Total Harga</span>
          <span className="text-2xl text-[#D61355] font-bold">IDR 300.000</span>
        </div>
        <Button variant="btncard">Pilih Tiket</Button>
      </CardTickets.Footer>
    </CardTickets>
  );
};

export const CardDetailPayment: React.FunctionComponent<
  ICardDetailPaymentProps
> = ({ children, className }) => {
  return (
    <CardContact>
      <CardContact.Header>
        <div className="bg-[#EDF5FF] rounded-full p-[10px]">
          <svg
            width="12"
            height="12"
            viewBox="0 0 12 12"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M5.99984 6.0013C7.47317 6.0013 8.6665 4.80797 8.6665 3.33464C8.6665 1.8613 7.47317 0.667969 5.99984 0.667969C4.5265 0.667969 3.33317 1.8613 3.33317 3.33464C3.33317 4.80797 4.5265 6.0013 5.99984 6.0013ZM5.99984 7.33463C4.21984 7.33463 0.666504 8.22797 0.666504 10.0013V10.668C0.666504 11.0346 0.966504 11.3346 1.33317 11.3346H10.6665C11.0332 11.3346 11.3332 11.0346 11.3332 10.668V10.0013C11.3332 8.22797 7.77984 7.33463 5.99984 7.33463Z"
              fill="#175399"
            />
          </svg>
        </div>
        <h3 className="text-lg">Detail Kontak</h3>
      </CardContact.Header>
      <Separator className=" text-[#999999] h-[2px] w-full" />
      <CardContact.Content className={className}>
        {children}
      </CardContact.Content>
    </CardContact>
  );
};
