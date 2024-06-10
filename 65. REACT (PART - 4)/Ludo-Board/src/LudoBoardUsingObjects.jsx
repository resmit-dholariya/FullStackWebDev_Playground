import { useState } from "react";

export default function LudoBoardUsingObjects() {
  let [moves, setMoves] = useState({ blue: 0, red: 0, yellow: 0, green: 0 });

  let updateBlue = () => {
    setMoves((currMoves) => {
      return { ...currMoves, blue: currMoves.blue + 1 };
    });
  };
  let updateRed = () => {
    setMoves((currMoves) => {
      return { ...currMoves, red: currMoves.red + 1 };
    });
  };
  let updateYellow = () => {
    setMoves((currMoves) => {
      return { ...currMoves, yellow: currMoves.yellow + 1 };
    });
  };
  let updateGreen = () => {
    setMoves((currMoves) => {
      return { ...currMoves, green: currMoves.green + 1 };
    });
  };

  return (
    <>
      <h4>Game Begines!</h4>
      <p>Blue Moves = {moves.blue}</p>
      <button onClick={updateBlue} style={{ backgroundColor: "blue" }}>
        +1
      </button>
      <p>Red Moves ={moves.red} </p>
      <button onClick={updateRed} style={{ backgroundColor: "red" }}>
        +1
      </button>
      <p>Yellow Moves ={moves.yellow} </p>
      <button
        onClick={updateYellow}
        style={{ backgroundColor: "yellow", color: "black" }}
      >
        +1
      </button>
      <p>Green Moves = {moves.green}</p>
      <button onClick={updateGreen} style={{ backgroundColor: "green" }}>
        +1
      </button>
    </>
  );
}
