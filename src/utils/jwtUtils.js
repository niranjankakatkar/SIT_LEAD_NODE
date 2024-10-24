const jwt= require("jsonwebtoken");
const { secretKey }=require("../configuration/jwtConfig");

function generateToken(user){
    const payload={
        id:user._id,
        email:user.email,
        activeFlag: user.activeFlag
    }
    return jwt.sign(payload,secretKey,{expiresIn: "1h"});
};

module.exports={
    generateToken
};