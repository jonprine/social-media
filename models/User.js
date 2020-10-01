const { Schema, model } = require('mongoose');

const UserSchema = new Schema({
    userName: {
        type: String,
        unique: true,
        required: 'Username is required',
        trim: true,
     },
    email: {
        type: String,
        required: true,
        unique: true,
        match: [/.+\@.+\..+/, 'Must use a valid email address']
    }

})