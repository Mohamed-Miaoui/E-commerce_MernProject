import React from "react";
import "./SideBar.css";
import { Link } from "react-router-dom";
import add_pro_icon from "../../assets/Product_Cart.svg";
import list_pro_icon from "../../assets/Product_list_icon.svg";
export const SideBar = () => {
  return (
    <div className="sidebar">
      <Link to={"/admin/addproduct"} style={{ textDecoration: "none" }}>
        <div className="sidebar-item">
          <img src={add_pro_icon} alt="" />
          <p>add Product</p>
        </div>
      </Link>
      <Link to={"/admin/listproduct"} style={{ textDecoration: "none" }}>
        <div className="sidebar-item">
          <img src={list_pro_icon} alt="" />
          <p>Product List</p>
        </div>
      </Link>
    </div>
  );
};
