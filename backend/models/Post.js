import mongoose from "mongoose";
const PostSchema = new mongoose.Schema({
  userId: {
    type:  mongoose.Schema.Types.ObjectId,
    required: true
  },
  desc: {
    type: String,
    max: 500
  },
  img: {
    type: String
  },
  likes: {
    type: [mongoose.Schema.Types.ObjectId],
    default: []
  }
}, { timestamps: true });

export default mongoose.model("Post", PostSchema);
