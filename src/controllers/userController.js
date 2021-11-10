/*const express = require ('express')
const app = express()
const bcrypt = require ('bcrypt')
 
app.use(express.json())
 */
const users = require('../models/userModel');
 

exports.readAllUsers = (req, res) => {
    users.find({}, (error, posts) => {
        if(error){
            res.status(500);
            console.log(error);
            res.end({message: "Erreur serveur."});
        }
        else {
            res.status(200);
            res.json(users);
        }
    });
}
 
exports.createAUser = async (req, res) => {
    // {
    //     title: "Mon premeir article",
    //     content: "toto"
    // }
    let newUser = new User(req.body);

    newUser.save((error, user) => {
        if (error) {
            res.status(500);
            console.log(error);
            res.end({ message: "Erreur serveur." });
        } else {
            try{
                const hashedPassword = await bcrypt.hash(req.body.password, 10)
                const user = { name : req.body.name, password: hashedPassword }
                users.push(user)
                res.status(201).send()
            }
        }
    });
}


/*
app.post('/users', async (req, res) => {
    try{
        const hashedPassword = await bcrypt.hash(req.body.password, 10)
        const user = { name : req.body.name, password: hashedPassword }
        users.push(user)
        res.status(201).send()
    } catch {
        res.status(500).send()
    }
})
 */


exports.readAUser = async (req, res) => {
    user.findById(req.params.user_id, (error, user) => {
        const user = users.find(user => user.name = req.body.name)
        if (user == null) {
            return res.status(400).send ('L\'utilisateur n\'existe pas' ) 
        }
        else {
            try{
                if(await bcrypt.compare(req.body.password, user.password)) {
                  res.send('C\'est bon !')
                } else {
                    res.send('Pas le bon mot de passe !')
                }
              }
        }
    });
}



/*
app.post('/users/login', async (req, res) => {
    const user = users.find(user => user.name = req.body.name)
    if (user == null) {
       return res.status(400).send ('L\'utilisateur n\'existe pas' ) 
    }
    try{
      if(await bcrypt.compare(req.body.password, user.password)) {
        res.send('C\'est bon !')
      } else {
          res.send('Pas le bon mot de passe !')
      }
    } catch{
        res.status(500).send()
    }
})
 */
