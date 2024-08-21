import React from 'react'
import workwear from '../../Images/o1.png'
import casualwear from '../../Images/o2.png'
import sportswear from '../../Images/o3.png'
import ethnicwear from '../../Images/o4.png'
import wfhwear from '../../Images/o5.png'
import westernwear from '../../Images/o6.png'

/**
 * This component displays offers images on home page
 */

export default function Offer() {
    return (
        <div className='container bg-white' style={{ marginBottom: '60px' }}>

            <h5 style={{ fontWeight: '600' }} > <span style={{ color: '#047BD5' }}>Up to 80% off</span> | Check out the latest arrivals</h5>
            <hr />
            <div className="row" style={{ marginTop: '40px' }}>

                <div className="col-12 col-md-2">
                    <div className='card'>
                        <img src={workwear} className="card-img-top img-fluid" alt="Image 1" />
                    </div>
                </div>

                <div className="col-12 col-md-2">
                    <div className='card'>
                        <img src={casualwear} className="card-img-top img-fluid" alt="Image 1" />
                    </div>
                </div>

                <div className="col-12 col-md-2">
                    <div className='card'>
                        <img src={sportswear} className="card-img-top img-fluid" alt="Image 1" />
                    </div>
                </div>

                <div className="col-12 col-md-2">
                    <div className='card'>
                        <img src={ethnicwear} className="card-img-top img-fluid" alt="Image 1" />
                    </div>
                </div>

                <div className="col-12 col-md-2">
                    <div className='card'>
                        <img src={wfhwear} className="card-img-top img-fluid" alt="Image 1" />
                    </div>
                </div>

                <div className="col-12 col-md-2">
                    <div className='card'>
                        <img src={westernwear} className="card-img-top img-fluid" alt="Image 1" />
                    </div>
                </div>

            </div>
        </div>
    )
}