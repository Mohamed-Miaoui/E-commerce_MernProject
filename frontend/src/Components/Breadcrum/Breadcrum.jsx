import React, { useState, useEffect } from "react";
import "./Breadcrum.css";
import arrow_icon from "../Assets/breadcrum_arrow.png";
//used in Product page for product details
export const Breadcrum = (props) => {
  const [selectedproduct, setSelectedproduct] = useState("");
  useEffect(() => {
    fetch(`http://localhost:8000/product/productId/${props.productId}`)
      .then((response) => response.json())
      .then((data) => setSelectedproduct(data));
  }, []);
  return (
    <div className="breadcrum">
      HOME <img src={arrow_icon} alt="" />
      Shop <img src={arrow_icon} alt="" /> {selectedproduct.category}{" "}
      <img src={arrow_icon} alt="" />
      {selectedproduct.name}
    </div>
  );
};
