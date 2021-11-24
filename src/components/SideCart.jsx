import React from "react";

function SideCart({toggleSideCart, visible}) {
  return (
    <div style={{ display: !visible ? 'none' : 'block'}} className="overlay">
      <div className="cart">
        <div className="cart__top">
          <h3>Корзина</h3>
          <img onClick={() => toggleSideCart()} className="remove-btn" src="/img/btn-remove.svg" alt="remove" />
        </div>
        <div className="items">
          <div className="cart__item">
            <img width={70} height={70} src="/img/shoes/1.jpg" alt="shoes" />
            <div className="cart__text">
              <p>Мужские кроссовки Nike Blazer Mid Suede</p>
              <b>12 999 р.</b>
            </div>
            <img
              className="remove-btn"
              src="/img/btn-remove.svg"
              alt="remove"
            />
          </div>
          <div className="cart__item">
            <img width={70} height={70} src="/img/shoes/2.jpg" alt="shoes" />
            <div className="cart__text">
              <p>Мужские кроссовки Nike Blazer Mid Suede</p>
              <b>12 999 р.</b>
            </div>
            <img
              className="remove-btn"
              src="/img/btn-remove.svg"
              alt="remove"
            />
          </div>
        </div>
        <div className="cart__total">
          <ul>
            <li>
              <span>Итого:</span>
              <div></div>
              <b>21498 руб.</b>
            </li>
            <li>
              <span>Налог 5%</span>
              <div></div>
              <b>1074 руб.</b>
            </li>
          </ul>
          <button className="main-button">
            <span>Оформить заказ</span>
            <img src="/img/arrow.svg" alt="arrow" />{" "}
          </button>
        </div>
      </div>
    </div>
  );
}

export default SideCart;
