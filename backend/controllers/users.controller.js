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
export const deleteUserProfile = async (req, res) => {
  const userId = req.params.id;

  if (req.user.id !== userId && !req.user.isAdmin) {
    return res.status(403).json({ message: "You can only delete your own profile" });
  }

  try {
    const deletedUser = await User.findByIdAndDelete(userId);
    if (!deletedUser) {
      return res.status(404).json({ message: "User not found" });
    }

    res.status(200).json({ message: "User profile deleted successfully" });
  } catch (error) {
    console.error("Delete profile error:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};

// get user profile
export const getUserProfile = async (req, res) => {
  const userId = req.params.id;

  try {
    const user = await User.findById(userId).select("-password"); // exclude password
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    res.status(200).json({
      message: "User profile fetched successfully",
      user
    });
  } catch (error) {
    console.error("Get profile error:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};


// Follow / Unfollow a user
export const followUnfollowUser = async (req, res) => {
  const targetUserId = req.params.id;
  const currentUserId = req.user.id;

  if (targetUserId === currentUserId) {
    return res.status(400).json({ message: "You cannot follow or unfollow yourself" });
  }

  try {
    const targetUser = await User.findById(targetUserId);
    const currentUser = await User.findById(currentUserId);

    if (!targetUser || !currentUser) {
      return res.status(404).json({ message: "User not found" });
    }

    const isFollowing = currentUser.following.includes(targetUserId);

    if (isFollowing) {
      // Unfollow
      currentUser.following.pull(targetUserId);
      targetUser.followers.pull(currentUserId);
    } else {
      // Follow
      currentUser.following.push(targetUserId);
      targetUser.followers.push(currentUserId);
    }

    await Promise.all([currentUser.save(), targetUser.save()]);

    res.status(200).json({
      message: isFollowing ? "Unfollowed successfully" : "Followed successfully",
      following: currentUser.following,
      followers: targetUser.followers
    });
  } catch (error) {
    console.error("Follow/Unfollow error:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};
