import mongoose from "mongoose";

const { Schema } = mongoose;

const CategoryItemSchema = new Schema({
  username: String,
  categoryId: String,
  power: Number,
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

const CategoryItem = mongoose.model("CategoryItem", CategoryItemSchema);
export default CategoryItem;
