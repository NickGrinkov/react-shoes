import React from 'react';


function Header({toggleSideCart}) {
    return (
        <header className="header">
        <div className="header__left">
          <img width={40} height={40} src="/img/logo.png" alt="logo" />
          <div>
            <h3>React Shoes</h3>
            <p>Лучший магазин кроссовок</p>
          </div>
        </div>
        <div className="header__right">
          <div>
            <img onClick={toggleSideCart} width={20} height={20} src="/img/cart.svg" alt="cart" />
            <span>1200 руб.</span>
          </div>
          <img width={20} height={20} src="/img/user.svg" alt="user" />
        </div>
      </header>
    )
}

export default Header;