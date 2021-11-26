import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Card from '../components/Card/Card'

function Orders() {
  const [orders, setOrders] = useState([])
  const [isLoading, setIsLoading] = useState(true)


  useEffect(() => {
    const fetchData = async () => {
      try {
        const {data}  = await axios.get("https://619dbd59131c600017088fe7.mockapi.io/orders")
        setOrders(data)
        setIsLoading(false)
      } catch(error) {
        alert('Ошибка при запросе заказов')
        console.error(error);
      }
    }
    fetchData()
  }, [])

  
  return (
    <div className="orders">
      <h1 >Мои заказы</h1>
      <div className="shoes">
        {orders
          .map((order) => (
            <div key={order.id}>
              <h3>{`Заказ # ${order.id}`}</h3>
              <div style={{ display: 'flex', flexWrap: 'wrap'}}>
                  {(isLoading ? [...Array(8)] : order.items).map((item, index) => (
                    <Card
                      key={index}
                      card={item}
                      none={true}
                      loading={isLoading}
                    />
                  ))}
              </div>
            </div>
          ))}
      </div>
    </div>
  )
}

export default Orders

