const cors = require("cors");
const express = require("express");
const app = express();
const userRouter = require("./routes/router");
const port = 5000;

global.__basedir = __dirname;

var corsOptions = {
  origin: "http://localhost:5000"
};

app.use("/api/file", userRouter);

app.use(cors(corsOptions));

app.use(express.urlencoded({ extended: true }));


app.listen(port, () => {
  console.log(`Running at localhost:${port}`);
});