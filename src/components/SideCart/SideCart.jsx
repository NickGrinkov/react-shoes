import React from "react";
import styles from './SideCart.module.scss'

function SideCart({ toggleSideCart, visible, items, onRemove }) {
  return (
    <div style={{ display: !visible ? "none" : "block" }} className={styles.overlay}>
      <div className={styles.cart}>
        <div className={styles.cart__top}>
          <h3>Корзина</h3>
          <img
            onClick={() => toggleSideCart()}
            className="remove-btn"
            src="/img/btn-remove.svg"
            alt="remove"
          />
        </div>
        {items.length > 0 ? (
          <div>
            <div className={styles.items}>
              {items.map((item) => (
                <div key={item.id} className={styles.cart__item}>
                  <img width={70} height={70} src={item.imageUrl} alt="shoes" />
                  <div className={styles.cart__text}>
                    <p>{item.name}</p>
                    <b>{item.price} р.</b>
                  </div>
                  <img
                    onClick={() => onRemove(item)}
                    className="remove-btn"
                    src="/img/btn-remove.svg"
                    alt="remove"
                  />
                </div>
              ))}
            </div>
            <div className={styles.cart__total}>
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
              <button className="main-btn">
                <span>Оформить заказ</span>
                <img src="/img/arrow.svg" alt="arrow" />
              </button>
            </div>
          </div>
        ) : (
          <div className={styles.emty}>
            <img className="" src="/img/empty-cart.jpg" width="120px" alt="empty" />
            <h2>Корзина пустая</h2>
            <p className="">Добавьте хотя бы одну пару кроссовок, чтобы сделать заказ</p>
            <button className='main-btn back-btn'>
              <img src="img/arrow.svg" alt="arrow" />
              Вернуться назад
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

export default SideCart;
