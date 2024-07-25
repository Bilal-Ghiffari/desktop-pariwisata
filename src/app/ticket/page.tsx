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
      <div className="grid md:grid-cols-3 sm:grid-cols-1 gap-x-5">
        <CardTicket returnDate />
        <CardTicket />
      </div>
    </div>
  );
};

export default Ticket;
