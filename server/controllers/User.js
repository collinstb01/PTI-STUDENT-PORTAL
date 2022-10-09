const user = require("../schemas/User");
const receipt = require("../schemas/Receipt");
const bcrypt = require("bcryptjs");
const { default: mongoose, Mongoose } = require("mongoose");
const stripe = require("stripe")(
  "sk_test_51LqkpDBf5tVbYaLvaLMz8RsfXhOdaCFSst29SHzTL4nDUlQYtdh4wQtpFCaOdwVOTumXFP6ch2QOqGUA9GfDKhXh00xKcKrD98"
);

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

    const filtered_receipt = receipts.filter(
      (val) =>
        val.status == `${user_data[0].state_of_origin?.abbr}` ||
        val.status == "all" ||
        val.status == `${user_data[0].dept}` ||
        val.status == `${user_data[0].city}`
    );

    let element;
    for (let i = 0; i < filtered_receipt.length; i++) {
      element = filtered_receipt[i];

      new_data = await user.updateOne(
        { _id: id },
        {
          $addToSet: {
            receipts: element,
          },
        }
      );
    }

    res.status(200).json({ message: "Successfully Pushed" });
  } catch (error) {
    res.json(error);
    console.log(error);
  }
};

const payment = async (req, res) => {
  const { items, id } = req.body;

  try {
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ["card"],
      mode: "payment",
      line_items: items.map((item) => {
        return {
          price_data: {
            currency: "usd",
            product_data: {
              name: item.receipt_name,
            },
            unit_amount: item.amount,
          },
          quantity: 1,
        };
      }),
      success_url: `https://www.youtube.com/watch?v=1r-F3FIONl8&t=815s`,
      cancel_url: `https://www.youtube.com/watch?v=1r-F3FIONl8&t=815s`,
    });

    console.log(session.url);
    res.json({ url: session.url });
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
};

const change_paid_status = async (req, res) => {
  const { items, id } = req.body;

  try {
    const userr = await user.updateOne(
      {
        _id: id,
        "receipts._id": mongoose.Types.ObjectId(items[0]._id),
      },
      {
        $set: { "receipts.$.paid": true },
      }
    );
  } catch (error) {
    console.log(error);
  }
};
module.exports = {
  sign_up,
  sign_in,
  push_receipts,
  payment,
  change_paid_status,
};
