import React, { useEffect, useState } from 'react'
import WishlistChild from './WishlistChild';
import logo from '../../Images/empty-wishlist.png'
import Loader from '../Loader';
 
/**
 * This component is for displaying the user's wishlist data. It passes data to wishlistChild for displaying the wishlist values in style.
 */
export default function WishlistMain() {
  const userId = localStorage.getItem('userId');
  const [wishlistData, setWishlistData] = useState([]);
  const [isLoadingCart, setLoadingCart] = useState(true);
 
  //Fetch user's wishlist data
  useEffect(() => {
    if (userId) {
      fetch(`http://localhost:8080/flipkart/wishlist/view?userId=${userId}`)
        .then(response => response.json())
        .then(data => {
          setWishlistData(data)
          setLoadingCart(false)
        })
 
        .catch(error => console.error('Error fetching wishlist data:', error));
    }
  }, [userId]);
 
  const handleRemoveFromWishlist = (productId) => {
    setWishlistData(prevData => prevData.filter(product => product.product_id !== productId));
  };
 
  return (
    <div className='container justify-content-center' style={{ marginTop: "100px" }}>
      {isLoadingCart ? (
        <Loader />
      ) : (
        <>
          {(wishlistData.length > 0) ?
            <>
              <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                <h1>My Wishlist</h1>
              </div>
              <div style={{ marginTop: '40px' }}>
                {wishlistData.map(product => (
                  <WishlistChild
                    key={product.product_id}
                    product={product}
                    userId={userId}
                    onRemove={handleRemoveFromWishlist}
                  />
                ))}
              </div>  </> :
            <div style={{ textAlign: "center" }} >
              <img src={logo} class="img-fluid"></img>
            </div>}</>)}
    </div>
  );
};