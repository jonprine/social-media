const { Schema, model, Types } = require("mongoose");
const moment = require("moment");

const ThoughtSchema = new Schema(
  {
    thoughtText: {
      type: String,
      required: true,
      minlength: [1, 'Thoughts need to be between 1 and 250 characters'],
      maxlength: [250, 'Thoughts need to be between 1 and 250 characters']
    },
    createdAt: {
      type: Date,
      default: Date.now,
      get: (createdAtVal) =>
        moment(createdAtVal).format("MMM DD, YYYY [at] hh:mm a"),
    },
    username: {
      type: String,
      required: true,
    },
    // reactions: [ReactionSchema],
  },
  {
    toJSON: {
      getters: true,
    },
    id: false,
  }
);

const Thought = model('Thought', ThoughtSchema);

module.exports = Thought;