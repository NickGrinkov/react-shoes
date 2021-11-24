import React, {useState} from "react";
import styles from  './Card.module.scss';

function Card({card}) {
  const [isAdded, setIsAdded] = useState(false)

  const onClickAdd = () => {
    setIsAdded(!isAdded)
  }
  return (
    <div className={styles.card}>
      <div className={styles.favorite}>
        <img src="/img/unliked.svg" alt="heart" />
      </div>
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
