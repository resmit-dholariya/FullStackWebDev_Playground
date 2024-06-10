import { useEffect, useState } from "react";

export default function Counter() {
  let [count, setCount] = useState({ countX: 0, countY: 0 });

  let incCount = (counter) => {
    setCount((prevCount) => {
      return { ...prevCount, [counter]: prevCount[counter] + 1 };
    });
  };

  useEffect(
    function printOnReRender() {
      console.log("This is a side-effect.");
    },
    [count.countX]
  );

  //dependencies in useEffect
  //     [count.countX, count.countY] //applies on selected state Vars --> All (here)
  //     [count.countX] //applies on selected vars
  //     [] //not applied to any one and will not be triggered on any of the re-rendering element

  return (
    <>
      <h2>UseEffect in React</h2>
      <h3 name="countX">CountX = {count.countX}</h3>
      <button
        style={{ backgroundColor: "green" }}
        onClick={() => incCount("countX")}
      >
        +1
      </button>
      <h3 name="countY">CountY = {count.countY}</h3>
      <button
        style={{ backgroundColor: "green" }}
        onClick={() => incCount("countY")}
      >
        +1
      </button>
    </>
  );
}
