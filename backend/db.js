const mongoose = require("mongoose");
require("dotenv").config();

// Use the .env URL, or fallback to local MongoDB if missing
const mongoURL = process.env.mongoURL || "mongodb://127.0.0.1:27017/e-carry";

const connection = mongoose.connect(mongoURL);

module.exports = {
  connection,
};