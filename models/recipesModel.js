let mongoose = require('mongoose');
let myRecipesSchema = new mongoose.Schema(
    {

        name: String,
        des: String,
        pic: String,
        level: String,
        time: Number,
        numOfManot: Number,
        instructions: String,
        nameUser: String,
        ingredients: [{
            name: String,
            amount: String
        }]


    }
)
//הגדרת חיבור למונגו
let myModel = mongoose.model('ppp', myRecipesSchema, 'recipes');
//י
module.exports = myModel