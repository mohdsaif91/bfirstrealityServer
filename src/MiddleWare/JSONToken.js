const JWT = require("jsonwebtoken");

const Config = process.env;

const tokenFunction = (req, res, next) => {
  const token = req.headers["authorization"];
  console.log(token);
  if (!token) {
    return res.status(403).send("A token is required for authentication");
  }
  try {
    const deCoded = JWT.verify(token, Config.TOKEN_KEY);
    req.user = deCoded;
  } catch (error) {
    console.log(error);
    return res.status(401).send("Invalid Token");
  }
  return next();
};

module.exports = tokenFunction;
