const express = require("express");
require("dotenv").config();
const cors = require("cors");
const { StatusCodes } = require("http-status-codes");
const PORT = process.env.PORT;
const connectDb = require("./db/connect");

const app = express();

app.use(express.urlencoded({ extended: false }));

app.use(express.json());

app.use(cors());

//api route
app.use("/api/user", require("./routes/userRoute"));

//default path

app.use("**", (req, res) => {
  res
    .status(StatusCodes.SERVICE_UNAVAILABLE)
    .json({ msg: `Requested service path not found`, success: false });
});

//server listen
app.listen(PORT, () => {
  connectDb(); //connected mongo
  console.log(`server is started and running at @http://localhost:${PORT}`);
});
