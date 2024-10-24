const express = require("express");
const franchisee = require("../controllers/franchisee");

const router = express.Router();

router.post("/fregister", franchisee.createFranchisee);
module.exports = router;