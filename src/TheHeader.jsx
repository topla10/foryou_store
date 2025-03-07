import './theHeader.css'
import { Link } from 'react-router-dom'

export function TheHeader({cart}) {
    return(
        <div className='theHeader'> 
            <h1>ForYou Store</h1>
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/aboutUs">About Us</Link></li>
                <li><Link to="/checkout">
        View Cart {cart.length > 0 && `(${cart.length})`}
      </Link></li>
            </ul>      
        </div>
    )
}