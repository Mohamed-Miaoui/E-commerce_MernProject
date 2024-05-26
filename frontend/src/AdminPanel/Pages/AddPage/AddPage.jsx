import React from "react";
import { NavBarAdmin } from "../../Components/NabBarAdmin/NavBarAdmin";
import { SideBar } from "../../Components/SideBar/SideBar";
import { AddProduct } from "../../Components/AddProduct/AddProduct";
import "./AddPage.css";
export const AddPage = () => {
  return (
    <>
      <NavBarAdmin />
      <div className="admin">
        <SideBar />
        <AddProduct />
      </div>
    </>
  );
};
