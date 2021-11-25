import React, {useState, useContext} from "react";
import AppContext from "../../context";
import axios from "axios";

import Info from "../Info";

import styles from './SideCart.module.scss'

function SideCart({ toggleSideCart, visible, items, onRemove }) {
  const [isOrdered, setIsOrdered] = useState(false)
  const [orderId, setOrderId] = useState('')
  const {cartItems, setCartItems} = useContext(AppContext)

  
  
  const onClickOrder = async () => {
    try {
      const {data} = await axios.post('https://619dbd59131c600017088fe7.mockapi.io/orders', {
        items: cartItems
      })
      setOrderId(data.id)
      setIsOrdered(true)
      setCartItems([])
      for(let i = 0; i < cartItems.length; i++) {
          const item = cartItems[i]
          await axios.delete('https://619dbd59131c600017088fe7.mockapi.io/cart/' + item.id)
      }
    } catch(error) {
      alert('Не удалось формить заказ')
    }
  }
      
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
              <button onClick={onClickOrder} className="main-btn">
                <span>Оформить заказ</span>
                <img src="/img/arrow.svg" alt="arrow" />
              </button>
            </div>
          </div>
        ) : (
          <Info 
          title={isOrdered ? 'Ваш заказ успешно оформлен' : "Корзина пустая"} 
          description={isOrdered ? `Номер вашего заказа #${orderId}` : "Добавьте хотя бы одну пару кроссовок, стобы оформить заказ"} 
          image={isOrdered ? "img/complete-order.jpg" : "img/empty-cart.jpg"}/>
        )}
      </div>
    </div>
  );
}

export default SideCart;
