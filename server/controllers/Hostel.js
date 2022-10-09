const hostels = require("../schemas/Hostel");
const receipt = require("../schemas/Receipt");
const user = require("../schemas/User");

const get_hostels = async () => {
  try {
    const hostel_data = await hostels.find();

    res.status(200).json({ message: "Gotten All Hostels", hostel_data });
  } catch (error) {
    res.status(500).json({ error: error.message });
    console.log(error);
  }
};

const create_hostel = async (req, res) => {
  const {
    hostel_name,
    block,
    available,
    occupants,
    no_of_occupants,
    sex,
    location,
    valid_occupant,
  } = req.body;

  try {
    const new_hostel = new hostels({
      hostel_name,
      block,
      available,
      occupants,
      no_of_occupants,
      sex,
      location,
      valid_occupant,
    });
    await new_hostel.save();

    res.status(200).json({ message: "Created Successfully" });
  } catch (error) {
    res.status(500).json({ error: error.message });
    console.log(error);
  }
};

const collect_hostel = async (req, res) => {
  const { id, hostel_id } = req.body;

  try {
    const user_data = await user.findOne({ _id: id });

    const filtered_receipt = user_data.receipts.filter(
      (val) =>
        val.name == "School Fees Receipt" ||
        val.name == "Acceptance Fees Receipt"
    );
    const bool = filtered_receipt.every((val) => val.paid == true);

    if (!bool) {
      return res.status(404).json({
        message: "Please Complete all Your Payments",
        filtered_receipt,
      });
    }

    const data = await hostels.find();

    const bool2 = data.map((val) =>
      val.occupants.includes(user_data.student_name)
    );

    if (bool2.some((val) => val == true)) {
      return res.status(403).json({
        message:
          "Cant Pick Another Hostel, Your Name has been listed in one of the hostels",
      });
    }

    const hostel = await hostels.findOne({ _id: hostel_id });

    // if (hostel.sex == user_data.sex) {
    //    return res.status(404).json({
    //      message: "Please Cant Collect Hostel",
    //      filtered_receipt,
    //    });
    // }

    if (hostel.available == false) {
      return res.status(404).json({
        message: "Cant collect Hostel, Please Pick Another",
      });
    } else {
      await hostels.updateOne(
        { _id: hostel_id },
        {
          $inc: {
            no_of_occupants: 1,
          },
        }
      );
    }

    const new_hostel = await hostels.findOne({ _id: hostel_id });

    if (new_hostel.no_of_occupants == new_hostel.valid_occupant) {
      await hostels.updateOne(
        { _id: hostel_id },
        {
          $set: {
            available: false,
          },
        }
      );
    }

    await hostels.updateOne(
      { _id: hostel_id },
      {
        $push: {
          occupants: user_data.student_name,
        },
      }
    );
    await user.updateOne(
      { _id: id },
      {
        $set: {
          hostel_name: hostel.hostel_name,
        },
      }
    );
    res.status(200).json({ message: "Collected" });
  } catch (error) {
    res.status(500).json({ error: error.message });
    console.log(error);
  }
};

module.exports = {
  get_hostels,
  create_hostel,
  collect_hostel,
};
