import React, {useState} from "react";
import "./App.scss";
import Card from './components/Card/Card';
import Header from './components/Header';
import SideCart from './components/SideCart';

const cards = [
  {id: 1, name: 'Мужские кроссовки Nike Blazer Mid Suede', price: 12990, imageUrl: "/img/shoes/1.jpg"},
  {id: 2, name: 'Мужские кроссовки Nike Air Max 270', price: 15600, imageUrl: "/img/shoes/2.jpg"},
  {id: 3, name: 'Мужские кроссовки Nike Blazer Mid Suede', price: 8499, imageUrl: "/img/shoes/3.jpg"},
  {id: 4, name: 'Кроссовки Puma X Aka Boku Future Rider', price: 8999, imageUrl: "/img/shoes/4.jpg"},
]

function App() {
  const [visible, setvisible] = useState(false)

  const toggleSideCart = () => {
    setvisible(!visible)
  }
  
  return (
    <div className="wrapper">
      {
        visible ? <SideCart visible={visible} toggleSideCart={toggleSideCart}/> : null
      }   
      <Header toggleSideCart={toggleSideCart}/>
      <main className="main">
        <div className="main__header">
          <h1>Все кроссовки</h1>
          <div className="search">
            <img src="/img/search.svg" alt="search" />
            <input type="text" placeholder="Поиск..." />
          </div>
        </div>
        <div className="shoes">
          {
            cards.map((card) => <Card key={card.id} card={card}/>)
          }
        </div>
      </main>
    </div>
  );
}

export default App;
