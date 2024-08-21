import React from 'react'
import '../imagezoom.css'

/**
 * This component for displaying individual product details based on selected category
 */
export default function CategoryChild({ product }) {

  return (
    <>
      <div>
        <div className="card" style={{ width: '18rem', margin: '25px 0', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)' }}>

          <img src={product.product_image} className="card-img-top zoom" style={{ width: "200px", height: '200px', justifyContent: "center", objectFit: 'contain' }} />

          <div className="card-body">
            <h5 className="card-title">{product.product_name}</h5>
            <p className="card-text" style={{ overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
              {product.product_description}
            </p>
          </div>

          <div className="card-footer d-flex justify-content-between align-items-center">

            <div>
              <span className="text-secondary" style={{ marginRight: '10px', textDecoration: 'line-through' }}>
                M.R.P.:₹{product.product_MRP}
              </span>
              <span className="text-primary font-weight-bold">
                ₹{product.product_price}
              </span>
            </div>

            <div className="text-danger">
              {product.product_off}% off
            </div>

          </div>
        </div>

      </div>
    </>
  )
}
