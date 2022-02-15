const express = require("express");

const emojis = require("./emojis");
const login = require("./Login");

const router = new express.Router();

router.get("/", (req, res) => {
  res.json({
    message: "API - 👋🌎🌍🌏",
  });
});

router.use("/emojis", emojis);
router.use("/auth", login);

module.exports = router;
