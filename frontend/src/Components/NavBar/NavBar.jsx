import React, { useContext, useState } from "react";
import "./NavBar.css";
import logo from "../Assets/logo.png";
import cart_icon from "../Assets/cart_icon.png";
import { Link } from "react-router-dom";
import { ShopContext } from "../../Context/ShopContext";

//prettier-ignore
export const NavBar = () => {
  const [menu, setMenu] = useState("shop");
  const {getTotalCartItems} =useContext(ShopContext)

  return (
    <div className="navbar">
      <div className="nav-logo">
        <img className="logo" src={logo}></img>
        <p>SHOP</p>
      </div>
      <ul className="nav-menu">
        <li onClick={() => {setMenu("shop")}}> <Link style={{textDecoration:'none'}} to='/'> Shop </Link> {menu ==="shop" ? <hr/>:<></>} </li>
        <li onClick={() => {setMenu("console")}}> <Link style={{textDecoration:'none'}} to='/console'> Console & accessories </Link> {menu ==="console" ? <hr/>:<></>}</li>
        <li onClick={() => {setMenu("game")}}> <Link style={{textDecoration:'none'}} to='/game'> Games </Link> {menu ==="game" ? <hr/>:<></>}</li>
        <li onClick={() => {setMenu("credit")}}> <Link style={{textDecoration:'none'}} to='/credit'> Credit Cards </Link>{menu ==="credit" ? <hr/>:<></>}</li>
      </ul>
      <div className="nav-login-cart">
        <Link to= "/login"><button>Login</button></Link>
        <Link to= "/cart"><img src={cart_icon}></img></Link>
        <div className="nav-cart-count">{getTotalCartItems()}</div>
      </div>
    </div>
  );
};
