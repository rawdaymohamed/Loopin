import User from '../models/User.js';
import bcrypt from 'bcrypt';
// update user profile
export const updateUserProfile = async (req, res) => {
  const userId = req.params.id;

  if (req.user.id !== userId && !req.user.isAdmin) {
    return res.status(403).json({ message: "You can only update your own profile" });
  }
  try {
    if (req.body.password) {
      const hashedPassword = await bcrypt.hash(req.body.password, 10);
      req.body.password = hashedPassword;
    }
    const updatedUser = await User.findByIdAndUpdate(
      userId,
      { $set: req.body },
      { new: true, runValidators: true }
    );
    if (!updatedUser) {
      return res.status(404).json({ message: "User not found" });
    }
    const { password: _, ...userData } = updatedUser.toObject();
    res.status(200).json({
      message: "Your profile was updated successfully",
      user: userData
    });
  } catch (error) {
    console.error("Update profile error:", error);
    res.status(500).json({ message: "Internal server error" });
  }


};
// delete user profile
// get user profile
// follow user  
// unfollow user