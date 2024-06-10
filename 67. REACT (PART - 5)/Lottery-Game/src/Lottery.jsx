import { useState } from "react";
import { genTickets, sum } from "./HelperFn";
import Ticket from "./Ticket";
import Button from "./Button";

export default function Lottery({ n = 3, winCondition }) {
  let [ticket, setTicket] = useState(genTickets(n));
  let isWinning = winCondition(ticket);

  let buyTicket = () => {
    setTicket(genTickets(n));
  };

  return (
    <>
      <h1>Lottery Game!</h1>
      <Ticket ticket={ticket} />

      <Button action={buyTicket} />
      <h3>{isWinning && "Congratulations, You Won!"}</h3>
    </>
  );
}
