import React, { useEffect, useState } from "react";
import "./NewCollections.css";
import { Item } from "../Item/Item";
export const NewCollections = () => {
  const [new_collection, setNew_collection] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8000/product/newcollection")
      .then((response) => response.json())
      .then((data) => setNew_collection(data));
  }, []);

  return (
    <div className="new-collections">
      <h1>NEW COLLECTION</h1>
      <hr />
      <div className="collection">
        {new_collection.map((item, i) => {
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
