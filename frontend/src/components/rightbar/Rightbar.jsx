import { useEffect, useState } from "react";
import "./rightbar.css";
import { FaBirthdayCake } from "react-icons/fa";

const Rightbar = () => {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await fetch("https://jsonplaceholder.typicode.com/users");
        const data = await response.json();
        setUsers(data);
      } catch (error) {
        console.error("Error fetching users:", error);
      }
    };
    fetchUsers();
  }, []);
  return (
    <div className="rightbar">
      <div className="wrapper">
        <div className="birthday-container">
          <FaBirthdayCake className="birthday-icon" />
          <span className="birthday-text">
            <b>Rawda Yasser</b> and <b>3 other friends</b> have a birthday
            today.
          </span>
        </div>
        <div className="ad-container">
          <img
            src="https://images.pexels.com/photos/3184298/pexels-photo
-3184298.jpeg?auto=compress&cs=tinysrgb&w=600"
            alt="Advertisement"
            className="ad-image"
          />
        </div>
        <div className="friend-list-container">
          <h4 className="rightbar-title">Online Friends</h4>
          <ul className="rightbar-friend-list">

            {users.slice(0, 6).map((user) => (
              <li key={user.id} className="rightbar-friend">
                <div className="friend-container">
                  <div className="friend-profile-image-container">
                  <img
                    src={`https://randomuser.me/api/portraits/men/${user.id}.jpg`}
                    alt="Profile"
                    className="rightbar-friend-profile-image"
                  />
                <div className="friend-online-indicator"/>
                  </div>
                  <span className="rightbar-friend-name">
                    {user.name.split(" ")[0]}
                  </span>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>  
    </div>
  );
};

export default Rightbar;
