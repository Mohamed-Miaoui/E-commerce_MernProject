import React from "react";
import "./CSS/LoginSignup.css";
import { NavBar } from "../Components/NavBar/NavBar";
import { Footer } from "../Components/Footer/Footer";
export const LoginSignup = () => {
  return (
    <>
      <NavBar />
      <div className="loginsignup">
        <div className="loginsignup-container">
          <h1>Sign Up</h1>
          <div className="loginsignup-fields">
            <input type="text" placeholder="Name" />
            <input type="email" placeholder="Email" />
            <input type="password" placeholder="Password" />
          </div>
          <button className="button-hover">Continue</button>
          <p className="loginsignup-login">
            Already have an account <span>login here</span>
          </p>
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
