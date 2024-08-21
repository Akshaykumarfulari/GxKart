import React, { useEffect, useState } from 'react';
import CartChild from './CartChild';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import logo from '../../Images/cart.png';
import Loader from '../Loader';
import { useNavigate } from 'react-router-dom';

/**
 * This component is for displaying the user's cart data. It passes data to CartChild for displaying the cart values in style. 
 */
export default function CartMain() {
    const userId = localStorage.getItem('userId');
    const [cartData, setCartData] = useState([]);
    const [isLoadingCart, setLoadingCart] = useState(true);
    const navigate = useNavigate();

    //Fetch user's cart data
    useEffect(() => {
        if (userId) {
            fetch(`http://localhost:8080/flipkart/cart/view?userId=${userId}`)
                .then(response => response.json())
                .then(data => {
                    setCartData(data);
                    setLoadingCart(false);
                })
                .catch(error => {
                    console.error('Error fetching cart data:', error);
                    setLoadingCart(false);
                });
        }
    }, [userId]);

    //Navigate to checkout page
    const handleCheckout = () => {
        navigate('/checkout', { replace: true });
    };

    //Remove product from cart
    const handleRemoveFromCart = (productId) => {
        setCartData(prevData => prevData.filter(product => product.product_id !== productId));
    };

    //Update product quantity in cart
    const handleUpdateQuantity = (productId, newQuantity) => {
        fetch(`http://localhost:8080/flipkart/cart/update-quantity?userId=${userId}&productId=${productId}&quantity=${newQuantity}`, {
            method: 'PUT',
        })
            .then((response) => {
                if (response.ok) {
                    console.log("updated successfully");
                } else {
                    console.error('Error updating quantity:', response.statusText);
                }
            })
            .catch((error) => console.error('Error updating quantity:', error));
    };

    return (
        <div className='container justify-content-center' style={{ marginTop: "100px" }}>
            {isLoadingCart ? (
                <Loader />
            ) : (
                <>
                    {(cartData.length > 0) ? (
                        <>
                            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                                <h1>My Cart</h1>
                            </div>
                            <div style={{ marginTop: '40px', marginBottom: "100px" }}>
                                {cartData.map(product => (
                                    <CartChild
                                        key={product.product_id}
                                        product={product}
                                        userId={userId}
                                        onRemove={handleRemoveFromCart}
                                        onUpdateQuantity={handleUpdateQuantity}
                                    />
                                ))}
                                <button type='button' className='btn btn-primary' onClick={handleCheckout} style={{ float: 'right', marginTop: "20px" }}>Proceed to Checkout</button>
                                <ToastContainer />
                            </div>
                        </>
                    ) : (
                        <div style={{ textAlign: "center" }} >
                            <img src={logo} alt="cart-logo" className="img-fluid"></img>
                        </div>
                    )}
                </>
            )}
        </div>
    );
}