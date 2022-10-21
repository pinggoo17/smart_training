import mongoose, { Schema } from "mongoose";

const UserSchema = new Schema({
  username: String,
});

UserSchema.statics.findByUsername = function (username) {
  return this.findOne({ username });
};

const User = mongoose.model("User", UserSchema);
export default User;
