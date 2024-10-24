const User = require("../models/user");
const bcrypt =require("bcrypt");

async function createUser(userData) {
    const {name,email,mobileno,password}=userData;
    const hashedPassword= bcrypt.hash(password,10);
    const createUser=new User({
        name,
        email,
        mobileno,
        password,
        activeFlag:"1",
        deleteFlag:"0"

    });

    const savedUser= await createUser.save();
    return savedUser;
    
}

module.exports={ createUser };