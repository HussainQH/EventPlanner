const mongoose = require("mongoose");

const { Schema } = mongoose;

const EventSchema = new Schema(
  {
    organizer: { type: String },
    name: { type: String },
    email: { type: String },
    image: { type: String },
    numOfSeats: { type: Number },
    bookedSeats: { type: Number },
    startDate: { type: Date },
    endDate: { type: Date },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Event", EventSchema);
