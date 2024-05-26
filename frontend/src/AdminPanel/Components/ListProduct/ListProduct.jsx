import React, { useEffect, useState } from "react";
import "./ListProduct.css";
import cross_icon from "../../assets/cross_icon.png";

export const ListProduct = () => {
  const [products, setProducts] = useState([]);

  const fetchProducts = async () => {
    await fetch("http://localhost:8000/product/products")
      .then((response) => response.json())
      .then((data) => {
        setProducts(data);
      });
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  const removeProduct = async (id) => {
    await fetch(`http://localhost:8000/product/deleteproduct/${id}`, {
      method: "DELETE",
    }).then(() => {
      //update the list
      setProducts((prevProducts) =>
        prevProducts.filter((product) => product._id !== id)
      );
    });
  };
  return (
    <>
      <div className="listproduct">
        <h1>All Products List</h1>
        <div className="listp-format-main">
          <p>Products</p>
          <p>Title</p>
          <p>Old Price</p>
          <p>New Price</p>
          <p>Category</p>
          <p>Remove</p>
        </div>
        <div className="listp-allproducts">
          <hr />
          {products.map((product, index) => {
            return (
              // use  <></> to return more than one component
              <>
                <div key={index} className="listp-format-main listp-format">
                  <img
                    src={product.image}
                    alt=""
                    className="listp-product-icon"
                  />
                  <p>{product.name}</p>
                  <p>${product.old_price}</p>
                  <p>${product.new_price}</p>
                  <p>{product.category}</p>
                  <img
                    src={cross_icon}
                    alt=""
                    className="listp-remove-icon"
                    onClick={() => removeProduct(product._id)}
                  />
                </div>
                <hr />
              </>
            );
          })}
        </div>
      </div>
    </>
  );
};
