const {response} = require('express')
const jwt = require('jsonwebtoken');


const autheticate = (req, res, next) =>{
    const {authorization} = req.headers;
    jwt.verify(authorization, 'secretkey', (err, decoded) =>{
    if (err) return res.status(401).json({message: 'unauthorized'}); 
     console.log(decoded);
     next();
        
    })
}



module.exports = autheticate;
