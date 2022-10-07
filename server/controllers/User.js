const user = require("../schemas/User");

const sign_up = async (req, res) => {
  try {
    res.status(200).json("s");
  } catch (error) {
    console.log(error);
  }
};

module.exports = {
  sign_up,
};
