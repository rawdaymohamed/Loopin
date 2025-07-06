import "./sidebar.css";
import {
  MdOutlineRssFeed,
  MdChat,
  MdSchool,
  MdEventNote,
} from "react-icons/md";
import { FaVideo, FaQuestion } from "react-icons/fa";
import { FaUserGroup, FaBookmark } from "react-icons/fa6";
import { IoMdBriefcase } from "react-icons/io";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="sidebar-wrapper">
        <ul className="sidebar-list">
          <li className="sidebar-list-item">
            <MdOutlineRssFeed className="sidebar-icon" />
            <span className="sidebar-list-item-text">Feed</span>
          </li>
          <li className="sidebar-list-item">
            <MdChat className="sidebar-icon" />
            <span className="sidebar-list-item-text">Chats</span>
          </li>
          <li className="sidebar-list-item">
            <FaVideo className="sidebar-icon" />
            <span className="sidebar-list-item-text">Videos</span>
          </li>
          <li className="sidebar-list-item">
            <FaUserGroup className="sidebar-icon" />
            <span className="sidebar-list-item-text">Groups</span>
          </li>
          <li className="sidebar-list-item">
            <FaBookmark className="sidebar-icon" />
            <span className="sidebar-list-item-text">Bookmarks</span>
          </li>
          <li className="sidebar-list-item">
            <FaQuestion className="sidebar-icon" />
            <span className="sidebar-list-item-text">Questions</span>
          </li>
          <li className="sidebar-list-item">
            <IoMdBriefcase className="sidebar-icon" />
            <span className="sidebar-list-item-text">Jobs</span>
          </li>
          <li className="sidebar-list-item">
            <MdEventNote className="sidebar-icon" />
            <span className="sidebar-list-item-text">Events</span>
          </li>
          <li className="sidebar-list-item">
            <MdSchool className="sidebar-icon" />
            <span className="sidebar-list-item-text">Courses</span>
          </li>
        </ul>
        <button className="sidebar-button">Show More</button>
        <hr className="sidebar-hr" />
        <ul className="sidebar-friend-list">
          <li className="sidebar-friend">
            <img
              src="https://randomuser.me/api/portraits/men/1.jpg"
              alt="Friend"
              className="sidebar-friend-image"
            />
            <span className="sidebar-friend-name">John Doe</span>
          </li>
          <li className="sidebar-friend">
            <img
              src="https://randomuser.me/api/portraits/men/1.jpg"
              alt="Friend"
              className="sidebar-friend-image"
            />
            <span className="sidebar-friend-name">John Doe</span>
          </li>
          <li className="sidebar-friend">
            <img
              src="https://randomuser.me/api/portraits/men/1.jpg"
              alt="Friend"
              className="sidebar-friend-image"
            />
            <span className="sidebar-friend-name">John Doe</span>
          </li>
          <li className="sidebar-friend">
            <img
              src="https://randomuser.me/api/portraits/men/1.jpg"
              alt="Friend"
              className="sidebar-friend-image"
            />
            <span className="sidebar-friend-name">John Doe</span>
          </li>
          <li className="sidebar-friend">
            <img
              src="https://randomuser.me/api/portraits/men/1.jpg"
              alt="Friend"
              className="sidebar-friend-image"
            />
            <span className="sidebar-friend-name">John Doe</span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
