const Client = require("../models/client");
const Question = require("../models/question");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const JWT_SECRET = process.env.JWT_SECRET || "jwtkasecret";

function createClient(req, res) {
  const { name, email, password, company, designation } = req.body;
  if (!name || !email || !password || !company || !designation) {
    return res.status(400).send({ msg: "Please fill up all the fields!" });
  }

  Client.findOne({ email }, (err, result) => {
    if (err) {
      return res.status(500).send({ msg: "Internal server error!" });
    }
    if (result) {
      return res.status(400).send({ msg: "Email already exists!" });
    }

    const hashedPassword = bcrypt.hashSync(password, 8);
    const newClient = new Client({
      name,
      email,
      password: hashedPassword,
      company,
      designation,
    });

    newClient.save((err, result) => {
      if (err) {
        return res.status(500).send({ msg: "Internal server error!" });
      } else {
        return res.send({ msg: "Success in creating Client account!" });
      }
    });
  });
}

function allClient(req, res) {
  Client.find({}, (err, result) => {
    if (err) {
      return res.status(400).send({ msg: "Unsuccess in getting clients!" });
    } else {
      return res.send(result);
    }
  });
}

function getClient(req, res) {
  Client.findOne({ email: req.body.email }, (err, result) => {
    if (!result) {
      return res.status(404).send({ msg: "Account doesn't exist!" });
    } else if (err) {
      return res.status(500).send({ msg: "Internal server error!" });
    } else {
      const passwordIsValid = bcrypt.compareSync(
        req.body.password,
        result.password
      );
      if (!passwordIsValid)
        return res.status(400).send({ msg: "Wrong Password!" });

      const token = jwt.sign(
        { id: result._id, isAdmin: result.isAdmin },
        JWT_SECRET
      );
      const { name, isAdmin } = result;
      return res.send({ token, name, isAdmin });
    }
  });
}

module.exports = { allClient, createClient, getClient };
