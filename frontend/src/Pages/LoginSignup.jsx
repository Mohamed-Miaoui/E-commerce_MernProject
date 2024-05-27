import React, { useState } from "react";
import "./CSS/LoginSignup.css";
import { NavBar } from "../Components/NavBar/NavBar";
import { Footer } from "../Components/Footer/Footer";
import toast, { Toaster } from "react-hot-toast";
export const LoginSignup = () => {
  const [state, setState] = useState("Login");
  const [formData, setFormData] = useState({
    name: "",
    password: "",
    email: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const login = async () => {
    console.log("login", formData);
    let responseData;
    await fetch("http://localhost:8000/user/login", {
      method: "POST",
      headers: {
        Accepte: "application/form-data",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then((response) => response.json())
      .then((data) => (responseData = data));
    if (responseData.success) {
      localStorage.setItem("auth-token", responseData.token);
      toast.success("Login is successful !  ");
      setTimeout(function () {
        window.location.replace("/");
      }, 2000);
    } else {
      toast.error(responseData.error);
    }
  };

  const signUp = async () => {
    console.log("signup", formData);
    let responseData;
    await fetch("http://localhost:8000/user/signup", {
      method: "POST",
      headers: {
        Accepte: "application/form-data",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then((response) => response.json())
      .then((data) => (responseData = data));
    if (responseData.success) {
      localStorage.setItem("auth-token", responseData.token);
      toast.success("Sign Up is successful !  ");
      setTimeout(function () {
        window.location.replace("/");
      }, 2000);
    } else {
      toast.error(responseData.error);
    }
  };

  //prettier-ignore
  return (
    <>
      <NavBar />
      <div className="loginsignup">
        <div className="loginsignup-container">
          <h1>{state}</h1>
          <div className="loginsignup-fields">
            {/* if state is sign up then show input name else nop */}
            {state==="Sign Up" ? <input onChange={(handleChange)} value={formData.name} name="name" type="text" placeholder="Name" /> : <></>}
            <input onChange={handleChange} value={formData.email} name="email" type="email" placeholder="Email" />
            <input onChange={handleChange} value={formData.password} name="password" type="password" placeholder="Password" />
          </div>
          <button onClick={()=>{state==="Login" ? login() : signUp()}} className="button-hover">Continue</button>
          {state==="Sign Up" ? <p className="loginsignup-login">
            Already have an account <span onClick={()=>{setState("Login")}}>login here</span>
          </p> :<p className="loginsignup-login">
            Create an account an account <span onClick={()=>{setState("Sign Up")}}>click here</span>
          </p> }
          <div className="loginsignup-agree">
            <input type="checkbox" name="" id="" />
            <p>By Continuing, i agree to the terms of use and policy.</p>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};
