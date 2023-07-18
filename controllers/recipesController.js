let myexpress = require('express')
let myRouter = myexpress.Router()

let mymodel = require('../models/recipesModel')

//פונקציות שגורמות להמתין
async function getAllRecipes() {
    const Items = await mymodel.find({})
    return Items;
}
//פונקציה שמביאה מתכון לפי שם
async function getByName(name) {
    const Items = await mymodel.find({ name: name })
    return Items;
}
//פונקצית הוספת מתכון
async function add(recipes) {
    const Items = await mymodel.insertMany(recipes)
    return Items;
}
//פונקציה שמוחקת
async function dell(name, nameUser) {
    if (process.env.managerName == name)
        return Items = await mymodel.deleteOne({ name: name })
    else
        return Items = await mymodel.deleteOne({ name: name, nameUser: nameUser })

}
myRouter.get('/getAll', (req, res) => {
    getAllRecipes().then((result) => {

        res.json(result);
    })

})
myRouter.get('/getByName/:name', (req, res) => {
    getByName(req.params.name).then(r => {
        res.json(r)
    })
})
let myBody = require('body-parser')
myRouter.use(myBody())
myRouter.put('/add', (req, res) => {

    let recipe = req.body

    add(recipe).then(r => {
        console.log(r);
        res.json(r)

    })
})
myRouter.get('/dell/:name/:nameUser', (req, res) => {
    dell(req.params.name, req.params.nameUser).then((r) => {
        res.json(r)
    })
})
module.exports = myRouter