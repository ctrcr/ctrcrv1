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
  time: {
    type: String,
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
});

const Events = mongoose.models.Events || mongoose.model("Events", eventsSchema);

export default Events;
