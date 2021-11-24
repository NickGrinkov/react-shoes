import React from "react";
import Card from '../components/Card/Card';

function Home({searchValue, onChangeSearchInput, items, onAddToCart, onAddToFavorite}) {
  return (
    <main className="main">
      <div className="main__header">
        <h1>
          {searchValue ? `Поиск по запросу: "${searchValue}"` : "Все кроссовки"}
        </h1>
        <div className="search">
          <img src="/img/search.svg" alt="search" />
          <input
            onChange={onChangeSearchInput}
            value={searchValue}
            type="text"
            placeholder="Поиск..."
          />
        </div>
      </div>
      <div className="shoes">
        {items
          .filter((item) =>
            item.name.toLowerCase().includes(searchValue.toLowerCase())
          )
          .map((card) => (
            <Card
              onAddToCart={onAddToCart}
              key={card.id}
              card={card}
              onFavorite={onAddToFavorite}
            />
          ))}
      </div>
    </main>
  );
}

export default Home;
