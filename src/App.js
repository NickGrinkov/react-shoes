import React from "react";
import "./App.scss";
import Logo from "./img/logo.png";
import Cart from "./img/cart.svg";
import User from "./img/user.svg";
import AddBtn from "./img/plus.svg";
import cardImg from "./img/shoes/1.jpg";

function App() {
  return (
    <div className="wrapper">
      <header className="header">
        <div className="header__left">
          <img width={40} height={40} src={Logo} alt="logo" />
          <div>
            <h3>React Shoes</h3>
            <p>Лучший магазин кроссовок</p>
          </div>
        </div>
        <div className="header__right">
          <div>
            <img width={20} height={20} src={Cart} alt="cart" />
            <span>1200 руб.</span>
          </div>
          <img width={20} height={20} src={User} alt="user" />
        </div>
      </header>
      <main>
        <h1>Все кроссовки</h1>
        <div className="shoes">
          <div className="card">
            <img width={133} height={112} src={cardImg} alt="shoes" />
            <p>
              Мужские кроссовки <br /> Nike Blazer Mid Suede
            </p>
            <div className="card__bottom">
              <div className="card__price">
                <span>Цена:</span>
                <b>12990 руб.</b>
              </div>
              <button>
                <img width={17} height={17} src={AddBtn} alt="add-btn" />
              </button>
            </div>
          </div>
          <div className="card">
            <img width={133} height={112} src={cardImg} alt="shoes" />
            <p>
              Мужские кроссовки <br /> Nike Blazer Mid Suede
            </p>
            <div className="card__bottom">
              <div className="card__price">
                <span>Цена:</span>
                <b>12990 руб.</b>
              </div>
              <button>
                <img width={17} height={17} src={AddBtn} alt="add-btn" />
              </button>
            </div>
          </div>
          <div className="card">
            <img width={133} height={112} src={cardImg} alt="shoes" />
            <p>
              Мужские кроссовки <br /> Nike Blazer Mid Suede
            </p>
            <div className="card__bottom">
              <div className="card__price">
                <span>Цена:</span>
                <b>12990 руб.</b>
              </div>
              <button>
                <img width={17} height={17} src={AddBtn} alt="add-btn" />
              </button>
            </div>
          </div>
          <div className="card">
            <img width={133} height={112} src={cardImg} alt="shoes" />
            <p>
              Мужские кроссовки <br /> Nike Blazer Mid Suede
            </p>
            <div className="card__bottom">
              <div className="card__price">
                <span>Цена:</span>
                <b>12990 руб.</b>
              </div>
              <button>
                <img width={17} height={17} src={AddBtn} alt="add-btn" />
              </button>
            </div>
          </div>
          <div className="card">
            <img width={133} height={112} src={cardImg} alt="shoes" />
            <p>
              Мужские кроссовки <br /> Nike Blazer Mid Suede
            </p>
            <div className="card__bottom">
              <div className="card__price">
                <span>Цена:</span>
                <b>12990 руб.</b>
              </div>
              <button>
                <img width={17} height={17} src={AddBtn} alt="add-btn" />
              </button>
            </div>
          </div>
          <div className="card">
            <img width={133} height={112} src={cardImg} alt="shoes" />
            <p>
              Мужские кроссовки <br /> Nike Blazer Mid Suede
            </p>
            <div className="card__bottom">
              <div className="card__price">
                <span>Цена:</span>
                <b>12990 руб.</b>
              </div>
              <button>
                <img width={17} height={17} src={AddBtn} alt="add-btn" />
              </button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;
