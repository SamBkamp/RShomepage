const express = require("express");
const router = express.Router();
const logic = require("./logic.js");

router.get("/", logic.root);

module.exports = router;
