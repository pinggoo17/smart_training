import mongoose from "mongoose";

const { Schema } = mongoose;

const CategorySchema = new Schema({
  username: String,
  title: String,
  userParameter: Number,
});

CategorySchema.statics.findByUsername = function (username) {
  return this.find({ username });
};

const Category = mongoose.model("Category", CategorySchema);
export default Category;
