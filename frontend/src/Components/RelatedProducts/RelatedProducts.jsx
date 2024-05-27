import React, { useEffect, useState } from "react";
import "./RelatedProducts.css";
import { Item } from "../Item/Item";
export const RelatedProducts = (props) => {
  const [relatedproducts, setRelatedproducts] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:8000/product/productId/${props.productId}`)
      .then((response) => response.json())
      .then((data) =>
        fetch(`http://localhost:8000/product/relatedproducts/${data.category}`)
          .then((response) => response.json())
          .then((data) => setRelatedproducts(data))
      );
  }, []);
  return (
    <div className="relatedproducts">
      <h1>Related Products</h1>
      <hr />
      <div className="rp-item">
        {relatedproducts.map((item, i) => {
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
