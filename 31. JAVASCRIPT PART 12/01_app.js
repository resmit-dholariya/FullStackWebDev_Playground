async function greet() {
  //   throw "weak connection";
  return "hello"; //async functio always return a promise
}

greet()
  .then((result) => {
    console.log("promise was resolved");
    console.log("Result was: ", result);
  })
  .catch((err) => {
    console.log("Promise was rejected with err: ", err);
  });

let demo = async () => {
  return 5;
};
console.log(demo());

// Await Keyword
// pauses the execution of its surrounding async function until the promise is settled
// (resolved or rejected)

function getNum() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      let num = Math.floor(Math.random() * 10) + 1;
      console.log(num);
      resolve();
    }, 1000);
  });
}

async function demo1() {
  await getNum();
  await getNum();
  await getNum();
  await getNum();
  getNum();
}
demo1();

// Await Keyword
// Handling Rejections with Await
function colorChange(color) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      let num = Math.floor(Math.random() * 5) + 1;
      if (num > 3) {
        reject("promise rejected");
      } else {
        let h1 = document.querySelector("h1");
        h1.style.color = color;
        console.log(`color changed to ${color}`);
        resolve("color changed");
      }
    }, 1000);
  });
}

// Handling Rejections with Await
async function color() {
  try {
    await colorChange("red");
    await colorChange("green");
    await colorChange("yellow");
    await colorChange("green");
    await colorChange("purple");
    await colorChange("pink");
  } catch (err) {
    console.log("error caught");
    console.log(err);
  }

  let a = 5;
  console.log("a: ", a);
  console.log("a + 3: ", a + 3);
}
color();
