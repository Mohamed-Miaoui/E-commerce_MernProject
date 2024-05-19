import React from "react";
import "./NewLetter.css";
export const NewLetter = () => {
  return (
    <div className="newletter">
      <h1>Get Excluisve Offers On Your Email</h1>
      <p>subscribe To Our NewsLetter and stay updated</p>
      <div>
        <input type="email" placeholder="Your Email id" />
        <button>Subscribe</button>
      </div>
    </div>
  );
};
