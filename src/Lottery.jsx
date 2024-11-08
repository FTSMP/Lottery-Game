import { useState } from "react";
import { genTicket, sum } from "./helper";
import Ticket from "./Ticket";
import Button from "./Button";

export default function Lotter({ n = 3, winCondition }) {
  let [ticket, setTicket] = useState(genTicket(3));
  let isWinning = winCondition(ticket);

  let buyTicket = () => {
    setTicket(genTicket(n));
  };

  return (
    <div>
      <h1>Lootery Game!</h1>
      <Ticket Ticket={ticket} />
      <Button action={buyTicket} />
      <h3>{isWinning && "Congratulation, you won!"}</h3>
    </div>
  );
}
