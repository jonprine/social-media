const { Schema, model, SchemaTypes } = require("mongoose");

const UserSchema = new Schema(
  {
    username: {
      type: String,
      unique: true,
      required: true,
      trim: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      match: [/.+\@.+\..+/, "Must use a valid email address"],
    },
    thoughts: [
      {
        type: SchemaTypes.ObjectId,
        ref: "Thought",
      },
    ],
    friends: [
      {
        type: SchemaTypes.ObjectId,
        ref: "User",
      },
    ],
  },
  {
    toJSON: {
      virtuals: true,
    },
    id: false,
  }
);
UserSchema.virtual('friendCount').get(function() {
    // return this.friends.reduce((total, friend) => total + friend + 1, 0);
    return this.friends.length;
  });

// create the User model using the UserSchema
const User = model("User", UserSchema);

// export the User model
module.exports = User;
