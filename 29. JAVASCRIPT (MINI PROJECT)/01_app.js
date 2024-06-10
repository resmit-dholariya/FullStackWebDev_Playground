let div = document.querySelector(".div1");
let ul = document.querySelector(".ul1");
let lis = document.querySelectorAll(".li1");

div.addEventListener("click", function (event) {
  console.log("div was clicked");
});
ul.addEventListener("click", function (event) {
  event.stopPropagation();
  console.log("ul was clicked");
});
for (li of lis) {
  li.addEventListener("click", function (event) {
    event.stopPropagation();
    console.log("li was clicked");
  });
}

let input = document.querySelector("#input");
let btn = document.querySelector("#addTaskBtn");
let ul1 = document.querySelector("#ul2");

btn.addEventListener("click", function () {
  let item = document.createElement("li");
  let deleteBtn = document.createElement("button");
  deleteBtn.innerText = "Delete";
  deleteBtn.classList.add("delete");
  item.innerText = `${input.value} `;

  ul1.appendChild(item);
  item.appendChild(deleteBtn);
  input.value = "";
});

// let delBtns = document.querySelectorAll(".delete");
// for (btn of delBtns) {
//   btn.addEventListener("click", function () {
//     let par = this.parentElement;
//     console.log(par);
//     par.remove();
//   });
// }

//this only workds for existing elements not on added by JS hence we use event delegation
ul1.addEventListener("click", function (event) {
  if (event.target.nodeName == "BUTTON") {
    let listItem = event.target.parentElement;
    listItem.remove();
  }
});
