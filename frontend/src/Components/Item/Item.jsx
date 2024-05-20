import React from "react";
import "./Item.css";
import { Link } from "react-router-dom";

export const Item = (props) => {
  return (
    <div className="item">
      <Link to={"/product/" + props.id}>
        {/* window.scrollTo(0, 0) to scroll to the top when clicking on product */}
        <img
          style={{ width: "350px", height: "400px" }}
          onClick={window.scrollTo(0, 0)}
          src={props.image}
          alt=""
        />
      </Link>
      <p>{props.name}</p>
      <div className="item-prices">
        <div className="item-price-new">${props.new_price}</div>
        <div className="item-price-old">${props.old_price}</div>
      </div>
    </div>
  );
};
