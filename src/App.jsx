import { useEffect, useState } from 'react'
import './App.css'
import './products.css'
import { TheHeader } from './TheHeader'

function App() {
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
            </div>
          </div>
        ))}
      </div>
      <p>Hi there</p>
    </>
  )
    
  
}

export default App
