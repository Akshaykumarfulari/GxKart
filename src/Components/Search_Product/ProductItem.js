import React, { useState } from 'react';
import '../imagezoom.css'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from "axios"

//This component for displaying individual product based on user search
export default function ProductItem({ product }) {
  const [addedToWishlist, setaddedToWishlist] = useState(false);
  const [addedToCart, setaddedToCart] = useState(false);
  const userId = localStorage.getItem("userId")

  //Handles add to wishlist & remove from wishlist
  const handlewishlist = () => {
    if (userId === null) {
      toast("Please Login to Add to wishlist")
    } else {
      if (addedToWishlist) {
        axios
          .delete(`http://54.197.52.197:8080/flipkart/wishlist/remove?userId=${userId}&productId=${product.product_id}`)
          .then(() => {
            toast.success("Removed from wishlist");
            setaddedToWishlist(false);
          })
      } else {
        axios
          .post(`http://54.197.52.197:8080/flipkart/wishlist/add?userId=${userId}&productId=${product.product_id}`)
          .then(() => {
            toast.success("Added to wishlist");
            setaddedToWishlist(true);
          })
          .catch(() => {
            toast.success("Already in wishlist");
            setaddedToWishlist(true);
          });
      }
    }
  };

  //Handles add to cart & remove from cart
  const handlecart = () => {
    if (userId === null) {
      toast("Please Login to Add to cart")
    } else {
      if (addedToCart) {
        axios
          .delete(`http://54.197.52.197:8080/flipkart/cart/remove?userId=${userId}&productId=${product.product_id}`)
          .then(() => {
            toast.success("Removed from cart");
            setaddedToCart(false);
          })
          .catch((error) => {
            console.error('Error removing from cart:', error);
          });
      } else {
        axios
          .post(`http://54.197.52.197:8080/flipkart/cart/add?userId=${userId}&productId=${product.product_id}&quantity=1`)
          .then(() => {
            toast.success("Added to cart");
            setaddedToCart(true);
          })
          .catch((error) => {
            console.error('Error adding to cart:', error);
          });
      }
    }
  }
  return (
    <div>

      <div className="card-body">
        <div className="row g-0">
          <div className="col-md-3">
            <div >
              <img src={product.product_image} className="img-fluid rounded-start zoom" alt="..." style={{ objectFit: 'contain', height: "250px" }} />
            </div>
          </div>

          <div className="col-md-6" style={{ marginTop: "10px" }}>
            <h4 className="card-title">{product.product_name}</h4>
            <p className="card-text">{product.product_description}</p>
            <p className="card-text"><small class="text-muted h5"> {product.product_off}% off</small></p>
            <p className={{ marginTop: "30px" }}>FREE delivery <span style={{ fontWeight: "600" }}>Sat, 10 Feb</span><br></br>
              Or fastest delivery <span style={{ fontWeight: "600" }}>Tomorrow, 08 Feb</span></p>
          </div>

          <div className="col-md-6 col-lg-3 col-xl-3 border-sm-start-none border-start" >
            <div className="d-flex flex-row align-items-center mb-1" style={{ marginLeft: "10px", marginTop: "10px" }}>
              <h4 className="mb-1 me-1">₹{product.product_price}</h4>
              <span className="text-danger"><s>₹{product.product_MRP}</s></span>
            </div>
            <h6 className="text-success" style={{ marginLeft: "10px" }}> {product.product_price >= 499 ? 'FREE shipping' : <p>FREE delivery <span style={{ color: 'black', fontWeight: "400" }}>on orders dispatched by Gxkart over ₹499.</span></p>}</h6>
            <div className="d-flex flex-column mt-4" style={{ marginLeft: "10px" }}>
              <button onClick={handlecart} className="btn btn-primary btn-sm" type="button">
                {addedToCart ? 'Remove from cart' : 'Add to cart'}
              </button>
              <ToastContainer />
              <button onClick={handlewishlist} className="btn btn-outline-primary btn-sm mt-2" type="button" >
                {addedToWishlist ? 'Remove from wishlist' : 'Add to wishlist'}
              </button>
              <ToastContainer />
            </div>
          </div>

        </div>
      </div>
      <hr></hr>
    </div>
  );
}