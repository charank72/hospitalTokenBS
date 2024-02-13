const { StatusCodes } = require("http-status-codes");
const User = require("../model/userModel");

const userController = {
  form: async (req, res) => {
    try {
      const { name, email, mobile, token, gender, role, issue } = req.body;
      let k=0;
      let data = await User.create({
        name,
        email,
        token:k,
        mobile,
        gender,
        role,
        issue,
      });
      res.status(StatusCodes.ACCEPTED).json({
        msg: "Details sent succesfully",
        user: data,
        success: true,
      });
    } catch (err) {
      return res
        .status(StatusCodes.INTERNAL_SERVER_ERROR)
        .json({ msg: err.message, succcess: false });
    }
  },
};

module.exports = userController;
