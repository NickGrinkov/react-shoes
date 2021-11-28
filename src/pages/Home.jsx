import React from "react";
import Card from '../components/Card/Card';

function Home({searchValue, 
      onChangeSearchInput, 
      items,
      onAddToFavorite, 
      isLoading
}) {

   const renderItems = () => {
     const filteredItems = items.filter(item => item.name.toLowerCase().includes(searchValue.toLowerCase()))
     return (isLoading ? [...Array(8)] : filteredItems).map((item, index) => (
            <Card
              key={index}
              card={item}
              onFavorite={onAddToFavorite}
              loading={isLoading} 
            />
          ))
   } 


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
        {renderItems()}
      </div>
    </main>
  );
}

export default Home;
