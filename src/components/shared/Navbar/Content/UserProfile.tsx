import React from "react";
import { FaUserAlt } from "react-icons/fa";
const UserProfile = () => {
  return (
    <div>
      {/* User Profile Dropdown */}
      <div className="dropdown dropdown-end">
        <div
          tabIndex={0}
          role="button"
          className="btn btn-ghost btn-circle avatar        hover:bg-[#8260dfe5]"
        >
          <FaUserAlt className="w-5 h-5 text-gray-700       hover:text-white     " />
        </div>
        <ul
          tabIndex={0}
          className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
        >
          <li>
            <a className="justify-between">
              Profile
              <span className="badge">New</span>
            </a>
          </li>
          <li>
            <a>Settings</a>
          </li>
          <li>
            <a>Logout</a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default UserProfile;
