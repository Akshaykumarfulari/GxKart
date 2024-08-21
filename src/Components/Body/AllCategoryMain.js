import React from 'react'
import AllCategoryChild from './AllCategoryChild'
import AllCategoryData from './AllCategoryData'

/**
 * This component is used for displaying all categories, it passes data to AllcategoryChild component
 */

export default function AllCategoryMain() {
    return (

        <div className='container bg-white' style={{ marginBottom: '20px' }} >

            <h5 style={{ fontWeight: '600' }}  >Shop from Top <span style={{ color: '#047BD5' }}>Category</span></h5>
            <hr />

            <div className='row'>
                <AllCategoryChild details={AllCategoryData}></AllCategoryChild>
            </div>
        </div>
    )
}
