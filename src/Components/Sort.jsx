import React from "react";
import {useState} from 'react';

function Sort({sortItems, sortBy, onClickSort}) {
  const [visibleList, setVisibleList] = useState(false);

  const activeSortItem = sortItems.find(item => item.type === sortBy).name


  function hideList() {
    setVisibleList(visibleList => !visibleList)
  }

  function getActiveItem(name) {
    onClickSort(name)
    hideList()
  }


  return (
    <section className="sort">
      <h3 className="sort_header">
        Сортировать по:
        <button onClick={hideList} className="sort_header_btn" href="##">
          {activeSortItem}
        </button>
      </h3>
      { visibleList &&
        <ul className="sort_wrapper">
        {sortItems &&
          sortItems.map((item) => (
            <button className="sort_wrapper_btn"
            onClick={() => getActiveItem(item.type)}>
              {item.name}
            </button>
          ))
        }
      </ul>
      }
    </section>
  );
}

export default Sort;
