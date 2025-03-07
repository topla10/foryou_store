import { useState } from 'react';
import {Routes, Route} from "react-router-dom";
import {ProductList} from './ProductList'
import {ProductDetails} from './ProductDetails'
import { AboutUs } from './AboutUs';
import { Checkout } from './Checkout';
import { TheHeader } from './TheHeader';

function App() {
  const [cart, setCart] = useState([]);

  const removeItem = (id) => {
    setCart(cart.filter((item) => item.id !== id));
  };

  const totalPrices = () => {
    return cart.reduce((accumulator, item) => accumulator + item.price, 0);
  };

  return (
    <>
      {/* Pass cart to TheHeader */}
      <TheHeader cart={cart} />

      <Routes>
        <Route path="/" element={<ProductList cart={cart} setCart={setCart} />} />
        <Route path="/checkout" element={<Checkout cart={cart} removeItem={removeItem} totalPrices={totalPrices} />} />
        <Route path='/product/:id' element= {<ProductDetails/>}/>
        <Route path='/aboutUs' element= {<AboutUs/>}/>
      </Routes>
    
    </>
 
  )

 
  /*return (
    <>
      <Routes>
        <Route path='/aboutUs' element= {<AboutUs/>}/>
        <Route path='/' element={<ProductList/>}/>
        <Route path='/product/:id' element= {<ProductDetails/>}/>
        <Route path='/checkout' element= {<Checkout/>}/>
      </Routes>
      
    </>
  )*/
    
  
}

export default App
