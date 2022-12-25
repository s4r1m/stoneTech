import mongoose from "mongoose";
const Schema = mongoose.Schema;

mongoose.set("strictQuery", true);

let connectionString =
  "mongodb+srv://user:HUIez2Xisa0OICQl@stonetech.68b5op0.mongodb.net/stoneTech?retryWrites=true&w=majority";

//connection to mongoose
mongoose.connect(connectionString, { useNewUrlParser: true }).then(
  () => {
    console.log("Mongoose connected successfully to Mongo DB");
  },
  (error) => {
    console.log("Mongoose could not connected to database: " + error);
  }
);

const inventorySchema = new Schema(
  {
    sku: {
      type: String,
      required: true,
    },
    itemName: {
      type: String,
      required: true,
    },
    stock: {
      type: Number,
      required: true,
    },
    location: {
      type: String,
      required: true,
    },
    cost: {
      type: Number,
      required: true,
    },
    totalCost: {
      type: Number,
      required: true,
    },
    area: {
      type: String,
    },
    manufacturer: {
      type: String,
    },
  },
  { timestamps: true }
);

const Inventory = mongoose.model("inventory", inventorySchema);

export default Inventory;
