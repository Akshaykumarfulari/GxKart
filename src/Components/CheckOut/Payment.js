import React, { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

/**
 * Razorpay payment proccess
 */
export default function Payment() {
    const location = useLocation();
    const { price, totalMRP, totalSaving } = location.state || {};
    const navigate = useNavigate();
    const userId = localStorage.getItem("userId");
    const userName = localStorage.getItem("userName")


    useEffect(() => {
        if (price) {
            const createOrder = async () => {
                return await fetch(`http://54.197.52.197:8080/gxkart/payment?userId=${userId}&amount=${price}`, {
                    mode: 'no-cors',
                    method: 'GET',
                });
            };

            const handlePayment = async () => {
                const order = await createOrder();

                const options = {
                    key: 'rzp_test_6aV0cOM5LAV9Pk',
                    amount: price * 100,
                    currency: "INR",
                    name: userName,
                    description: "Test Transaction",
                    order_id: order,
                    handler: function () {
                        alert('Payment Success, Order Placed');

                        fetch(`http://54.197.52.197:8080/gxkart/cart/delete?userId=${userId}`, {
                            method: 'DELETE',
                        })
                            .then(response => {
                                if (response.ok) {
                                    console.log('Cart items deleted successfully');
                                } else {
                                    console.error('Error deleting cart items:', response.statusText);
                                }
                            })
                            .catch(error => console.error('Error deleting cart items:', error));

                        navigate('/welcome');
                    },
                    prefill: {
                        contact: 'contact'
                    },
                    notes: {
                        address: "ABC, Bangalore",
                    },
                    theme: {
                        color: "#3399cc",
                    },
                };
                const rzp1 = new window.Razorpay(options);

                rzp1.on("payment.failed", function (response) {
                    alert(response.error.code);
                });

                rzp1.open();
            };
            handlePayment();
        }
    }, [price, totalMRP, totalSaving, userId, navigate]);

    return (
        <div>

        </div>
    );
}
