import User from "../models/User.js";
import Post from "../models/Post.js";

// create new post
export const createPost = async (req, res) => {
  const { desc, img } = req.body;
  const userId = req.user.id;

  try {
    const newPost = new Post({
      userId,
      desc,
      img
    });

    const savedPost = await newPost.save();
    res.status(201).json({
      message: "Post created successfully",
      post: savedPost
    });
  } catch (error) {
    console.error("Create post error:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};
// update post
export const updatePost = async (req, res) => {
  const postId = req.params.id;
  const userId = req.user.id;

  try {
    const post = await Post.findById(postId);
    if (!post) {
      return res.status(404).json({ message: "Post not found" });
    }
    if (post.userId.toString() !== userId && !req.user.isAdmin) {
      return res.status(403).json({ message: "You can only update your own posts" });
    }
    const updatedPost = await Post.findByIdAndUpdate(
      postId,
      { $set: req.body },
      { new: true, runValidators: true }
    );
    res.status(200).json({
      message: "Post updated successfully",
      post: updatedPost
    });
  } catch (error) {
    console.error("Update post error:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};
// delete post
// like post
// get post by id
// get timeline posts
