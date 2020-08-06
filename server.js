const express = require("express");
const mongoose = require("mongoose");
const morgan = require("morgan");
const path = require("path");

const app = express();
const PORT = process.env.PORT || 8080;

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/jsapp", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
  useFindAndModify: false,
});

mongoose.connection.on("connected", () => {
  console.log("Mongoose is connected!!!!");
});

// Data parsing
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// HTTP request logger
app.use(morgan("tiny"));

app.use("/api/result", require("./routes/result"));
app.use("/api/question", require("./routes/question"));
app.use("/api/client", require("./routes/client"));
app.use("/api/test", require("./routes/test"));

if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));

  app.all("*", (req, res) => {
    res.sendFile(path.join(__dirname, "client", "build", "index.html"));
  });
}

app.listen(PORT, console.log(`Server is starting at "${PORT}"`));
