import mongoose from "mongoose";

import dotenv from "dotenv";
dotenv.config();

mongoose
  .connect("mongodb://0.0.0.0:27017", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("MongoDb connected ..."))
  .catch((err) => console.log(err));

// console.log(mongodb://localhost:27017);
