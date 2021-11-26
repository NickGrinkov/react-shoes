import React, {useContext} from "react";
import Card from "../components/Card/Card";
import AppContext from '../context';

function Favorites( ) {
  const {favorites} = useContext(AppContext)

  return (
    <div className="favorites">
      <h1 style={{ color: '#e58c8c' }} >Все закладки</h1>
      <div className="shoes">
        {favorites
          .map((card) => (
            <Card
              key={card.id}
              card={card}
              favorited={true}
            />
          ))}
      </div>
    </div>
  );
}

export default Favorites;
