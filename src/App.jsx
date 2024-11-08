import "./App.css";
import Lottery from "./Lottery";
import Ticket from "./Ticket";
import { sum } from "./helper";

function App() {
  let winCondition = (Ticket) => {
    return sum(Ticket) === 15;
  };

  let winConditionSameNum = (Ticket) => {
    return Ticket.every((num) => num === Ticket[0]);
  };

  let winConditionFistZero = (Ticket) => {
    return Ticket[0] === 0;
  };

  return (
    <>
      <Lottery n={3} winCondition={winCondition} />
    </>
  );
}

export default App;
