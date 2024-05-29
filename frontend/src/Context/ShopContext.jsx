import React, { createContext, useEffect, useState } from "react";
import toast from "react-hot-toast";
// import all_product from "../../src/Components/Assets/all_product";
export const ShopContext = createContext(null);

const ShopContextPovider = (props) => {
  const [all_product, setAll_product] = useState([]);
  const [cartItems, setCartItems] = useState({});

  useEffect(() => {
    fetch("http://localhost:8000/product/products")
      .then((response) => response.json())
      .then((data) => setAll_product(data));

    if (localStorage.getItem("auth-token")) {
      fetch("http://localhost:8000/product/getcart", {
        method: "POST",
        headers: {
          Accept: "application/form-data",
          "auth-token": `${localStorage.getItem("auth-token")}`,
          "Content-Type": "application/json",
        },
        body: "",
      })
        .then((response) => response.json())
        .then((data) => {
          setCartItems(data);
          console.log(data);
        });
    }
  }, []);

  const addToCart = (itemId) => {
    console.log(itemId);
    setCartItems((prev) => ({
      ...prev,
      [itemId]: (prev[itemId] || 0) + 1,
    }));
    console.log(cartItems);
    if (localStorage.getItem("auth-token")) {
      fetch("http://localhost:8000/product/addtocart", {
        method: "POST",
        headers: {
          Accept: "application/form-data",
          "auth-token": `${localStorage.getItem("auth-token")}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ item: itemId }),
      })
        .then((response) => response.json())
        .then((data) => console.log(data));
    }
    toast.success("Product added Successfully ! ");
  };
  const removeFromCart = (itemId) => {
    setCartItems((prev) => {
      const updatedCart = { ...prev };
      if (updatedCart[itemId] > 1) {
        updatedCart[itemId] -= 1;
      } else {
        delete updatedCart[itemId];
      }
      return updatedCart;
    });
    if (localStorage.getItem("auth-token")) {
      fetch("http://localhost:8000/product/removefromcart", {
        method: "POST",
        headers: {
          Accept: "application/form-data",
          "auth-token": `${localStorage.getItem("auth-token")}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ item: itemId }),
      })
        .then((response) => response.json())
        .then((data) => console.log(data));
    }
    toast.success("Product is removed ! ");
  };

  const getTotalCartAmounts = () => {
    let totalAmount = 0;
    for (const itemId in cartItems) {
      const itemInfo = all_product.find((product) => product._id === itemId);
      if (itemInfo) {
        totalAmount += itemInfo.new_price * cartItems[itemId];
      }
    }
    return totalAmount;
  };

  //nb of items in cart for NavBar
  const getTotalCartItems = () => {
    let totalItem = 0;
    for (const item in cartItems) {
      if (cartItems[item] > 0) {
        totalItem += cartItems[item];
      }
    }
    return totalItem;
  };

  const contextValue = {
    getTotalCartItems,
    getTotalCartAmounts,
    all_product,
    cartItems,
    addToCart,
    removeFromCart,
  };
  return (
    <ShopContext.Provider value={contextValue}>
      {props.children}
    </ShopContext.Provider>
  );
};

export default ShopContextPovider;
