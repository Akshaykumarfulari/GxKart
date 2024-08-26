import React from 'react'
import Header1 from '../Components/Header/Header1'
import ControlledCarousel from '../Components/Body/ControlledCarousel'
import TodayDealMain from '../Components/Body/TodayDealMain'
import Offer from '../Components/Body/Offer'
import AllCategoryMain from '../Components/Body/AllCategoryMain'
import Footer from '../Components/Footer/Footer'

/**
 * Handles home page (without login)
 */
export default function Home() {
  const userId = localStorage.getItem("userId")
  return (
    <div >
      {userId === null ?
        <div>
          <Header1></Header1>
          <ControlledCarousel></ControlledCarousel>
          <TodayDealMain></TodayDealMain>
          <Offer></Offer>
          <AllCategoryMain></AllCategoryMain>
          <Footer></Footer>
        </div> : <h1>Sorry</h1>}
    </div>
  )
}
