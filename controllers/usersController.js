let myexpress = require('express')
let myRouter = myexpress.Router()

let mymodel = require('../models/usersModel')

//פונקציות שגורמות להמתין
async function getAllUsers() {
    const Items = await mymodel.find({})
    return Items;
}
//פונקצית הוספת משתמש
async function add(user) {
    const Items = await user.save()
    return getAllUsers();
}
//פונקציה שמביאה משתמש לפי קוד ושם
async function getByIdAndPas(name, pas) {
    const Items = await mymodel.find({ name: name, pas: pas })
    return Items;
}
//פונקציות
myRouter.get('/getAll', (req, res) => {
    getAllUsers().then((result) => {

        res.json(result);
    })

})

let myBody = require('body-parser')
myRouter.use(myBody())
myRouter.get('/getByIdAndPas/:name/:pas', (req, res) => {
    getByIdAndPas(req.params.name, req.params.pas).then(r => {
        res.json(r)
    })
})
myRouter.put('/addd', (req, res) => {
    let user = require('../models/usersModel')
    let y = new user({
        name: req.body.name,
        pas: req.body.pas,
        lastName: req.body.lastName,
        email: req.body.email
    })
    add(y).then(r => {
        // console.log(r);
        res.json(r)

    })
})


module.exports = myRouter