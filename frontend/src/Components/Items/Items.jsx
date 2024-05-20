import React from "react";
import "./Items.css";
import data_product from "../Assets/data";
import { Item } from "../Item/Item";

export const Items = () => {
  return (
    <div className="items">
      <h1>Popular in console & accessories</h1>
      <hr />
      <div className="each-item">
        {data_product.map((item, i) => {
          return (
            <Item
              key={i}
              id={item.id}
              name={item.name}
              image={item.image}
              new_price={item.new_price}
              old_price={item.new_price}
            ></Item>
          );
        })}
      </div>
    </div>
  );
};
