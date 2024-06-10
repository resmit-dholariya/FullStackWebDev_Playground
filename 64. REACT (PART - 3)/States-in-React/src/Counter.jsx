import { useState } from "react";

function init() {
  // console.log("Init Called!");
  return Math.floor(Math.random() * 10);
}

export default function Counter() {
  //   let [stateVariable, setStateVariable] = useState(0);
  let [count, setCount] = useState(init);
  // console.log("Component is rendered!");
  // console.log(`Count after re-rendering = ${count}`);

  function incCount() {
    // setCount(count + 1);
    // console.log(`Inside incCount fn, count = ${count}`);

    //using callbacks for values depends on cuurent value
    setCount((currCount) => {
      return currCount + 1;
    });
    setCount((currCount) => {
      return currCount + 1;
    });
    setCount((currCount) => {
      return currCount + 1;
    });

    //by set any constant
    // setCount(30);
  }
  return (
    <>
      <button onClick={incCount}>Count = {count}</button>
    </>
  );
}
