import React from "react";
import "./Admin.css";
import { NavBarAdmin } from "../../Components/NabBarAdmin/NavBarAdmin";
import { SideBar } from "../../Components/SideBar/SideBar";
import { AddProduct } from "../../Components/AddProduct/AddProduct";
import { ListProduct } from "../../Components/ListProduct/ListProduct";
export const Admin = () => {
  return (
    <>
      <NavBarAdmin />
      <div className="admin">
        <SideBar />
        <AddProduct></AddProduct>
        {/* <ListProduct></ListProduct> */}
      </div>
    </>
  );
};
