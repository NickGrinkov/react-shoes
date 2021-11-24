import React, {useState, useEffect} from "react";
import axios from "axios";
import "./App.scss";
import Card from './components/Card/Card';
import Header from './components/Header';
import SideCart from './components/SideCart';

function App() {
  const [items, setItems] = useState([])
  const [cartItems, setCartItems] = useState([])
  const [visible, setvisible] = useState(false)
  const [searchValue, setSearchValue] = useState('')

  useEffect(() => {
    axios.get("https://619dbd59131c600017088fe7.mockapi.io/items")
      .then(({data}) => setItems(data))
      axios.get("https://619dbd59131c600017088fe7.mockapi.io/cart")
      .then(({data}) => setCartItems(data))
  }, [])

  const toggleSideCart = () => {
    setvisible(!visible)
  }

  const onAddToCart = (obj) => {
    axios.post("https://619dbd59131c600017088fe7.mockapi.io/cart", obj)
    setCartItems(prev => [...prev, obj])
  }

  const onRemoveCartItem = (obj) => {
    axios.delete(`https://619dbd59131c600017088fe7.mockapi.io/cart/${obj.id}`)
    setCartItems(prev => prev.filter((item) => item !== obj))
  }

  const onChangeSearchInput = (e) => {
    setSearchValue(e.target.value)
  }
  
  return (
    <div className="wrapper">
      {
        visible && <SideCart onRemove={(obj) => onRemoveCartItem(obj)} items={cartItems} visible={visible} toggleSideCart={toggleSideCart}/>
      }   
      <Header toggleSideCart={toggleSideCart}/>
      <main className="main">
        <div className="main__header">
          <h1>{searchValue ? `Поиск по запросу: "${searchValue}"` : 'Все кроссовки'}</h1>
          <div className="search">
            <img src="/img/search.svg" alt="search" />
            <input onChange={onChangeSearchInput} value={searchValue} type="text" placeholder="Поиск..." />
          </div>
        </div>
        <div className="shoes">
          {
            items.filter(item => item.name.toLowerCase().includes(searchValue.toLowerCase()))
            .map((card) => <Card onPlus={(obj) => onAddToCart(obj)} key={card.id} card={card}/>)
          }
        </div>
      </main>
    </div>
  );
}

export default App;
