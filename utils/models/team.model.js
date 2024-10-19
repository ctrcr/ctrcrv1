// utils/models/team.model.js
import mongoose from "mongoose";

const TeamSchema = new mongoose.Schema({
  image: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  isCurrent: {
    type: Boolean,
    required: true,
  },
  memberID: {
    type: Number,
    required: true,
    unique: true,
  },
  index: {
    type: Number,
    required: true,
  },
  position: {
    type: String,
    required: true,
  },
});

const Team = mongoose.models.Team || mongoose.model("Team", TeamSchema);
export default Team;
