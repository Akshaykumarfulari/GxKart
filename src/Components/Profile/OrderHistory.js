import React, { useEffect, useState } from 'react';

/**
 * This component for displaying user order history
 */
export default function OrderHistory ({ userId }) {
  const [orderHistory, setOrderHistory] = useState([]);

  //Fetch the user order data
  useEffect(() => {
    const fetchOrderHistory = async () => {
      try {
        const response = await fetch(`http://54.197.52.197:8080/gxkart/order-history/view/${userId}`);
        const data = await response.json();
        setOrderHistory(data);
      } catch {
        console.error('Error fetching order history');
      }
    };

    fetchOrderHistory();
  }, [userId]);

  return (
    <div style={{ marginTop: '10px' }}>
      <h5>Order History</h5>
      <hr></hr>
      {orderHistory.length > 0 ?
        <table className="table table-bordered">
          <thead>
            <tr>
              <th>Product Image</th>
              <th>Product Name</th>
              <th>Order Date</th>
            </tr>
          </thead>
          <tbody>
            {orderHistory.map((order, index) => (
              <tr key={index}>
                <td>
                  <img src={order.product_image} alt={order.product_name} style={{ width: '50px', height: '50px' }} />
                </td>
                <td>{order.product_name}</td>
                <td>{order.orderDate}</td>
              </tr>
            ))}
          </tbody>
        </table> : <h5>No orders found</h5>}
    </div>
  );
};