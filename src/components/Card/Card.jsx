import React, { useState, useContext } from "react";
import ContentLoader from "react-content-loader";
import styles from "./Card.module.scss";
import AppContext from "../../context";

function Card({
  card,
  onAddToCart,
  favorited = false,
  loading = false,
  none,
  changeStyle
}) {

  const { isItemAdded, onAddToFavorite, cartItems, favorites } = useContext(AppContext)

  const onClickAdd = () => {
    onAddToCart(card);
  };

  const onClickFavorite = () => {
    onAddToFavorite(card);
  };
  return (
    <div className={styles.card} >
      {loading ? (
        <ContentLoader
          speed={2}
          width={210}
          height={230}
          viewBox="0 0 210 230"
          backgroundColor="#add8e6"
          foregroundColor="#ffffff"
        >
          <rect x="93" y="14" rx="0" ry="0" width="0" height="22" />
          <rect x="7" y="20" rx="5" ry="5" width="28" height="28" />
          <rect x="60" y="28" rx="10" ry="10" width="110" height="90" />
          <rect x="7" y="135" rx="5" ry="5" width="195" height="34" />
          <rect x="30" y="184" rx="5" ry="5" width="76" height="32" />
          <rect x="165" y="186" rx="5" ry="5" width="28" height="28" />
        </ContentLoader>
      ) : (
        <div>
          <img
            onClick={onClickFavorite}
            className={styles.favorite}
            src={isItemAdded(card.itemId, favorites) ? "/img/liked.svg" : "/img/unliked.svg"}
            alt="heart"
            style={{ display: none ? 'none' : 'block' }}
          />
          <img width={133} height={112} src={card.imageUrl} alt="shoes" />
          <p>{card.name}</p>
          <div className={styles.bottom}>
            <div className={styles.price}>
              <span>Цена:</span>
              <b>{card.price} руб.</b>
            </div>
              <img
                onClick={onClickAdd}
                className={styles.add}
                src={isItemAdded(card.itemId, cartItems) ? "/img/btn-checked.svg" : "/img/btn-plus.svg"}
                alt="add-btn"
                style={{ display: none || changeStyle ? 'none' : 'block' }}
              />
          </div>
        </div>
      )}
    </div>
  );
}

export default Card;
