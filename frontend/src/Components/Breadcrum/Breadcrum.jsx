import React from "react";
import "./Breadcrum.css";
import arrow_icon from "../Assets/breadcrum_arrow.png";
//used in Product page for product details
export const Breadcrum = (props) => {
  const { product } = props;
  return (
    <div className="breadcrum">
      HOME <img src={arrow_icon} alt="" />
      Shop <img src={arrow_icon} alt="" /> {product.category}{" "}
      <img src={arrow_icon} alt="" />
      {product.name}
    </div>
  );
};
