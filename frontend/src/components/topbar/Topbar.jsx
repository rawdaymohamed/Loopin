import { IoHome } from "react-icons/io5";
import "./topbar.css";
import { MdNotifications, MdOutlineChatBubble, MdSearch } from "react-icons/md";

import {FaUser } from "react-icons/fa";

const Topbar = () => {
  return (
    <div className="topbarContainer">
      <div className="topbarLeft">
        <span className="logo" >Loopin</span>
      </div>
      <div className="topbarCenter">
        <div className="searchBar">
          <MdSearch className="searchIcon" />
          <input
            type="text"
            placeholder="Search for friend, post or video"
            className="searchInput"
          />
        </div>
      </div>
      <div className="topbarRight">
        <div className="topbarLinks">
          <span className="topbarLink">Homepage</span>
          <span className="topbarLink">Timeline</span>
        </div>
        <div className="topbarIcons">
          <div className="topbarIconItem">
            <FaUser className="topbarIcon userIcon" />
            <span className="topbarIconBadge">1</span>
          </div>
          <div className="topbarIconItem">
            <MdOutlineChatBubble className="topbarIcon" />
            <span className="topbarIconBadge">1</span>
          </div>
          <div className="topbarIconItem">
            <MdNotifications className="topbarIcon" />
            <span className="topbarIconBadge">1</span>
          </div>
        </div>
        <img
          src="https://images.unsplash.com/photo-1608734265656-f035d3e7bcbf?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGJveXxlbnwwfHwwfHx8MA%3D%3D"
          alt="Profile"
          className="topbarImg"
        />
      </div>
    </div>
  );
};

export default Topbar;
