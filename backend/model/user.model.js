const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
  name: String,
  city: String,
  email: { type: String, unique: true },
  password: String,
  // NEW FIELD: Determines if this user is the Boss
  isAdmin: { type: Boolean, default: false } 
});

const UserModel = mongoose.model("user", userSchema);

module.exports = {
  UserModel,
};