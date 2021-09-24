import React from "react";

function Filter({items, category, onClickFilter}) {

  return (
    <section className="filter">
      <h3>Фильтры:</h3>
      <ul className="filter_list">
        <button className={category === null ? 'active': ''} onClick={() => onClickFilter(null)}>Все</button>
        {  
            items && items.map((name, index) => (
                <button
                className={category === index ? 'active' : ''}
                onClick={() => onClickFilter(index)}>
                    {name}
                </button>
            ))
        }
      </ul>
    </section>
  );
}

export default Filter;
