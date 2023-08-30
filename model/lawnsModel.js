const mongoose = require("mongoose");

const lawnsScheama = new mongoose.Schema({
  Name: {
    type: String,
    required: true,
  },
  Email: {
    type: String,
    required: true,
  },
  Phone: {
    type: Number,
    required: true,
  },
  Message: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("contactData", lawnsScheama);
