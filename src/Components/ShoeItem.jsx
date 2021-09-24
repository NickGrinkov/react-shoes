import React from "react";
import { useState } from "react";


function ShoeItem({onClickSize, sizeElem, id, name, price, color, imageUrl, sizes}) {
  
  const [active, setActive] = useState(0)

  function activeItem(ind) {
    setActive(ind)
  }


  return (
    <div className="shoes_item">
      <img
        src={imageUrl}
        alt="snikerLogo"
      />
      <p className="shoes_name">{name}</p>
      <div className="shoes_price">
        <h3>Цена:</h3>
        <span>{price} р.</span>
      </div>
      <div className="shoes_color">
        <h3>Цвет:</h3>
        <span>{color}</span>
      </div>
      <div className="shoes_size">
        <h3>Размеры:</h3>
        <ul className="shoes_size_list">
        {
          sizes && sizes.map((size, ind) => (
                <button className="shoes_size_btn"
                className={active === ind ? 'active': ''}
                onClick={() => activeItem(ind)}>
                    {size}
                </button>
            )) 
        }
        </ul>
      </div>
      <button className="shoes_add">Добавить в корзину</button>
    </div>
  );
}

export default ShoeItem;
