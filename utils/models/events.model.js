import mongoose from "mongoose";

const eventsSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
    required: true,
  },
  regLink: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
  isActive: {
    type: Boolean,
    default: true,
  },
  eventID: {
    type: String,
    required: true,
    unique: true,
  },
  gallery: {
    type: Array,
    required: true,
  },
});

const Events = mongoose.models.Events || mongoose.model("Events", eventsSchema);

export default Events;
