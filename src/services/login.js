const bcrypt =require("bcrypt");
const User =require("../models/user");
const {generateToken}=require("../utils/jwtUtils");
const user = require("../models/user");

async function login(email,password) {
    try {
        const existingUser=await user.findOne({email});
        if(!existingUser){
            throw new Error ("User not found");
        }
        const isPasswordValid=bcrypt.compare(password,existingUser.password);
        if(!isPasswordValid){
            throw new Error ("Incorrect Password");
        }
        const token=generateToken(existingUser);
        return token;
    } catch (error) {
        throw new Error("Invaild cred");
    }    
}

module.exports={ login}