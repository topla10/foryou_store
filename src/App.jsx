import { useEffect } from 'react'
import './App.css'
import { TheHeader } from './TheHeader'

function App() {

  async function fetchData() {
    try {
      const response = await fetch('https://dummyjson.com/products')
      if(!response.ok) {
        throw new Error(`Status: ${response.status}`)
      }
      const data = await response.json()
      console.log(data)
    } catch (error) {
      console.log(`Fetch Error: ${error.message}`)
    }
  }

  useEffect(() => {
    fetchData()
  }, [])
  return (
    <>
      <TheHeader/>
      <h1>Hi there</h1>
    </>
  )
    
  
}

export default App
