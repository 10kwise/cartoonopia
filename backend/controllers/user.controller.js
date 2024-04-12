const { response } = require('express');
const User = require('../models/User.model.js');
const char  = require('../models/character.model.js');
const bcrypt = require('bcrypt');
const path = require('path');


const loginuser = async (req,res) => {
  try {
    const {email, password} = req.body;
    const user = await User.findOne({ email: email });

    if (user && (await bcrypt.compare(password, user.password))) {
      res.redirect('/addcharpage');
    } else {
      res.status(401).json({message: 'invalid credentials'});
    }
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Internal Server Error');
  }
};

const register = async (req, res) => {
  try {
    const saltRounds = 10;
    const { firstname, lastname, email, password } = req.body;
    //make the hash password asynncronous
    const hashedPassword = await new Promise((resolve, reject) => {
      bcrypt.hash(password, saltRounds, function(err, hash) {
        if (err) reject(err);
        resolve(hash);
      });
    });
    const newuser = new User({ firstname, lastname, email, password: hashedPassword });
    await User.create(newuser);
    const filePath = path.join(__dirname, '..', '..', 'frontend', 'sighnup.in.html');
    res.redirect('/');
  } catch (err) {
    console.log(err);
    res.status(500).send(err.message);
  }
};

//creates a character for the database
const createchar = async (req, res) => {
  try {
    const { id, active, name, subtitle, description, image, strength, speed, skill, fear_factor, power, intelligence, wealth } = req.body;
    const character = new char({ id, active, name, subtitle, description, image, strength, speed, skill, fear_factor, power, intelligence, wealth });
    await char.create(character);
    res.redirect('/addcharpage');
  } catch (err) {
    console.log(err);
    res.status(500).send(err.message);
  }
};

const getaddcharpage = (req, res) => {
  const filePath = path.join(__dirname, '..', '..', 'frontend', 'addchar.html');
  res.sendFile(filePath);
};


module.exports = {
  loginuser,
  register,
  createchar,
  getaddcharpage
};












//my older code

// const { response } = require('express');
// const User = require('../models/User.model.js');
// const char  = require('../models/character.model.js');
// const bcrypt = require('bcrypt');
// const path = require('path');


// const loginuser = async (req,res) =>{
//     try {
//         const {email, password} = req.body;
//         // const user = await User.findOne({email});
//         // await bcrypt.genSalt(10);
//         // if(!user ||await !bcrypt.compare(password,user.password)){
//         //     return res.status(401).json({message: 'invalid credentials'});
//         // }
//         // res.redirect('/addcharpage');
//         User.findOne({ email: email }, (err, user) => {
//             if (user) {bcrypt.compare(user.password, password ,(err , match) => {
//                 if(match){res.redirect('/addcharpage');}

//                 else{res.status(401).json({message: 'invalid credentials'});}
//                 });             
//             }
//             } 
//             else {
//               res.send({ message: "User not registered" });
//             }
//         });
//       } catch (err) {
//         console.error(err.message);
//         res.status(500).send('Internal Server Error');
//       }

// };

// const register = async (req, res) => {
//     try{
//         const saltRounds =10
//         const { firstname, lastname, email, password} = req.body;
//         const hashedPassword = await new Promise((resolve, reject) => {
//             bcrypt.hash(password, saltRounds, function(err, hash) {
//                 if (err) reject(err)
//                 resolve(hash)
//             });
//         })
//         const newuser = new User({firstname:firstname, lastname:lastname, email: email, password: hashedPassword });
//         await User.create(newuser);
//         const filePath = path.join(__dirname, '..','..','frontend', 'sighnup.in.html');
//         res.redirect('/');
//     }
//     catch(err){
//         console.log(err);
//         res.status(500).send(err.message);

//     };
// };

// const createchar =  async (req, res) => {
//     try {
//         const {
//             id,
//             active,
//             name,
//             subtitle,
//             description,
//             image,
//             strength,
//             speed,
//             skill,
//             fear_factor,
//             power,
//             intelligence,
//             wealth
//         } = req.body;
//         const character = new char({id:id,active:active,name:name, subtitle:subtitle, description:description, image:image, strength:strength,speed:speed,skill:skill,fear_factor:fear_factor, power:power,intelligence:intelligence,wealth:wealth});
//         await char.create(character);
//         res.redirect('/addcharpage');

//     }
//     catch(err){
//         console.log(err);
//         res.status(500).send(err.message);
//     };
// };
// const getaddcharpage = (req, res) => {
//     const filePath = path.join(__dirname, '..','..','frontend', 'addchar.html');
//     res.sendFile(filePath);
// };




// module.exports = {
//     loginuser,
//     register,
//     createchar,
//     getaddcharpage
// };

