import React from "react";
import Card from "../components/Card/Card";

function Favorites( {items, onAddToFavorite} ) {
  return (
    <div className="main">
      <h1 style={{ color: '#e58c8c' }} >Все закладки</h1>
      <div className="shoes">
        {items
          .map((card) => (
            <Card
              key={card.id}
              card={card}
              favorited={true}
              onFavorite={onAddToFavorite}
            />
          ))}
      </div>
    </div>
  );
}

export default Favorites;
