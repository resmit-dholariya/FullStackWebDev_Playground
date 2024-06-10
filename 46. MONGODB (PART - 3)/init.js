const mongoose = require("mongoose");
const Chat = require("./models/chat.js");

main()
  .then(() => {
    console.log("connection successfull");
  })
  .catch((err) => {
    console.log(err);
  });

async function main() {
  await mongoose.connect("mongodb://127.0.0.1:27017/whatsapp");
}

let dummyChats = [
  {
    from: "manish",
    to: "happy",
    msg: "send me imp for the next exam",
    created_at: new Date(),
  },
  {
    from: "john",
    to: "catalyn",
    msg: "Hey, how's it going?",
    created_at: new Date(),
  },
  {
    from: "maeve",
    to: "arya",
    msg: "Can you help me with my homework?",
    created_at: new Date(),
  },
  {
    from: "tyrion",
    to: "sansa",
    msg: "Let's meet up for coffee!",
    created_at: new Date(),
  },
  {
    from: "brandon",
    to: "cersei",
    msg: "Did you watch the latest episode?",
    created_at: new Date(),
  },
  {
    from: "jorah",
    to: "daenerys",
    msg: "Happy birthday! 🎉",
    created_at: new Date(),
  },
  {
    from: "samwell",
    to: "gilly",
    msg: "I found an interesting book for you.",
    created_at: new Date(),
  },
  {
    from: "arya",
    to: "jaqen",
    msg: "Valar Morghulis",
    created_at: new Date(),
  },
  {
    from: "sandor",
    to: "sansa",
    msg: "How's Winterfell these days?",
    created_at: new Date(),
  },
  {
    from: "robb",
    to: "talisa",
    msg: "Missing you. When are you coming back?",
    created_at: new Date(),
  },
];

Chat.insertMany(dummyChats);
