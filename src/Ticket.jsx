import TicketNum from "./TicketNum";
import "./Ticket.css";

export default function Ticket({ Ticket }) {
  return (
    <div className="ticket">
      <p>Ticket</p>
      {Ticket.map((num, idx) => (
        <TicketNum num={num} key={idx} />
      ))}
    </div>
  );
}
