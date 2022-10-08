const user = require("../schemas/User");
const receipt = require("../schemas/Receipt");
const bcrypt = require("bcryptjs");
const { default: mongoose } = require("mongoose");

const sign_up = async (req, res) => {
  const {
    student_name,
    email,
    abbr,
    no_abbr,
    city,
    dept,
    password,
    home_address,
    receipts,
    session,
    hostel_name,
  } = req.body;

  try {
    const existing_user = await user.findOne({ email: email });

    if (existing_user) {
      return res.status(404).json({ message: "user already exist" });
    }

    if (password.length <= 5) {
      return res
        .status(404)
        .json({ message: "Password Length must be more than 5 characters" });
    }

    const hash_password = await bcrypt.hash(password, 12);

    const new_student = new user({
      student_name,
      email,
      state_of_origin: {
        abbr,
        no_abbr,
      },
      city,
      dept,
      password: hash_password,
      home_address,
      receipts,
      session,
      hostel_name,
    });
    await new_student.save();
    res
      .status(200)
      .json({ message: "Successfully Created An Account", new_student });
  } catch (error) {
    if (error) {
      res.json(error);
    }
    console.log(error);
  }
};

const sign_in = async (req, res) => {
  const { email, password } = req.body;

  try {
    const existing_user = await user.findOne({ email: email });

    if (!existing_user) {
      return res
        .status(404)
        .json({ message: "user doesnt exist, Please Create an account" });
    }

    const is_password_correct = bcrypt.compareSync(
      password,
      existing_user.password
    );

    if (!is_password_correct) {
      return res
        .status(404)
        .json({ message: "Please Check your password and try again" });
    }

    res.status(200).json({ message: "Successfully Login" });
  } catch (error) {
    if (error) {
      res.json(error);
    }
    console.log(error);
  }
};
const push_receipts = async (req, res) => {
  const { id } = req.params;

  try {
    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(404).json({ message: "Invalid User" });
    }
    const receipts = await receipt.find();
    const user_data = await user.find({ _id: id });

    console.log(user_data);
    const filtered_receipt = receipts.filter(
      (val) =>
        val.status == `${user_data[0].state_of_origin?.abbr}` ||
        val.status == "all" ||
        val.status == `${user_data[0].dept}`
    );

    const new_data = await user.updateOne(
      { _id: id },
      {
        $addToSet: {
          receipts: filtered_receipt,
        },
      }
    );

    console.log(filtered_receipt);

    res
      .status(200)
      .json({ message: "Successfully Gotten", filtered_receipt, new_data });
  } catch (error) {
    res.json(error);
    console.log(error);
  }
};

module.exports = {
  sign_up,
  sign_in,
  push_receipts,
};
