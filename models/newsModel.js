import mongoose from "mongoose";

const newsSchema = new mongoose.Schema(
  {
    author: {
      type: String,
      required: [true, "Please add author"],
      maxlength: [50, "Author name cant be more than 50 characters"],
    },
    title: {
      type: String,
      required: [true, "Please add a title"],
      maxlength: [100, "Name can not be more than 100 characters"],
    },
    description: {
      type: String,
      required: [true, "Please add description"],
      maxlength: [5000, "Description can not be more than 5000 characters"],
    },
    image: {
      type: String,
    },
    likes: {
      type: Number,
    },
  },
  {
    timestamps: true,
  }
);

export default mongoose.models.News || mongoose.model("News", newsSchema);
