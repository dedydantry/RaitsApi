var Mongoose = require('mongoose');

var db = Mongoose.connect('mongodb://localhost/raitsApi').then(() => console.log('connection with database succeeded'))
    .catch(err => console.error(err));
    
exports.db = db;