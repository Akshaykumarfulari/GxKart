import React, { useEffect, useState } from 'react';
import Header1 from '../Components/Header/Header1'
import Footer from '../Components/Footer/Footer'
import CategoryParent from '../Components/Category_Product/CategoryParent'
import Header2 from '../Components/Header/Header2';
import Loader from '../Components/Loader';

/**
 * Hanldes all category page
 */
export default function Category() {
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
    <>
      {userId === null ?
        <div>
          <Header1 ></Header1>
          {isLoading ? (
            <Loader />
          ) :
            <CategoryParent />}
          <Footer></Footer>
        </div> :

        <div>
          <Header2></Header2>
          {isLoading ? (
            <Loader />
          ) :
            <CategoryParent />}
          <Footer></Footer>
        </div>
      }
    </>
  )
}
