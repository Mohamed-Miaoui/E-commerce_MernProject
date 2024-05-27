import React, { useContext, useEffect } from "react";
import "./CartItems.css";
import { ShopContext } from "../../Context/ShopContext";
import remove_icon from "../Assets/cart_cross_icon.png";
export const CartItems = () => {
  const { all_product, cartItems, removeFromCart, getTotalCartAmounts } =
    useContext(ShopContext);

  useEffect(() => {
    console.log(cartItems);
  });
  return (
    <div className="cartitems">
      <div className="ci-format-main">
        <p>Products</p>
        <p>Title</p>
        <p>Price</p>
        <p>Quantity</p>
        <p>Total</p>
        <p>Remove</p>
      </div>
      <hr />
      {Object.entries(cartItems).map(([itemId, quantity]) => {
        // Skip rendering if quantity is 0
        if (quantity === 0) return null;

        const item = all_product.find((product) => product._id === itemId);
        if (!item) return null;

        return (
          <div key={itemId} className="ci-format ci-format-main">
            <img src={item.image} alt="" className="ci-product-icon" />
            <p>{item.name}</p>
            <p>${item.new_price}</p>
            <button className="ci-quantity">{quantity}</button>
            <p>${item.new_price * quantity}</p>
            <img
              className="ci-remove-icon"
              src={remove_icon}
              alt=""
              onClick={() => removeFromCart(itemId)}
            />
          </div>
        );
      })}
      <div className="ci-down">
        <div className="ci-total">
          <h1>Cart Totals</h1>
          <div>
            <div className="ci-total-item">
              <p>Subtotal</p>
              <p>${getTotalCartAmounts()}</p>
            </div>
            <hr />
            <div className="ci-total-item">
              <p>Shipping Fee</p>
              <p>Free</p>
            </div>
            <hr />
            <div className="ci-total-item">
              <h3>Total</h3>
              <h3>${getTotalCartAmounts()}</h3>
            </div>
          </div>
          <button>PROCEED TO CHECKOUT</button>
        </div>
        <div className="ci-promocode">
          <p>If you have a promo code, Enter it here !</p>
          <div className="ci-promobox">
            <input type="text" placeholder="promocode" />
            <button>Submit</button>
          </div>
        </div>
      </div>
    </div>
  );
};
