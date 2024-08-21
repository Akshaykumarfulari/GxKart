import React, { useEffect, useState } from 'react'
import Header2 from '../Components/Header/Header2'
import Footer from '../Components/Footer/Footer'
import WishlistMain from '../Components/Wishlist/WishlistMain'
import { useNavigate } from 'react-router-dom';
import Loader from '../Components/Loader';

/**
 * Handles wishlist page
 */
export default function Wishlist() {
  const navigate = useNavigate();
  const userId = localStorage.getItem("userId")
  const [isLoading, setLoading] = useState(true);

  //Hanldes loader(spinner) time
  useEffect(() => {
    const loadingTimeout = setTimeout(() => {
      setLoading(false);
    }, 250);
    return () => clearTimeout(loadingTimeout)
  }, []);
  return (
    <div>
      {userId != null ?
        <div>
          <Header2></Header2>
          {isLoading ? (
            <Loader />
          ) :
            <WishlistMain />}
          <Footer></Footer>
        </div> :
        <div>
          {navigate('/')}
        </div>}
    </div>
  )
}
