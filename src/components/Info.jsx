import React, {useContext} from "react";
import AppContext from "../context";

function Info( {image, title, description} ) {

 const { setvisible } = useContext(AppContext)
  return (
    <div className="empty">
      <img src={image} width="120px" alt="empty" />
      <h2>{title}</h2>
      <p>
        {description}
      </p>
      <button onClick={() => setvisible(false)} className="main-btn back-btn">
        <img src="img/arrow.svg" alt="arrow" />
        Вернуться назад
      </button>
    </div>
  );
}

export default Info;
