import React, {useState, useEffect} from "react";
import axios from "axios";
import { Route, Routes } from "react-router";
import AppContext from "./context";
import Header from './pages/Header';
import Home from './pages/Home';
import Favorites from "./pages/Favorites";
import Orders from "./pages/Orders";
import SideCart from './components/SideCart/SideCart';
import "./App.scss";

function App() {
  const [items, setItems] = useState([])
  const [cartItems, setCartItems] = useState([])
  const [favorites, setFavorites] = useState([])
  const [visiblecart, setvisibleCart] = useState(false)
  const [searchValue, setSearchValue] = useState('')
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    async function fetchData() {
      try {
        const [itemsResponse, cartItemsResponse, favoritesResponse] = await Promise.all([
          axios.get("https://619dbd59131c600017088fe7.mockapi.io/items"),
          axios.get("https://619dbd59131c600017088fe7.mockapi.io/cart"),
          axios.get("https://619dbd59131c600017088fe7.mockapi.io/favorites"),
        ])

        setIsLoading(false)
        setCartItems(cartItemsResponse.data)
        setFavorites(favoritesResponse.data)
        setItems(itemsResponse.data)
      } catch(error) {
        alert('Ошибка при запросе данных')
        console.error(error);
      }  
    }
    fetchData()
  }, [])

  const toggleSideCart = () => {
    setvisibleCart(!visiblecart)
  }

  const onRemoveCartItem = (obj) => {
    try {
      axios.delete(`https://619dbd59131c600017088fe7.mockapi.io/cart/${obj.id}`)
      setCartItems(prev => prev.filter(item => Number(item.id) !== Number(obj.id)))
    } catch(error) {
      alert('Ошибка при удалении из корзины')
      console.error(error);
    }    
  }

  const onAddToCart = async (obj) => {
    const findItem = cartItems.find(item => Number(item.itemId) === Number(obj.id))
    try {
      if(findItem) {
        setCartItems(prev => prev.filter(item => Number(item.itemId) !== Number(obj.id)))
        await axios.delete(`https://619dbd59131c600017088fe7.mockapi.io/cart/${findItem.id}`)
      } else {
        const {data} = await axios.post("https://619dbd59131c600017088fe7.mockapi.io/cart", obj)
        setCartItems(prev => [...prev, data])
      } 
    } catch(error) {
        alert('Ошибка при добавлении в корзину')
        console.error(error);
    }
  }

  const onAddToFavorite = async (obj) => {
    const findFavorite = favorites.find(favObj => Number(favObj.itemId) === Number(obj.itemId)) 
    try {
      if(findFavorite) {
        setFavorites(prev => prev.filter(item => Number(item.itemId) !== Number(obj.itemId)))
        await axios.delete(`https://619dbd59131c600017088fe7.mockapi.io/favorites/${findFavorite.id}`)  
      } else {
          const {data} = await axios.post("https://619dbd59131c600017088fe7.mockapi.io/favorites", obj)
          setFavorites(prev => [...prev, data])
      }
    } catch(error) {
        alert('Ошибка при добавлении в избранное')
        console.error(error);
      }
  }

  const onChangeSearchInput = (e) => {
    setSearchValue(e.target.value)
  }

  const isItemAdded = (id, array) => {
    return array.some(obj => Number(obj.itemId) === Number(id))
  }
  
  return (
    <AppContext.Provider value={{ 
      items, 
      cartItems, 
      favorites, 
      isItemAdded, 
      onAddToFavorite, 
      onAddToCart, 
      setvisibleCart, 
      setCartItems}}>
    <div className="wrapper">
        <SideCart 
          onRemove={(obj) => onRemoveCartItem(obj)} 
          items={cartItems} visible={visiblecart} 
          toggleSideCart={toggleSideCart}
          opened={visiblecart}
        />  
        <Header toggleSideCart={toggleSideCart} cartItems={cartItems}/>
        <Routes>
          <Route path="/" element={
            <Home
              items={items} 
              searchValue={searchValue}
              cartItems={cartItems}
              onChangeSearchInput={onChangeSearchInput}
              isLoading={isLoading}
              />
          }/>
          <Route path="/favorites" element={<Favorites/>}/>
          <Route path="/orders" element={<Orders/>}/>
        </Routes>
    </div>
    </AppContext.Provider>
  );
}

export default App;
