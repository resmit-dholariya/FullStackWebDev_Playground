let diceNUm = Math.floor(Math.random() * 6) + 1;
console.log(diceNUm);

const car = {
  name: "Audi",
  Model: 2022,
  color: "Black",
};
console.log(car.name);
console.log(car["name"]);

const person = {
  name: "resmit",
  age: 20,
  city: "Ahmedabad",
};
person.city = "New York";
person.country = "United States";
console.log(person);
