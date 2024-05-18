import React from "react";
import "./Offers.css";
import excluisve_image from "../Assets/exclusive_image.png";
export const Offers = () => {
  return (
    <div className="offers">
      <div className="offers-left">
        <h1>excluisve</h1>
        <h1>offers for you</h1>
        <p>only on best sellers products</p>
        <button>Check Now</button>
      </div>
      <div className="offers right">
        <img src={excluisve_image} alt="" />
      </div>
    </div>
  );
};
