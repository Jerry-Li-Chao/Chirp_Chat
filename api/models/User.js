const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    }
}, { timestamps: true });
// what does timestamps: true do?
// answer: it adds createdAt and updatedAt fields to the schema

const UserModel = mongoose.model('User', UserSchema);
module.exports = UserModel;