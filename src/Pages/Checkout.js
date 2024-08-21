import Header2 from '../Components/Header/Header2'
import CheckoutMain from '../Components/CheckOut/CheckoutMain'
import Footer from '../Components/Footer/Footer'
import Loader from '../Components/Loader';
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';

/**
 * Hanldes checkout 
 */
export default function Checkout() {
    const [isLoading, setLoading] = useState(true);

    //Hanldes loader time(spinner)
    useEffect(() => {
        const loadingTimeout = setTimeout(() => {
            setLoading(false);
        }, 400);
        return () => clearTimeout(loadingTimeout)
    }, []);
    const userId = localStorage.getItem("userId")
    const navigate = useNavigate();
    return (
        <div>
            {userId != null ?
                <div>
                    <Header2 />
                    {isLoading ? (
                        <Loader />
                    ) :
                        <CheckoutMain />}
                    <Footer />
                </div> :
                <div>
                    {navigate('/')}
                </div>
            }
        </div>
    )
}
