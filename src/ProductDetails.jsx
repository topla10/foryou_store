import { useEffect, useState } from 'react'
import {useParams} from 'react-router-dom'
import { Link } from 'react-router-dom'

export function ProductDetails() {

    const[product, setProduct] = useState(null)
    const{id} = useParams()

    const fetchProduct = async () => {
        try {
            const response = await fetch(`https://dummyjson.com/products/${id}`)

            if(!response.ok) {
                throw new Error(`Error Status: ${response.status}`)
            }
            const data = await response.json()
            //console.log(data)
            setProduct(data)
        } catch (error) {
            console.error(`Error Fetching: ${error.message}`)
        }
    }
    useEffect(() => {
        fetchProduct()
    }, [id]);
    
    

    if(!product) {
        return(<h2>Loading details...</h2>)
    }
    return (
        <>  
            <h1>{product.title}</h1>
            <img src={product.thumbnail} alt={product.title} style={{ width: '300px' }} />
            <p><strong>Category:</strong> {product.category}</p>
            <p><strong>Price:</strong> ${product.price}</p>
            <p><strong>Stock Available:</strong> {product.stock}</p>
            <p><strong>Brand:</strong> {product.brand ? product.brand : "No brand available"}</p>
            <p><strong>Rating:</strong> {product.rating} stars</p>
            <p><strong>Description:</strong> {product.description}</p>

            {/* Show multiple product images */}
            <div className="image-gallery">
                {product.images && product.images.map((img, index) => (
                    <img key={index} src={img} alt={`${product.title} ${index}`} style={{ width: '100px', margin: '5px' }} />
                ))}
            </div>

            <br />
            <Link to="/">Back to Product List</Link>
        </>
    )
}