const bcrypt = require("bcryptjs");
const JWT = require("jsonwebtoken");

const LoginSchema = require("../Modals/LoginModal");

const login = async (req, res) => {
  try {
    const { userName, password } = req.body;
    console.log(userName, password, "!!!!!!!");
    if (!(userName && password)) {
      res.status(400).send("All input is required");
    }
    const user = await LoginSchema.findOne({ userName });
    if (user && (await bcrypt.compare(password, user.password))) {
      const token = JWT.sign(
        {
          user_id: user._id,
          userName,
        },
        process.env.TOKEN_KEY,
        {
          expiresIn: "1h",
        }
      );
      res.status(200).send({ ...user._doc, token });
    }
  } catch (error) {
    console.log(error);
    res.status(500).send(error);
  }
};

const signUp = async (req, res) => {
  try {
    const { userName, password } = req.body;

    if (!(userName && password)) {
      res.status(400).send("All input is required");
    }

    const encryptedPassword = await bcrypt.hash(password, 10);
    req.body.password = encryptedPassword;

    await LoginSchema.insertMany(req.body, (err, data) => {
      if (err) {
        throw err;
      }
      res.status(201).send(req.body);
    });
  } catch (error) {
    console.log(error);
    res.status(500).send(error);
  }
};

module.exports = {
  login,
  signUp,
};
