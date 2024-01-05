const Profile = require("../Models/Profile");

exports.getProfileById = async (req, res) => {
  try {
    const userId = req.params.userId;
    const profile = await Profile.findOne({ user: userId }).populate("user");

    if (!profile) {
      return res.status(404).json({ success: false, message: "Profile not found" });
    }

    res.json({ profile, success: true, message: "Profile found" });
  } catch (error) {
    console.error(error.message);
    res.status(500).json({ success: false, message: "Internal Server Error" });
  }
};

exports.updateProfile = async (req, res) => {
  try {
    const userId = req.params.userId;
    const { bio, avatar, social } = req.body;

    const updatedProfile = await Profile.findOneAndUpdate(
      { user: userId },
      { $set: { bio, avatar, social } },
      { new: true, upsert: true } // Добавлен параметр upsert: true
    );

    res.json({ profile: updatedProfile, success: true, message: "Profile updated" });
  } catch (error) {
    console.error(error.message);
    res.status(500).json({ success: false, message: "Internal Server Error" });
  }
};
