let mongoose = require('mongoose');
let myUserSchema = new mongoose.Schema(
    {
      //  "_id": String,
        name: String,
        pas: Number,
        lastName: String,
        email: String
    }
)
//הגדרת חיבור למונגו
let myModel = mongoose.model('lll', myUserSchema, 'users');
//י
module.exports = myModel