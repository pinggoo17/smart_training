import mongoose from "mongoose";

const { Schema } = mongoose;

const CategoryItemSchema = new Schema({
  username: String,
  categoryId: String,
  power: Number,
  time: Number,
  date: {
    type: Date,
    default: Date.now,
  },
});

CategoryItemSchema.statics.findByUserCategory = function ({
  username,
  categoryId,
}) {
  return this.find({ username, categoryId });
};

CategoryItemSchema.statics.findbyUserName = function (username) {
  return this.find({ username });
};

const CategoryItem = mongoose.model("CategoryItem", CategoryItemSchema);
export default CategoryItem;
