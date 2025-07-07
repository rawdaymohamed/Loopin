import { useState } from "react";
import "./post.css";
import { BsThreeDotsVertical } from "react-icons/bs";
import { FaRegHeart, FaHeart } from "react-icons/fa";
import { users } from "../../data/users";
const Post = ({ post }) => {
  const [liked, setLiked] = useState(false);
  const handleLike = () => {
    setLiked(!liked);
  };
  const user = users.find((user) => user.id === post.userId);
  return (
    <div className="post">
      <div className="wrapper">
        {/* post top */}
        <div className="top">
          <div className="top-left">
            <img src={user.profilePicture} alt="Profile" className="post-profile-img" />
            <span className="post-username">{user.username}</span>
            <span className="post-date">{post.date}</span>
          </div>
          <div className="top-right">
            <BsThreeDotsVertical className="post-options-icon" />
          </div>
        </div>

        {/* post center */}
        <div className="center">
          {post?.description && (
            <span className="post-text">{post?.description}</span>
          )}
          <img src={post.image} alt="Post" className="post-image" />
        </div>

        {/* post bottom */}
        <div className="bottom">
          <div className="bottom-left">
            {liked ? (
              <FaHeart className="like-icon" onClick={handleLike} />
            ) : (
              <FaRegHeart className="like-icon" onClick={handleLike} />
            )}
            <span className="like-count">{post.likes} likes</span>
          </div>
          <div className="bottom-right">
            <span className="comment-count">{post.comments} comments</span>
          </div>
        </div>

        {/* post right */}
      </div>
    </div>
  );
};

export default Post;
