import React, { useState } from 'react'
import 'react-toastify/dist/ReactToastify.css';

/**
 * This component for displaying individual cart items
 */
export default function CartChild({ product, userId, onRemove, onUpdateQuantity }) {
    var tempQuantity = product.quantity;
    const [quantity, setQuantity] = useState(tempQuantity);

    //Remove product from cart
    const handleRemoveClick = () => {
        fetch(`http://54.197.52.197:8080/gxkart/cart/remove?userId=${userId}&productId=${product.product_id}`, {
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

    //Handle change in quantity
    const handleQuantityChange = (newQuantity) => {

        if (newQuantity >= 1 && newQuantity <= 10) {
            setQuantity(newQuantity);
            onUpdateQuantity(product.product_id, newQuantity);
        }
    }
    return (
        <div class="card-body card shadow" style={{ marginBottom: "10px" }}>
            <div class="row g-0 d-flex justify-content-between align-items-center" >
                <div class="col-md-2" style={{ textAlign: 'center' }}>
                    <img src={product.product_image} class="img-fluid rounded-start zoom" alt="..." style={{ objectFit: 'contain', height: "140px" }} />
                </div>

                <div class="col-md-7" style={{ marginTop: "10px", marginRight: '10px' }}>
                    <h5 class="card-title">{product.product_name}</h5>
                    <p class="card-text" style={{ overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>{product.product_description}</p>
                    <h5 class="mb-1 me-1">₹{product.product_price}</h5>
                    <span class="text-danger"><s>₹{product.product_MRP}</s></span>
                </div>

                <div class="col-md-2 col-xl-2 d-flex flex-column justify-content-between " style={{ textAlign: 'center' }}>
                    <h6>Quanity</h6>
                    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginTop: "10px" }}>
                        <button onClick={() => handleQuantityChange(quantity - 1)} className="btn btn-secondary btn-sm" type="button">
                            -
                        </button>
                        <span style={{ margin: '0 10px' }}>{quantity}</span>
                        <button onClick={() => handleQuantityChange(quantity + 1)} className="btn btn-secondary btn-sm" type="button">
                            +
                        </button>

                    </div>
                    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginTop: "10px", cursor: 'pointer' }}
                    >
                        <button onClick={handleRemoveClick} class="btn btn-danger btn-sm mt-2" type="button" >
                            Remove <i class="bi bi-trash"></i>
                        </button>

                    </div>

                </div>
            </div>
        </div>
    );
}
