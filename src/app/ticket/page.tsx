import * as React from "react";
import NavBar from "../components/containers/navbar";
import { Separator } from "@/components/ui/separator";
import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import CardTicket from "./components/card-ticket";

interface ITicketProps {}

const Ticket: React.FunctionComponent<ITicketProps> = (props) => {
  return (
    <div className="container mx-auto">
      <NavBar />
      <div className="grid md:grid-cols-3 grid-cols-1 md:gap-y-0 gap-y-5 md:gap-x-5 gap-x-0">
        <CardTicket returnDate status="success" />
        <CardTicket status="pending" />
        <CardTicket status="cancel" />
      </div>
    </div>
  );
};

export default Ticket;
