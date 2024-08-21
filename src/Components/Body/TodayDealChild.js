import React from 'react';
import './TodayDeal.css'
import '../../Components/imagezoom.css'

/**
 * This component is for displaying individual product details on home page
 */

export default function TodayDealChild({ details }) {

    return (
        <>
            {details.map((data, index) => (

                <div className="card-container col-md-2" key={data.id}>
                    <div className="card " key={index} style={{ margin: "25px 0 20px 0" }}>
                        <a href={`/search?search=${data.link}`}><img className="card-img-top zoom" style={{ objectFit: 'contain' }} src={data.image} alt={`Card ${index + 1}`} ></img></a>

                        <div className="card-body" >
                            <h6>{data.Name}</h6>
                            <h6>₹{data.price} &nbsp; <span style={{ textDecoration: 'line-through' }}>₹{data.MRP}</span></h6>
                            <hr />
                            <h6 style={{ color: 'green' }}>Save: ₹{data.MRP - data.price}</h6>
                        </div>

                    </div>
                </div>
            ))}</>
    );
}