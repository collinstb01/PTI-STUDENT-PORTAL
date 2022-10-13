const create_staff = async (req, res) => {
  try {
    const codes = await code.find();

    let valid_code = code.includes((val) => val === codeentered);

    if (!valid_code) {
      return res.status(200).json({ message: "Code Isnt Valid" });
    }

    // create staff
  } catch (error) {
    res.json({ error: error.message });
    console.log(error);
  }
};
