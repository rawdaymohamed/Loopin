
import "./topbar.css";
import { IoMdNotificationsOutline } from "react-icons/io";
import { MdOutlineChatBubble } from "react-icons/md";
import { FaUserFriends } from "react-icons/fa";
import { FaSearch } from "react-icons/fa";

const Topbar = () => {
  return (
    <div className="topbar">
      <div className="topbar-left">
        <span className="logo">Loopin</span>
      </div>

      <div className="topbar-center">
        <div className="search-bar">
          <FaSearch className="search-icon" />
          <input type="text" placeholder="Search..." />
        </div>
      </div>

      <div className="topbar-right">
        <div className="topbar-icons">
          <div className="icon">
            <FaUserFriends />
            <span className="badge">2</span>
          </div>
          <div className="icon">
            <MdOutlineChatBubble />
            <span className="badge">5</span>
          </div>
          <div className="icon">
            <IoMdNotificationsOutline />
            <span className="badge">3</span>
          </div>
        </div>
        <img
          src="https://i.pravatar.cc/100"
          alt="Profile"
          className="profile-pic"
        />
      </div>
    </div>
  );
};

export default Topbar;
