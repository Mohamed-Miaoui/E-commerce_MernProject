import React, { useState } from "react";
import "./AddProduct.css";
import upload_area from "../../assets/upload_area.svg";
export const AddProduct = () => {
  const [image, setImage] = useState(false);
  const [producDetails, setproducDetails] = useState({
    name: "",
    image: "",
    category: "game",
    new_price: "",
    old_price: "",
  });

  const handleImage = (e) => {
    setImage(e.target.files[0]);
  };

  const handleChange = (e) => {
    setproducDetails({ ...producDetails, [e.target.name]: e.target.value });
  };

  const handleSubmit = async () => {
    console.log(producDetails);
    let responseData; //this will hold the response of img upload api endpoint
    let product = producDetails; //put already filled details in this variable

    let formData = new FormData();
    formData.append("product", image);

    //i will consume backend api with fetch , no need to use axios and redux for this simple app
    //get the image url from backend api and put it in productDetails object
    await fetch("http://localhost:8000/upload", {
      method: "POST",
      headers: {
        Accept: "application/json",
      },
      body: formData,
    }).then((response) =>
      //promise contatining the api result (contain to attributs success,image_url defined in backend )
      response.json().then((data) => {
        responseData = data;
      })
    );
    if (responseData.success) {
      product.image = responseData.image_url;
      console.log(product);
      await fetch("http://localhost:8000/product/addproduct", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "content-Type": "application/json",
        },
        body: JSON.stringify(product), //body contetn that ill be send to api endpoint
      }) //promise we make it in json format than we get other promise "data" in correct format
        .then((response) => response.json())
        .then((data) => {
          data.success ? alert("Product Added") : alert("Failed");
        });
    }
  };

  return (
    <>
      <div className="addproduct">
        <h1>Add Product</h1>
        <div className="addp-itemfield">
          <p>Product Title</p>
          <input
            value={producDetails.name}
            onChange={handleChange}
            type="text"
            name="name"
            placeholder="Type Here"
          />
        </div>
        <div className="addp-price">
          <div className="addp-itemfield">
            <p>Price</p>
            <input
              value={producDetails.old_price}
              onChange={handleChange}
              type="text"
              name="old_price"
              placeholder="Type Here"
            />
          </div>
          <div className="addp-itemfield">
            <p>Offer Price</p>
            <input
              value={producDetails.new_price}
              onChange={handleChange}
              type="text"
              name="new_price"
              placeholder="Type Here"
            />
          </div>
        </div>
        <div className="addp-itemfield">
          <p>Product Category</p>
          <select
            value={producDetails.category}
            onChange={handleChange}
            name="category"
            className="addp-selector"
          >
            <option value="console & accessories">
              {" "}
              console & accessories
            </option>
            <option value="game"> game</option>
            <option value="credit"> credit</option>
          </select>
        </div>
        <div className="addp-itemfield">
          <p>Product Image</p>
          <label htmlFor="file-input">
            <img
              src={image ? URL.createObjectURL(image) : upload_area}
              className="addp-thumbnail-img"
            />
          </label>
          <input
            onChange={handleImage}
            type="file"
            name="image"
            id="file-input"
            hidden
          />
        </div>
        <button
          onClick={() => {
            handleSubmit();
          }}
          className="addp-button"
        >
          {" "}
          Add
        </button>
      </div>
    </>
  );
};
