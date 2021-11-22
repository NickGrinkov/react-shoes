import React from "react";
import "./App.scss";

function App() {
  return (
    <div className="wrapper">
      <div className="overlay">
        <div className="cart">
          <div className="cart__top">
          <h3>Корзина</h3>
          <img
                className="remove-btn"
                src="/img/btn-remove.svg"
                alt="remove"
              />
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
              <img src="/img/arrow.svg" alt="arrow" /> </button>
          </div>
        </div>
      </div>
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
            <img width={20} height={20} src="/img/cart.svg" alt="cart" />
            <span>1200 руб.</span>
          </div>
          <img width={20} height={20} src="/img/user.svg" alt="user" />
        </div>
      </header>
      <main className="main">
        <div className="main__header">
          <h1>Все кроссовки</h1>
          <div className="search">
            <img src="/img/search.svg" alt="search" />
            <input type="text" placeholder="Поиск..." />
          </div>
        </div>
        <div className="shoes">
          <div className="card">
            <div className="favorite">
              <img className="" src="/img/unliked.svg" alt="heart" />
            </div>
            <img width={133} height={112} src="/img/shoes/1.jpg" alt="shoes" />
            <p>
              Мужские кроссовки <br /> Nike Blazer Mid Suede
            </p>
            <div className="card__bottom">
              <div className="card__price">
                <span>Цена:</span>
                <b>12990 руб.</b>
              </div>
              <div className="add">
                <img src="/img/btn-plus.svg" alt="add-btn" />
              </div>
            </div>
          </div>
          <div className="card">
            <img width={133} height={112} src="/img/shoes/2.jpg" alt="shoes" />
            <p>
              Мужские кроссовки <br /> Nike Blazer Mid Suede
            </p>
            <div className="card__bottom">
              <div className="card__price">
                <span>Цена:</span>
                <b>12990 руб.</b>
              </div>
              <button>
                <img width={17} height={17} src="/img/plus.svg" alt="add-btn" />
              </button>
            </div>
          </div>
          <div className="card">
            <img width={133} height={112} src="/img/shoes/3.jpg" alt="shoes" />
            <p>
              Мужские кроссовки <br /> Nike Blazer Mid Suede
            </p>
            <div className="card__bottom">
              <div className="card__price">
                <span>Цена:</span>
                <b>12990 руб.</b>
              </div>
              <button>
                <img width={17} height={17} src="/img/plus.svg" alt="add-btn" />
              </button>
            </div>
          </div>
          <div className="card">
            <img width={133} height={112} src="/img/shoes/4.jpg" alt="shoes" />
            <p>
              Мужские кроссовки <br /> Nike Blazer Mid Suede
            </p>
            <div className="card__bottom">
              <div className="card__price">
                <span>Цена:</span>
                <b>12990 руб.</b>
              </div>
              <button>
                <img width={17} height={17} src="/img/plus.svg" alt="add-btn" />
              </button>
            </div>
          </div>
          <div className="card">
            <img width={133} height={112} src="/img/shoes/5.jpg" alt="shoes" />
            <p>
              Мужские кроссовки <br /> Nike Blazer Mid Suede
            </p>
            <div className="card__bottom">
              <div className="card__price">
                <span>Цена:</span>
                <b>12990 руб.</b>
              </div>
              <button>
                <img width={17} height={17} src="/img/plus.svg" alt="add-btn" />
              </button>
            </div>
          </div>
          <div className="card">
            <img width={133} height={112} src="/img/shoes/6.jpg" alt="shoes" />
            <p>
              Мужские кроссовки <br /> Nike Blazer Mid Suede
            </p>
            <div className="card__bottom">
              <div className="card__price">
                <span>Цена:</span>
                <b>12990 руб.</b>
              </div>
              <button>
                <img width={17} height={17} src="/img/plus.svg" alt="add-btn" />
              </button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;
