import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import Header2 from '../Components/Header/Header2';
import Footer from '../Components/Footer/Footer';
import CartMain from '../Components/Cart/CartMain';
import Loader from '../Components/Loader';

/**
 * Hanldes cart page
 */
export default function Cart() {
    const [isLoading, setLoading] = useState(true);

     //Hanldes loader(spinner) time
    useEffect(() => {
        const loadingTimeout = setTimeout(() => {
            setLoading(false);
        }, 250);
        return () => clearTimeout(loadingTimeout)
    }, []);

    const navigate = useNavigate();
    const userId = localStorage.getItem("userId")
    return (
        <div>
            {userId != null ?
                <div>
                    <Header2></Header2>
                    {isLoading ? (
                        <Loader />
                    ) :
                        <CartMain />}
                    <Footer></Footer>
                </div> :
                <div>
                    {navigate('/')}
                </div>}
        </div>
    )
}
