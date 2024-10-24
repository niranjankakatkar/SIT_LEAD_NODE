const userService = require("../services/signup");


async function createFranchisee(req, res) {
    try {
      const franchiseeData = req.body;
      const franchisee = await userService.createFranchisee(franchiseeData);
      res
        .status(201)
        .json({
          franchisee: franchisee,
          message: "Franchisee created successfully",
        });
    } catch (error) {
      console.log(error);
      res.status(400).json({ message: error.message });
    }
  }
  
  module.exports = { createFranchisee };
