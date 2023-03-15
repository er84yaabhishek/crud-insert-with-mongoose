const mongoose = require("mongoose");
mongoose.connect("mongodb://127.0.0.1:27017/e-com");
const productSchema = new mongoose.Schema({
  name: String,
  price: Number,
  brand: String,
  category: String,
});

const saveInDB = async () => {
  const Product = mongoose.model("products", productSchema);
  let data = new Product({
    name: "marvel",
    price: 500,
    brand: "asus",
    category: "mobile",
  });
  const result = await data.save();
  console.log(result);
};

const updateInDB = async () => {
  const Product = mongoose.model("products", productSchema);
  let data = await Product.updateOne(
    { name: "marvel" },
    {
      $set: { price: 5000, name: "asus rog" },
    }
  );
  console.log(data);
};
//updateInDB();

const deleteInDB = async () => {
  const Product = mongoose.model("products", productSchema);
  let data = await Product.deleteOne({ name: "asus rog" });
  console.log(data);
};

//deleteInDB();

// const findInDB = async () => {
//   const Product = mongoose.model("products", productSchema);
//   let data = await Product.find({ name: "vi8" });
//   console.log(data);
// };

// findInDB();
const findInDB = async () => {
  const Product = mongoose.model("products", productSchema);
  let data = await Product.find({});
  console.log(data);
};

findInDB();
