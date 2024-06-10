import { useState } from "react";
import "./App.css";
import Lottery from "./Lottery";
import { sum } from "./HelperFn";

function App() {
  //function as prop
  // let winCondition = (ticket) => {
  //   return sum(ticket) === 15;
  // };

  let winCondition = (ticket) => {
    return ticket.every((num) => num === ticket[0]);
  };

  return (
    <>
      <Lottery n={3} winCondition={winCondition} />
    </>
  );
}

export default App;
