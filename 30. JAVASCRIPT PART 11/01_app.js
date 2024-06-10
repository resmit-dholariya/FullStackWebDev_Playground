function hello() {
  console.log("inside hello fnx");
  console.log("Hello");
}

function demo() {
  console.log("Calling hello fnx");
  hello();
}

console.log("Calling demo fnx");
demo();
console.log("Done, bye!");

function one() {
  return 1;
}

function two() {
  return one() + one();
}

function three() {
  let ans = two() + one();
  console.log(ans);
}
three();

//asynchronous nature of js code when we use setimeout like functions
//JS is single threaded - one execution at one time
setTimeout(() => {
  console.log("Apna College");
}, 2000); //dont wait for this execution it will execute rest of the code without waiting for this.
setTimeout(() => {
  console.log("Hello world!"); //executes at same time as previous as browser is multi threaded
}, 2000);
console.log("Hello.....");

let h1 = document.querySelector("h1");
// setTimeout(() => {
//   h1.style.color = "red";
// }, 1000);
// setTimeout(() => {
//   h1.style.color = "orange";
// }, 2000);
// setTimeout(() => {
//   h1.style.color = "green";
// }, 3000);

// function changeColor(color, delay) {
//   setTimeout(() => {
//     h1.style.color = color;
//   }, delay);
// }
// changeColor("red", 1000);
// changeColor("orange", 2000);
// changeColor("green", 3000);

function changeColor(color, delay, nextColorChange) {
  setTimeout(() => {
    h1.style.color = color;
    if (nextColorChange) nextColorChange();
  }, delay);
}

//callback hell(nesting of callback)
changeColor("red", 1000, () => {
  changeColor("orange", 1000, () => {
    changeColor("green", 1000, () => {
      changeColor("blue", 1000, () => {
        changeColor("pink", 1000);
      });
    });
  });
});

function savetoDB(data, success, failure) {
  let internetSPeed = Math.floor(Math.random() * 10) + 1;
  //   console.log(internetSPeed);
  if (internetSPeed > 4) {
    success();
  } else {
    failure();
  }
}

savetoDB(
  "apna college",
  () => {
    console.log("Data1 is saved.");
    savetoDB(
      "hello world",
      () => {
        console.log("Data2 is saved.");
        savetoDB(
          "resmit dholariya",
          () => {
            console.log("Data3 is saved.");
          },
          () => {
            console.log("Data3 is not saved.");
          }
        );
      },
      () => {
        console.log("Data2 is not saved.");
      }
    );
  },
  () => {
    console.log("Data1 is not saved.");
  }
);

// Promises;
// resolve & reject;
// The Promise object represents the eventual completion (or failure) of an asynchronous operation
// and its resulting value.
function savetoDB1(data) {
  return new Promise((resolve, reject) => {
    let internetSPeed1 = Math.floor(Math.random() * 10) + 1;
    // console.log(internetSPeed1);
    if (internetSPeed1 > 4) {
      resolve("Success: Data is Saved.");
    } else {
      reject("Failure: Weak connection.");
    }
  });
}
console.log(savetoDB1("1234"));
console.log(savetoDB1("hello123"));
console.log(savetoDB1("data3 to be saved"));

// Promises
// then( ) & catch( )

// let request = savetoDB1("then&catch");
// request
//   .then(() => {
//     console.log("promise was resolved");
//     console.log(request);
//   })
//   .catch(() => {
//     console.log("Promise was rejected");
//     console.log(request);
//   });

savetoDB1("then & catch")
  .then(() => {
    console.log("promise was resolved");
  })
  .catch(() => {
    console.log("promise was rejected");
  });

// Promises - chaining

// savetoDB1("Promise chaining")
//   .then(() => {
//     console.log("data1: saved");
//     savetoDB1("Promise chaing data2").then(() => {
//       console.log("Data2: saved.");
//     });
//   })
//   .catch(() => {
//     console.log("Promise was rejected.");
//   });

// Improved Version
savetoDB1("Promise chaining")
  .then((result) => {
    console.log("data1: saved.");
    console.log("result of promise: ", result);
    return savetoDB1("Promise chaining data2");
  })
  .then((result) => {
    console.log("data2: saved.");
    console.log("result of promise: ", result);
    return savetoDB1("Promise chaining data3");
  })
  .then((result) => {
    console.log("data3: saved.");
    console.log("result of promise: ", result);
  })
  .catch((error) => {
    console.log("Promise was rejected.");
    console.log("result of promise: ", error);
  });

//refactoring old color change code
let h2 = document.querySelector("h2");

function colorChange(color, delay) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (color === "invalidColor") {
        reject("Invalid color specified");
      } else {
        h2.style.color = color;
        resolve("Color changed");
      }
    }, delay);
  });
}

// let req = colorChange("yellow", 1000);
// console.log(req); //shows pending if it is yet to execute

colorChange("red", 1000)
  .then(() => {
    console.log("Red color is implemented.");
    return colorChange("orange", 1000);
  })
  .then(() => {
    console.log("orange color is implemented.");
    return colorChange("green", 1000);
  })
  .then(() => {
    console.log("green color is implemented.");
    return colorChange("blue", 1000);
  })
  .then(() => {
    console.log("blue color is implemented.");
    return colorChange("pink", 1000);
  })
  .then(() => {
    console.log("pink color is implemented.");
  })
  .catch((error) => {
    console.log("error:", error);
    console.log("color is not implemented due to syntax errors.");
  });
