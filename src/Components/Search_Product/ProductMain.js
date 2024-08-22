import React, { useEffect, useState } from 'react';
import ProductItem from './ProductItem';
import axios from 'axios';
import FilterSection from './FilterSection';
import logo from '../../Images/oopsError.png';
import Loader from '../Loader';

/**
 * This component is for displaying search product
 */
export default function ProductMain() {
    const [products, setProducts] = useState([]);
    const [isLoadingCart, setLoadingCart] = useState(true);
    const [selectedFilters, setSelectedFilters] = useState([]);

    // Fetch product based on user search and selected filters
    const handleSearch = async () => {
        const queryParams = new URLSearchParams(window.location.search);
        const search = queryParams.get('search');

        try {
            const response = await axios.get(
                `http://54.197.52.197:8080/flipkart/get-products?subcategory=${search}`
            );
            let filteredProducts = response.data;

            // Apply selected filters
            if (selectedFilters.length > 0) {
                filteredProducts = filteredProducts.filter((product) => {
                    return selectedFilters.some(
                        (filter) => product.product_off >= parseInt(filter.replace('filter', ''))
                    );
                });
            }

            setProducts(filteredProducts);
            setLoadingCart(false);
            window.scrollTo({ top: 0, behavior: 'instant' });
        } catch (error) {
            setLoadingCart(false);
            console.log('error searching products', error);
        }
    };

    const handleFilterChange = (filters) => {
        setSelectedFilters(filters);
    };

    useEffect(() => {
        handleSearch();
    }, [selectedFilters]);

    return (
        <div style={{ backgroundColor: 'FAFAFA' }}>
            {isLoadingCart ? (
                <Loader />
            ) : (
                <div className='container d-flex justify-content-center' style={{ marginTop: '100px' }}>
                    {products.length > 0 ?
                        <div className="col-md-12" >
                            <div className="row">
                                <div className="col-md-3">
                                    <div className="card shadow" >
                                        <FilterSection onFilterChange={handleFilterChange} />
                                    </div>
                                </div>

                                <div className="col-md-9">
                                    <div className="card shadow" >
                                        {products.map((product) => (
                                            <ProductItem key={product.id} product={product}></ProductItem>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                        :
                        <div className='text-center' style={{ marginTop: '100px' }}>
                            <img src={logo} alt="Error logo" />
                            <h1 style={{ marginBottom: '140px', marginTop: '20px' }}>Oops! Something went wrong :(</h1>
                        </div>
                    }
                </div>

            )}
        </div>
    );
}
