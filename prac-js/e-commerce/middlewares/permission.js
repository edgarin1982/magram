const permission = (...allowRoles) =>{
    return (re, res, next) =>{
        const{user} = req;
        if (user && allowRoles.includes(user.type)) {
            return next();
            
        }
        return res.status(403).json({message: 'Forbidden'});
    }

}
module.exports = permission;