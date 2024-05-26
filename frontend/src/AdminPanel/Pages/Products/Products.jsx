import React from "react";
import { NavBarAdmin } from "../../Components/NabBarAdmin/NavBarAdmin";
import { SideBar } from "../../Components/SideBar/SideBar";
import { ListProduct } from "../../Components/ListProduct/ListProduct";
import "./Products.css";
export const Products = () => {
  return (
    <>
      <NavBarAdmin />
      <div className="admin">
        <SideBar />
        <ListProduct />
      </div>
    </>
  );
};
