import React, { useEffect, useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Loader from '../Loader';
import ItemsChild from './ItemsChild';
import { useNavigate } from 'react-router-dom';

/**
 * This component for rendering the cart and displaying in table format and handling checkout proccess.
 */

export default function ItemsMain() {
    const userId = localStorage.getItem("userId");
    const [cartData, setCartData] = useState([]);
    const [isLoadingCart, setLoadingCart] = useState(true);
    const [totalPrice, setTotalPrice] = useState(0);
    const [totalMRP, setTotalMRP] = useState(0);
    const [totalSaving, setTotalSaving] = useState(0);
    const [price, setPrice] = useState("");
    const formatter = new Intl.NumberFormat('en-IN', { maximumSignificantDigits: 3 })
    const navigate = useNavigate();

    //Fetch users cart data
    useEffect(() => {
        if (userId) {
            fetch(`http://localhost:8080/flipkart/cart/view?userId=${userId}`)
                .then(response => response.json())
                .then(data => {
                    setCartData(data);
                    setLoadingCart(false);
                    calculateTotalPrice(data);
                })
                .catch(error => {
                    console.error('Error fetching cart data:', error);
                    setLoadingCart(false);
                });
        }
    }, [userId]);

    //Calculate total price, MRP and total savings
    const calculateTotalPrice = (cartItems) => {
        const totalPrice = cartItems.reduce((accumulator, currentItem) => {
            return accumulator + currentItem.product_price * currentItem.quantity;
        }, 0);
        const totalMRP = cartItems.reduce((accumulator, currentItem) => {
            return accumulator + currentItem.product_MRP * currentItem.quantity;
        }, 0);

        setPrice(totalPrice)

        var totalPriceInFormat = formatter.format(totalPrice);
        setTotalPrice(totalPriceInFormat);

        var totalMRPInFormat = formatter.format(totalMRP);
        setTotalMRP(totalMRPInFormat);

        var totalSavingInFormat = formatter.format(totalMRP - totalPrice)
        setTotalSaving(totalSavingInFormat)

    };

    //Navigate to payment page with total price details
    const handleCheckout = () => {
        navigate('/payment', {
            state: {
                price,
                totalMRP,
                totalSaving
            }
        });
    };

    //Remove product from cart
    const handleRemoveFromCart = (productId) => {
        setCartData(prevData => prevData.filter(product => product.product_id !== productId));
        calculateTotalPrice(cartData.filter(product => product.product_id !== productId));
    };

    //Update the quantity
    const handleUpdateQuantity = (productId, newQuantity) => {
        fetch(`http://localhost:8080/flipkart/cart/update-quantity?userId=${userId}&productId=${productId}&quantity=${newQuantity}`, {
            method: 'PUT',
        })
            .then((response) => {
                if (response.ok) {
                    console.log("updated successfully");
                    calculateTotalPrice(cartData.map(product => product.product_id === productId ? { ...product, quantity: newQuantity } : product));
                } else {
                    console.error('Error updating quantity:', response.statusText);
                }
            })
            .catch((error) => console.error('Error updating quantity:', error));
    };

    return (
        <div className='container'>
            {isLoadingCart ? (
                <Loader />
            ) : (
                <>
                    {(cartData.length > 0) ? (
                        <div className='table-responsive'>
                            <table className="table table-bordered">
                                <thead>
                                    <tr>
                                        <th scope="col">Product</th>
                                        <th scope="col">Name</th>
                                        <th scope="col">Price</th>
                                        <th scope="col">Quantity</th>
                                        <th scope="col">Total</th>
                                        <th scope="col">Remove</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {cartData.map((product, index) => (
                                        <ItemsChild
                                            key={product.product_id}
                                            product={product}
                                            userId={userId}
                                            onRemove={handleRemoveFromCart}
                                            onUpdateQuantity={handleUpdateQuantity}
                                            srNo={index + 1}
                                        />
                                    ))}
                                </tbody>
                            </table>
                            <div>
                                <h4>Total: ₹{totalPrice} </h4>
                                <span class="text-danger"><s>₹{totalMRP}</s></span>
                                <h5>You are saving: ₹ {totalSaving} </h5>
                            </div>
                            <div className='d-flex justify-content-end mt-3 mb-3'>
                                <button type='button' className='btn btn-primary' onClick={handleCheckout} style={{ float: 'right', marginTop: "20px" }}>Proceed to Pay</button>
                            </div>
                            <ToastContainer />
                        </div>
                    ) : (
                        <div className='text-center mt-5'>
                            {navigate('/welcome')}
                        </div>
                    )}
                </>
            )}
        </div>
    );
}