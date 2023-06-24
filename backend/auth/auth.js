const jwt = require("jsonwebtoken");
require("dotenv").config();
const { blackmodel } = require("../model/black.model");

const auth = async (req, res, next) => {
  let token = req.headers?.authorization;
  console.log(token);
  if (token) {
    const black = await blackmodel.find({ token });

    if (black.length > 0) {
      res.send({ msg: "please login again" });
    } else {
      try {
        const decoded = jwt.verify(token, "openai");
        console.log(decoded);
        req.body.userID = decoded.userID;
        req.body.name = decoded.name;
        req.body.time = new Date();
        next();
      } catch (err) {
        if (err.message === "jwt expired") {
          res.send({ msg: "jwt expired please login" });
        } else {
          res.send(err);
        }
      }
    }
  } else {
    res.send({ msg: "login again" });
  }
};
module.exports = { auth };

// const jwt = require("jsonwebtoken");
// require("dotenv").config();
// const { blackmodel } = require("../model/black.model");

// const auth = async (req, res, next) => {
//   next();
// };
// module.exports = { auth };
