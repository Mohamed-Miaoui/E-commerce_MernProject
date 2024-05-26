import React from "react";
import { CartItems } from "../Components/CartItems/CartItems";
import { NavBar } from "../Components/NavBar/NavBar";
import { Footer } from "../Components/Footer/Footer";

export const Cart = () => {
  return (
    <div>
      <NavBar></NavBar>
      <CartItems></CartItems>
      <Footer></Footer>
    </div>
  );
};
