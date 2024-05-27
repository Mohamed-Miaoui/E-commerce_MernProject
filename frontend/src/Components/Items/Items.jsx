import React, { useEffect, useState } from "react";
import "./Items.css";
import { Item } from "../Item/Item";

export const Items = () => {
  const [popularInCandA, setPopularInCandA] = useState([]);
  useEffect(() => {
    fetch("http://localhost:8000/product/populair")
      .then((response) => response.json())
      .then((data) => setPopularInCandA(data));
  }, []);
  return (
    <div className="items">
      <h1>Popular in console & accessories</h1>
      <hr />
      <div className="each-item">
        {popularInCandA.map((item, i) => {
          return (
            <Item
              key={i}
              id={item._id}
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
