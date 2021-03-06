import React from "react";
import { Link } from "react-router-dom";

function Header({ toggleSideCart, cartItems }) {
  const totalPrice = cartItems.reduce((sum, obj) => obj.price + sum, 0)
  
  return (
    <header className="header">
      <Link to="/">
        <div className="header__left">
          <img width={40} height={40} src="/img/logo.png" alt="logo" />
          <div>
            <h3>React Shoes</h3>
            <p>Лучший магазин кроссовок</p>
          </div>
        </div>
      </Link>
      <div className="header__right">
        <div>
          <img
            style={{ marginRight: "7px" }}
            onClick={toggleSideCart}
            width={20}
            height={20}
            src="/img/cart.svg"
            alt="cart"
          />
          <span>{totalPrice} руб.</span>
        </div>
        <Link to="/favorites">
          <img
            style={{ marginRight: "10px" }}
            className="heart"
            width={20}
            height={20}
            src="/img/heart.svg"
            alt="heart"
          />
        </Link>
        <Link to="/orders">
          <img 
            width={20} 
            height={20} 
            src="/img/user.svg" 
            alt="user" />
        </Link>
      </div>
    </header>
  );
}

export default Header;
