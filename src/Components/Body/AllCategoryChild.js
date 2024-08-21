import React from 'react'
import './AllCategory.css'
import { Link } from 'react-router-dom'

/**
 * This component is for displaying individual category details
 */

export default function AllCategoryChild({ details }) {
    return (
        <>
            {details.map((data, index) => (

                <div className='categories col-md-2' key={data.id}>
                    <div key={index} style={{ display: 'flex', justifyContent: 'center', marginBottom: '10px', marginTop: '20px' }}>
                        <div className='rounded-container'>

                            <Link to={`/category/${data.name}`}>
                                <img className="rounded-img" src={data.image} ></img>
                            </Link>

                        </div>
                    </div>
                    <p className='text-center' style={{ fontSize: '13px', fontWeight: '700' }} >{data.Title}</p>
                </div>
            ))}
        </>
    )
}
