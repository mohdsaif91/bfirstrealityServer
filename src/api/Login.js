const express = require("express");

const LoginController = require("../Controller/LoginController");

const router = express.Router();

router.post("/login", LoginController.login);
router.post("/signUp", LoginController.signUp);

module.exports = router;
