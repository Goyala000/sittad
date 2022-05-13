import mongoose from "mongoose";

const eventSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, "Please add a title"],
    maxlength: 100,
  },
  description: {
    type: String,
    required: [true, "Please add description"],
    maxlength: 3000,
  },
  date: {
    type: Date,
    min: Date.now(),
    required: true,
  },
  isOutdated: {
    type: Boolean,
    required: true,
    default: false,
  },
});

export default mongoose.models.Event || mongoose.model("Event", eventSchema);
