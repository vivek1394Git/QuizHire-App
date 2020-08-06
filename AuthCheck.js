const jwt = require("jsonwebtoken");
const JWT_SECRET = process.env.JWT_SECRET || "jwtkasecret";

function verifyToken(req, res, next) {
  const token = req.body.token;
  if (!token) return res.status(401).send({ msg: "No token provided." });

  jwt.verify(token, JWT_SECRET, function (err, decoded) {
    if (err) return res.status(403).send({ msg: "Failed to authenticate token." });

    req.body.clientId = decoded.id;
    req.body.isAdmin = decoded.isAdmin;
    next();
  });
}

module.exports = verifyToken;
