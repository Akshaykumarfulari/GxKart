import axios from 'axios';
import React, { useState } from 'react'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

/**
 * This component for displaying individual wishlist items
 */
export default function WishlistChild({ product, userId, onRemove }) {

    //Remove product from wishlist
    const handleRemoveClick = () => {
        fetch(`http://54.197.52.197:8080/gxkart/wishlist/remove?userId=${userId}&productId=${product.product_id}`, {
            method: 'DELETE',
        })
            .then(response => {
                if (response.ok) {
                    onRemove(product.product_id)
                } 
            })
    };

    const handlecart = () => {
        if (userId === null) {
            toast("Please Login to Add to cart")
        } else {
            axios
                .post(`http://54.197.52.197:8080/gxkart/cart/add?userId=${userId}&productId=${product.product_id}&quantity=1`)
                .then(() => {
                    toast.success("Added to cart");

                    setTimeout(() => {
                        handleRemoveClick();
                    }, 1500);
                })
        }
    }

    return (
        <div class="card-body card shadow" style={{ marginBottom: "10px" }}>
            <div class="row g-0 d-flex justify-content-between align-items-center">
                <div class="col-md-2" style={{ textAlign: 'center' }}>
                    <img src={product.product_image} class="img-fluid rounded-start zoom" alt="..." style={{ objectFit: 'contain', height: "140px" }} />
                </div>

                <div class="col-md-7" style={{ marginTop: "10px", marginRight: '10px' }}>
                    <h5 class="card-title">{product.product_name}</h5>
                    <p class="card-text" style={{ overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>{product.product_description}</p>
                    <h5 class="mb-1 me-1">₹{product.product_price}</h5>
                    <span class="text-danger"><s>₹{product.product_MRP}</s></span>
                </div>

                <div class="col-md-3 col-xl-2 d-flex flex-column justify-content-between " style={{ textAlign: 'center' }}>
                    <button onClick={handlecart} class="btn btn-primary btn-sm" type="button" >
                        Add to cart
                    </button>
                    <ToastContainer />
                    <button onClick={handleRemoveClick} class="btn btn-outline-primary btn-sm" type="button" style={{ marginTop: '10px' }} >
                        Remove from wishlist
                    </button>
                    <ToastContainer />
                </div>
            </div>
        </div>
    );
}
