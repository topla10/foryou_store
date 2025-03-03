import { useEffect, useState } from 'react'
import './App.css'
import './products.css'
import { TheHeader } from './TheHeader'
import { Checkout } from './Checkout'

function App() {
  const [prod, setProd] = useState([])
  const [cart, setCart] = useState([])
  async function fetchData() {
    try {
      const response = await fetch('https://dummyjson.com/products')
      if(!response.ok) {
        throw new Error(`Status: ${response.status}`)
      }
      const data = await response.json()
      setProd(data.products)
      //console.log(data)
    } catch (error) {
      console.log(`Fetch Error: ${error.message}`)
    }
  }
  
  const addToCart = (element) => {
    // Make sure no duplicated items added to the cart
    if(!cart.some(item => item.id === element.id)) 
      setCart([...cart, element])
  }

  const removeItem = (id) => {
    setCart(cart.filter(item => item.id !== id))
}

const totalPrices = () => {
  return cart.reduce((accumulator, item) => accumulator + item.price, 0)
}

  useEffect(() => {
    fetchData()
  }, [])

  return (
    <>
      <TheHeader />
      <h1>Product List</h1>
      <div className="card-container">
        {prod.map(product => (
          <div className="card" key={product.id}>
            <img src={product.thumbnail} alt={product.title} className="card-image" />          <div className="card-content">
              <h2 className="card-title">{product.title}</h2>
              <p className="card-description">{product.description}</p>
              <p className="card-price">${product.price}</p>
              <button onClick={ () => addToCart(product)}>Add to cart</button>
            </div>
          </div>
        ))}
      </div>
      
      <Checkout cart={cart} removeItem={removeItem} totalPrices={totalPrices}/>
    </>
  )
    
  
}

export default App
