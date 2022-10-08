const receipt = require("../schemas/Receipt");

const create_receipt = async (req, res) => {
  const { name, owner, paid, amount, status } = req.body;

  try {
    const new_receipt = new receipt({
      name,
      owner,
      paid,
      amount,
      status,
    });

    await new_receipt.save();

    return res.status(200).json({ message: "Successfully Created Receiptp" });
  } catch (error) {}
};

module.exports = {
  create_receipt,
};
