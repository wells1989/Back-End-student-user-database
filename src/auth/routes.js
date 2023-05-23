const jwt = require("jsonwebtoken");
const express= require('express');
const bcrypt = require('bcrypt');
const pool = require('../../db');

const router = express.Router();

const users = [{ email: "example@gmail.com", password: "123", roles: ["admin", "editor", "viewer"] }];

router.get('/', (req, res) => {
  res.send("Need to log in or register");
})

router.post('/register', async (req, res) => {
    const { email, password, roles } = req.body;

    let user = users.find(u => u.email === req.body.email); 
     if (user) {
        res.send("User already exists!").redirect('/login');
      }
   
    const salt = await bcrypt.genSalt(10);
  
    const hashedPassword = await bcrypt.hash(password, salt);
  
      const newUser = {
        email,
        password: hashedPassword,
        roles: [roles]
      };

      users.push(newUser);

      res.status(201).send(`User created: email address: ${email}, password: ${password}, roles: ${roles}`);
    });
  

router.post('/login', async (req, res) => {

    let user = users.find(u => u.email === req.body.email);
    if (!user) {
        res.send("Invalid email address");
        return res.redirect('/login');
    } 

    const valid = users.find(u => u.password === req.body.password)
    if (!valid) {
        res.send("Invalid password");
        return res.redirect('/login');
    } 

    const token = jwt.sign({
        email: user.email,
        roles: user.roles,
    }, "jwtPrivateKey", { expiresIn: "15m" });

    res.status(200).send({
        ok: true,
        token: token
    });
    return res.redirect('/login')
});

module.exports = router;

