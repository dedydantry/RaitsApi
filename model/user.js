'use strict';

const mongoose = require('mongoose'),
Schema = mongoose.Schema;

const UserSchema = new Schema({
    username : String,
    email : String,
    name : String,
    role : Number,
    password : String,
    created_at : Date
});

const user = mongoose.model('User', UserSchema);
module.exports = user;