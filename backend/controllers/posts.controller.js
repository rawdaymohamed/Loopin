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
// delete post
// like post
// get post by id
// get timeline posts
