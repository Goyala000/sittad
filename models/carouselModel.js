import mongoose from "mongoose";

const carouselSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: [true, "Please add a title"],
      maxlength: 100,
    },
    image: {
      type: String,
      required: [true, "Please add an image"],
    },
  },
  {
    timestamps: true,
  }
);

export default mongoose.models.Carousel ||
  mongoose.model("Carousel", carouselSchema);
