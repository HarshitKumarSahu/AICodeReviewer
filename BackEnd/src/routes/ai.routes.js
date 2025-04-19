const express = require("express");
const aiController = require("../controllers/ai.controller")

const router = express.Router();

router.post("/get-review", aiController.getReview) // come from controller folder

module.exports = router