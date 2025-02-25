const express = require("express");
const router = express.Router();
const logic = require("./logic.js");

router.get("/", logic.root);
router.get("/customs", logic.customs);
router.get("/generic", logic.generic);
router.get("/tanks", logic.tanks);

module.exports = router;
