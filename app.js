let myexpress = require('express')
let myapp = myexpress()
let mycors = require('cors')
myapp.use(mycors())
//טעינת הקונטרולרים
let myUserController = require('./controllers/usersController')
myapp.use('/users', myUserController)
let myRecipesController = require('./controllers/recipesController')
myapp.use('/recipes', myRecipesController)
let myBodyP = require('body-parser')
myapp.use(myBodyP())
let mongoose = require('mongoose')
// myapp.use(myexpress.static('public'));
myapp.use('/images', myexpress.static('public'));

mongoose.connect('mongodb://127.0.0.1:27017/recipe');
myapp.listen(1234, () => {
    console.log("i am runnnn");

})