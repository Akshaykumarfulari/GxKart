import React from 'react';
import Header2 from '../Components/Header/Header2';
import ControlledCarousel from '../Components/Body/ControlledCarousel';
import TodayDealMain from '../Components/Body/TodayDealMain';
import Offer from '../Components/Body/Offer';
import AllCategoryMain from '../Components/Body/AllCategoryMain';
import Footer from '../Components/Footer/Footer';
import { useNavigate } from 'react-router-dom';

/**
 * Handles user welcome page
 */
export default function Welcome() {
  const userId = localStorage.getItem("userId")
  const userRole = localStorage.getItem("userRole")
  const navigate = useNavigate();

  const handleAcces = () => {
    alert("Access forbidden")
    navigate("/login")
  }

  return (
    <div>
      {userId != null && userRole === 'User' ?
        <div>
          <Header2 />
          <ControlledCarousel />
          <TodayDealMain />
          <Offer />
          <AllCategoryMain />
          <Footer />
        </div> :

        <div>
          {handleAcces}
        </div>
      }
    </div>
  );
}
