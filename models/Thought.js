const { Schema, model, Types } = require("mongoose");
const moment = require("moment");

const ReactionSchema = new Schema(
    {
      // set custom id to avoid confusion with parent comment's _id field
      reactionId: {
        type: Schema.Types.ObjectId,
        default: () => new Types.ObjectId()
      },
      reactionBody: {
        type: String,
        required: true,
        maxlength: [280, 'Reaction cannot be more than 280 characters']
      },
        username: {
        type: String,
        required: true
      },
      createdAt: {
        type: Date,
        default: Date.now,
        get: createdAtVal => moment(createdAtVal).format('MMM DD, YYYY [at] hh:mm a')
      }
    },
    {
      toJSON: {
        getters: true
      }
    }
  );

const ThoughtSchema = new Schema(
  {
    thoughtText: {
      type: String,
      required: true,
      minlength: [1, 'Thoughts need to be between 1 and 280 characters'],
      maxlength: [280, 'Thoughts need to be between 1 and 280 characters']
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
    reactions: [ReactionSchema],
  },
  {
    toJSON: {
      getters: true,
      virtuals: true
    },
    id: false,
  }
);

ThoughtSchema.virtual('reactionCount').get(function() {
    // return this.reactions.reduce((total, reaction) => total + comment.replies.length + 1, 0);
    return this.reactions.length;
  });

const Thought = model('Thought', ThoughtSchema);

module.exports = Thought;