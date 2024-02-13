const { StatusCodes } = require("http-status-codes");
const User = require("../model/userModel");

const readall = async (req, res) => {
  try {
    let userList = await User.find({});
    let users = userList.filter((item) => item.role !== "doctor");
    return res
      .status(StatusCodes.OK)
      .json({ length: users.length, users, success: true });
  } catch (err) {
    return res
      .status(StatusCodes.INTERNAL_SERVER_ERROR)
      .json({ msg: err.message, success: false });
  }
};

module.exports = { readall };
