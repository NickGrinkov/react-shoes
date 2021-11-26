import React, {useState, useEffect} from "react";
import axios from "axios";
import { Route, Routes } from "react-router";
import AppContext from "./context";
import Header from './pages/Header';
import Home from './pages/Home';
import Favorites from "./pages/Favorites";
import SideCart from './components/SideCart/SideCart';
import "./App.scss";

function App() {
  const [items, setItems] = useState([])
  const [cartItems, setCartItems] = useState([])
  const [favorites, setFavorites] = useState([])
  const [visible, setvisible] = useState(false)
  const [searchValue, setSearchValue] = useState('')
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    async function fetchData() {
      const itemsResponse  = await axios.get("https://619dbd59131c600017088fe7.mockapi.io/items")
      const cartItemsResponse  = await axios.get("https://619dbd59131c600017088fe7.mockapi.io/cart")
      const favoritesResponse = await  axios.get("https://619dbd59131c600017088fe7.mockapi.io/favorites")

      setIsLoading(false)
      setCartItems(cartItemsResponse.data)
      setFavorites(favoritesResponse.data)
      setItems(itemsResponse.data)
    }

    fetchData()
  }, [])

  const toggleSideCart = () => {
    setvisible(!visible)
  }

  const onRemoveCartItem = (obj) => {
    try {
      axios.delete(`https://619dbd59131c600017088fe7.mockapi.io/cart/${obj.id}`)
      setCartItems(prev => prev.filter(item => item.id !== obj.id))
    } catch(error) {
      alert('Не удалось удалить товар из корзины')
    }    
  }

  const onAddToCart = async (obj) => {
    try {
      if(cartItems.find(item => item.id === obj.id)) {
        await axios.delete(`https://619dbd59131c600017088fe7.mockapi.io/cart/${obj.id}`)
        setCartItems(prev => prev.filter(item => item.id !== obj.id))
      } else {
        await axios.post("https://619dbd59131c600017088fe7.mockapi.io/cart", obj)
        setCartItems(prev => [...prev, obj])
      } 
    } catch(error) {
        alert('Произошла ошибка')
    }
  }

  const onAddToFavorite = (obj) => {
    if(favorites.find(item => item.id === obj.id)) {
        axios.delete(`https://619dbd59131c600017088fe7.mockapi.io/favorites/${obj.id}`)
        setFavorites(prev => prev.filter(item => item.id !== obj.id))
    } else {
        axios.post("https://619dbd59131c600017088fe7.mockapi.io/favorites", obj)
        setFavorites(prev => [...prev, obj])
    }
  }

  const onChangeSearchInput = (e) => {
    setSearchValue(e.target.value)
  }

  const isItemAdded = (id) => {
    return cartItems.some(obj => Number(obj.id)  === Number(id))
  }
  
  return (
    <AppContext.Provider value={{ items, cartItems, favorites, isItemAdded, onAddToFavorite, setvisible, setCartItems}}>
    <div className="wrapper">
        {
          visible && <SideCart onRemove={(obj) => onRemoveCartItem(obj)} items={cartItems} visible={visible} toggleSideCart={toggleSideCart}/>
        }   
        <Header toggleSideCart={toggleSideCart} cartItems={cartItems}/>
        <Routes>
          <Route path="/" element={
            <Home
              items={items} 
              searchValue={searchValue}
              cartItems={cartItems}
              onChangeSearchInput={onChangeSearchInput} 
              onAddToCart={(obj) => onAddToCart(obj)}
              isLoading={isLoading}
              />
          }/>
          <Route path="/favorites" element={<Favorites/>}/>
        </Routes>
    </div>
    </AppContext.Provider>
  );
}

export default App;
