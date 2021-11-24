import React, {useState} from "react";
import styles from  './Card.module.scss';

function Card({card, onAddToCart, onFavorite, favorited = false}) {
  const [isAdded, setIsAdded] = useState(false)
  const [isFavorite, setIsFavorite] = useState(favorited)
  const onClickAdd = () => {
    onAddToCart(card)
    setIsAdded(!isAdded)
  }

  const onClickFavorite = () => {
    onFavorite(card)
    setIsFavorite(!isFavorite)
  }
  return (
    <div className={styles.card}>
      <img onClick={onClickFavorite} className={styles.favorite} src={isFavorite ? "/img/liked.svg" : "/img/unliked.svg"}  alt="heart" />
      <img width={133} height={112} src={card.imageUrl} alt="shoes" />
      <p>
        {card.name}
      </p>
      <div className={styles.bottom}>
        <div className={styles.price}>
          <span>Цена:</span>
          <b>{card.price} руб.</b>
        </div>
        <img onClick={onClickAdd} className={styles.add} src={isAdded ?  "/img/btn-checked.svg" : "/img/btn-plus.svg"} alt="add-btn" />
      </div>
    </div>
  );
}

export default Card;
