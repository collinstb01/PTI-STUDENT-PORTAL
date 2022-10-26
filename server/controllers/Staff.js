const code = require("../schemas/Code");
const staff = require("../schemas/Staff");

const create_staff = async (req, res) => {
  const { codeentered, staff_name, staff_profile_picture, email, id, role } =
    req.body;
  try {
    const codes = await code.find();

    let valid_code = codes.find((val) => val.code == codeentered);

    console.log(valid_code);
    console.log(codes);
    if (!valid_code && valid_code == undefined) {
      return res.status(200).json({ message: "Code Isnt Valid" });
    }

    const staff__data = new staff({
      codeentered,
      staff_name,
      staff_profile_picture,
      email,
      id,
      role,
    });

    await staff__data.save();

    return res
      .status(200)
      .json({ message: "Successfully Created An Account", staff__data });
  } catch (error) {
    res.json({ error: error.message });
    console.log(error);
  }
};

module.exports = { create_staff };
