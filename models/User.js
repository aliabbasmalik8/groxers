const mongoose = require("mongoose");
const Schema = mongoose.Schema;
// Create Schema
const UserSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  isActive: {
    type: Boolean,
    default: true, 
  },
  userType: {
    type: String,
    default: "user"
  },
  date: {
    type: Date,
    default: Date.now
  }
});
module.exports = User = mongoose.model("users", UserSchema);