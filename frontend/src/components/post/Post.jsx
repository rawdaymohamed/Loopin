import { useState } from "react";
import "./post.css";
import { BsThreeDotsVertical } from "react-icons/bs";
import { FaRegHeart, FaHeart } from "react-icons/fa";

const Post = () => {
  const [liked, setLiked] = useState(false);
  const handleLike = () => {
    setLiked(!liked);
  };
  return (
    <div className="post">
      <div className="wrapper">
        {/* post top */}
        <div className="top">
          <div className="top-left">
            <img
              src="https://i.pravatar.cc/100"
              alt="Profile"
              className="post-profile-img"
            />
            <span className="post-username">John Doe</span>
            <span className="post-date">5 mins ago</span>
          </div>
          <div className="top-right">
            <BsThreeDotsVertical className="post-options-icon" />
          </div>
        </div>

        {/* post center */}
        <div className="center">
          <span className="post-text">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </span>
          <img
            src="https://picsum.photos/500/300"
            alt="Post"
            className="post-image"
          />
        </div>

        {/* post bottom */}
        <div className="bottom">
          <div className="bottom-left">
            {liked ? (
              <FaHeart className="like-icon" onClick={handleLike} />
            ) : (
              <FaRegHeart className="like-icon" onClick={handleLike} />
            )}
            <span className="like-count">100 likes</span>
          </div>
          <div className="bottom-right">
            <span className="comment-count">20 comments</span>
          </div>
        </div>

        {/* post right */}
      </div>
    </div>
  );
};

export default Post;
