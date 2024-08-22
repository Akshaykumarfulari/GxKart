import React, { useState } from 'react';
import 'react-toastify/dist/ReactToastify.css';

/**
 * This component is for rendering the individual item from the cart and displaying in table format
 */
export default function ItemsChild({ product, userId, onRemove, onUpdateQuantity }) {
    const [quantity, setQuantity] = useState(product.quantity);

    //Remove item from the cart
    const handleRemoveClick = () => {
        fetch(`http://54.197.52.197:8080/flipkart/cart/remove?userId=${userId}&productId=${product.product_id}`, {
            method: 'DELETE',
        })
            .then(response => {
                if (response.ok) {
                    onRemove(product.product_id)
                    console.log('Product removed successfully');
                } else {
                    console.error('Error removing product:', response.statusText);
                }
            })
            .catch(error => console.error('Error removing product:', error));
    };
    
    //Update the item quantity
    const handleQuantityChange = (newQuantity) => {
        if (newQuantity >= 1 && newQuantity <= 10) {
            setQuantity(newQuantity);
            onUpdateQuantity(product.product_id, newQuantity)
        }
    };

    return (
        <tr>
            <td>
                <img src={product.product_image} alt={product.product_name} style={{ width: '50px', height: '50px', objectFit: 'contain' }} />
            </td>
            <td>{product.product_name}</td>
            <td>₹{product.product_price}</td>
            <td>
                <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                    <button onClick={() => handleQuantityChange(quantity - 1)} className="btn btn-secondary btn-sm" type="button">-</button>
                    <span style={{ margin: '0 10px' }}>{quantity}</span>
                    <button onClick={() => handleQuantityChange(quantity + 1)} className="btn btn-secondary btn-sm" type="button">+</button>
                </div>
            </td>
            <td>₹{product.product_price * quantity}</td>
            <td>
                <a onClick={handleRemoveClick} style={{cursor:"pointer"}}>
                    <i className="bi bi-trash"></i>
                </a>
            </td>
        </tr>
    );
}