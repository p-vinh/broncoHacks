const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const EventSchema = new Schema({
    name: { type: String, required: true, trim: true },
    description: { type: String, required: true, trim: true },
    picture: { type: String, required: false },
    type: { type: String, trim: true, enum: ["Study", "School", "Club", "ASI"] },
    attendees: [{ type: Schema.Types.ObjectId, ref: "User" }],
    posts: [{ type: Schema.Types.ObjectId, ref: "Post" }],
    meeting_time: { type: String, required: true, trim: true },
    meeting_location: { type: String, required: true, trim: true }
});

module.exports = mongoose.model("Event", EventSchema);