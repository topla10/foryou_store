import { useEffect, useState } from 'react'
import PropTypes from "prop-types"
import { cartPropType } from './cartPropType'
import './products.css'
import { Link } from 'react-router-dom'

export function ProductList({ cart, setCart }) {
  const [prod, setProd] = useState([])
  
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


  useEffect(() => {
    fetchData()
  }, [])

  return (
    <>
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
            <Link to={`/product/${product.id}`}>View Details</Link>
 
          </div>
        ))}
      </div>
      
    </>
  )
    
}
ProductList.propTypes = {
  cart: cartPropType.isRequired,
  setCart: PropTypes.func.isRequired,
};
