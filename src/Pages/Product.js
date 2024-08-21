import Header1 from '../Components/Header/Header1'
import ProductMain from '../Components/Search_Product/ProductMain'
import Footer from '../Components/Footer/Footer'
import Header2 from '../Components/Header/Header2';
import Loader from '../Components/Loader';
import React, { useEffect, useState } from 'react';

/**
 * Handles search product page
 */
export default function Product() {
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
            {userId!=null ?
                <div >
                    <Header2 ></Header2>
                    {isLoading ? (
                        <Loader />
                    ) :
                        <ProductMain />}
                    <Footer></Footer>
                </div> :

                <div >
                    <Header1 ></Header1>
                    {isLoading ? (
                        <Loader />
                    ) :
                        <ProductMain />}
                    <Footer></Footer>
                </div>
            }
        </>
    )
}
