import { FaFaceSmile, FaImage, FaLocationDot, FaTag } from "react-icons/fa6";
import "./share.css";

const Share = () => {
  return (
    <div className="share">
      <div className="wrapper">
        {/* Share top */}
        <div className="top">
          <img
            src="https://i.pravatar.cc/100"
            alt="User Avatar"
            className="profile-img"
          />
          <textarea placeholder="What's on your mind?" className="textarea" />
        </div>
        <hr className="hr" />
        {/* Share bottom */}
        <div className="bottom">
          <div className="options">
            <div className="option">
              <FaImage className="icon" />
              <span className="option-text">Photo or Video</span>
            </div>
            <div className="option">
              <FaLocationDot className="icon" />
              <span className="option-text">Location</span>
            </div>
  
            <div className="option">
              <FaTag className="icon" />
              <span className="option-text">Tag</span>
            </div>
            <div className="option">
              <FaFaceSmile className="icon" />
              <span className="option-text">Feelings</span>
            </div>
          </div>
        <button className="share-button">Share</button>
        </div>
      </div>
    </div>
  );
};

export default Share;
