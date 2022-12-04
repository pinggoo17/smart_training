import mongoose, { Schema } from "mongoose";

const UserSchema = new Schema({
  username: String,
  userLevel: Number,
  userEXP: Number,
  userMoney: Number,
  userWeapon: String,
  userBackImg: String,
});

UserSchema.statics.findByUsername = function (username) {
  return this.findOne({ username });
};

const User = mongoose.model("User", UserSchema);
export default User;
