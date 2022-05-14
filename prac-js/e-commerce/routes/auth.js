const express = require('express');
const router = express.Router();
const sequelize = require('../db');
const jwt = require('jasonwebtoken');



router.post('/login', (req, res) =>{
    const {body} = req;
    const user = await sequelize.models.users.findOne({
    where:{
        email: body.email
    }})
    
    if (!user){
        return res.status(401).json({message: 'Unauthorized'});

    }

    if (!user.validPassword(body.password)) {

        return res.status(401).json ({message: 'Invalid credentials'});
        
    }

    const token = jwt.sing({userId: user.id}, 'secretkey',{
        expiresIn: 36000,
    })

    return res.json({
       message: 'Authenticated sucessfully',
       token,
    })
});

router.post('/signup', async (req, res) =>{
    const {body} = req;
    const user = await sequelize.models.users.findOne({
       email: body.email
    })
    
    if (user){
        return res.status(401).json({message: 'this email is already registered'});

    }

      user = await sequelize.models.users.create({
         name: body.name,
         lastname: body.lastname,
         type: body.type,
         email: body.email,
         password: body.password,
         type: 'client', 
          });
          await user.save();
          return res.json({ mesage: 'Created succesfully' });
    });

    

     

    

//registro
//validar si el usuario existe dentro de tu base de datos, en caso de ser verdadero, continuaras con el proceso
//logica de hendlers ojo con las propiedades del usuario
//verificaras en tu base de datos que el usuario haya sido creado corectamente



module.exports = router;