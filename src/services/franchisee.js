const bcrypt = require("bcrypt");
const Franchisee = require("../models/franchisee");

async function createFranchisee(franchiseeData) {
    const { franchisee, oname, email, mobileno, address, password } =
      franchiseeData;
    const hashedPassword = bcrypt.hash(password, 10);
    const createFranchisee = new Franchisee({
      franchisee,
      oname,
      email,
      mobileno,
      address,
      password,
      activeFlag: "1",
      deleteFlag: "0",
    });
  
    const savedFranchisee = await createFranchisee.save();
    return savedFranchisee;
  }
  
  module.exports = { createFranchisee };