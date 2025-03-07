import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

export function Checkout({cart, removeItem, totalPrices}) {
    return(
        <div>
            <h2>Checkout</h2>
            
            {cart.length === 0 ? (<p>Your cart is empty</p>): (
                cart.map(item => (
                    <div key={item.id}>
                        <h3>{item.title}</h3>
                        <p>{item.price}</p>
                        <button onClick={ () => removeItem(item.id)}>Remove</button>
                    </div>
                ))
            )}

            <h3>Total: {totalPrices()}</h3>
            <Link to='/'>Continue Shopping</Link>
        </div>
    )

}
Checkout.propTypes = {
    removeItem: PropTypes.func.isRequired,
    totalPrices: PropTypes.func.isRequired
}