import React from "react";
import "./NavBarAdmin.css";
import navlogo from "../../assets/logo.png";
import navProfile from "../../assets/nav-profile.svg";
export const NavBarAdmin = () => {
  return (
    <div className="NavBarAdmin">
      <div>
        <div className="logo">
          <img src={navlogo} alt="" className="nav-logo" />
          <p className="title">Gamix</p>
        </div>
        <h5>Admin Panel</h5>
      </div>
      <img src={navProfile} alt="" className="nav-profile" />
    </div>
  );
};
