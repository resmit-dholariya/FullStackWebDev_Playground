const mongoose = require("mongoose");
const { Schema } = mongoose;

main()
  .then(() => console.log("connection successfull"))
  .catch((err) => console.log(err));

async function main() {
  await mongoose.connect("mongodb://127.0.0.1:27017/relationDemo");
}

const orderSchema = new Schema({
  item: String,
  price: Number,
});

const customerSchema = new Schema({
  name: String,
  orders: [
    {
      type: Schema.Types.ObjectId,
      ref: "Order",
    },
  ],
});

// customerSchema.pre("findOneAndDelete", async () => {
//   console.log("PRE MIDDLEWARE");
// });

customerSchema.post("findOneAndDelete", async (customer) => {
  if (customer.orders.length) {
    let res = await Order.deleteMany({ _id: { $in: customer.orders } });
    console.log(res);
  }
});

const Order = mongoose.model("Order", orderSchema);
const Customer = mongoose.model("Customer", customerSchema);

//Functions
const findCustomer = async () => {
  let result = await Customer.find({}).populate("orders");
  for (res of result) {
    console.log(res);
  }
};

const addCustomer = async () => {
  let newCustomer = new Customer({
    name: "Karan Arjun",
  });
  let newOrder = new Order({
    item: "Pizza",
    price: 1299,
  });
  newCustomer.orders.push(newOrder);
  await newOrder.save();
  await newCustomer.save();

  console.log("Customer added successfully with orders....");
};

const addDemoCust = async () => {
  let demoCust = new Customer({
    name: "Aarav Singh",
  });
  await demoCust.save();
  console.log("Demo Cust Addded Successfully");
};

const deleteCustomer = async () => {
  let data = await Customer.findByIdAndDelete("6624015b55189c3bbed533fa");
  console.log(data);
};

// addCustomer();
// findCustomer();
// addDemoCust();
deleteCustomer();
