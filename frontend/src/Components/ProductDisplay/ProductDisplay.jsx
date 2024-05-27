import React, { useContext, useEffect, useState } from "react";
import "./ProductDisplay.css";
import star_icon from "../Assets/star_icon.png";
import star_dull_icon from "../Assets/star_dull_icon.png";
import { ShopContext } from "../../Context/ShopContext";

export const ProductDisplay = (props) => {
  const [selectedproduct, setSelectedproduct] = useState("");
  useEffect(() => {
    fetch(`http://localhost:8000/product/productId/${props.productId}`)
      .then((response) => response.json())
      .then((data) => {
        setSelectedproduct(data);
      });
  }, [props.productId]);

  const { addToCart } = useContext(ShopContext);
  return (
    <div className="prod_display">
      <div className="pd_left">
        <div className="pd-img-list">
          <img src={selectedproduct.image} alt="" />
          <img src={selectedproduct.image} alt="" />
          <img src={selectedproduct.image} alt="" />
          <img src={selectedproduct.image} alt="" />
        </div>
        <div className="pd-img">
          <img className="pd-main-img" src={selectedproduct.image} alt="" />
        </div>
      </div>
      <div className="pd_right">
        <h1>{selectedproduct.name}</h1>
        <div className="pd-right-star">
          <img src={star_icon} alt="" />
          <img src={star_icon} alt="" />
          <img src={star_icon} alt="" />
          <img src={star_icon} alt="" />
          <img src={star_dull_icon} alt="" />
          <p>(122)</p>
        </div>
        <div className="pd-right-prices">
          <div className="pd-right-price-old">${selectedproduct.old_price}</div>
          <div className="pd-right-price-new">${selectedproduct.new_price}</div>
        </div>
        <div className="pd-right-description">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Est atque,
          delectus autem ratione animi minus sit repellendus similique, placeat
          veritatis deleniti tempore. Nesciunt sed ipsam velit explicabo
          similique reiciendis optio?
        </div>
        <div className="pd-right-size">
          <h1>Select Size</h1>
          <div className="pd-right-sizes">
            <div>S</div>
            <div>M</div>
            <div>L</div>
            <div>XL</div>
            <div>XXL</div>
          </div>
          <button
            onClick={() => {
              addToCart(selectedproduct._id);
            }}
          >
            ADD TO CART
          </button>
        </div>
      </div>
    </div>
  );
};
