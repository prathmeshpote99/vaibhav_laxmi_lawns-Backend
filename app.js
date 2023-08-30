const mongoose = require("mongoose");
const express = require("express");
const cors = require("cors");
const app = express();

mongoose
  .connect("mongodb://127.0.0.1:27017/lawnsApp")
  .then(console.log("Database connected successfully"))
  .catch((err) => console.log(err));
app.use(express.json());
app.use(cors());

const basePathe = require("./route/lawnsRoute");
app.use("/vaibhavlaxmilawns", basePathe);

app.listen(5050, () => {
  console.log("Server running");
});
