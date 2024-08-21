import React from 'react'
import TodayDealChild from './TodayDealChild'
import TodayDealData from './TodayDealData'

/**
 * This component is used for displaying all products, it passes data to TodayDeal component
 */

export default function TodayDealMain() {
    return (
        <div className='container bg-white' style={{ marginBottom: '40px', marginTop: '40px' }}>

            <h5 style={{ fontWeight: '600' }} >Grab the best deal of the <span style={{ color: '#047BD5' }}>Day</span> </h5>
            <hr />
            <div className="row" >
                <TodayDealChild details={TodayDealData} ></TodayDealChild>
            </div>

        </div>
    )
}
