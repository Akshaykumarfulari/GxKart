import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import CategoryChild from './CategoryChild';
import axios from 'axios';
import errorImage from '../../Images/oopsError.png'
import Loader from '../Loader';

/**
 * This component is for displaying the products based on selected category
 */

export default function CategoryParent() {

  const [products, setProducts] = useState([]);
  const { categoryTitle } = useParams();
  const [isLoadingCart, setLoadingCart] = useState(true);

  //Fetchs the data based for selected category
  const handleSearch = async () => {
    try {
      const response = await axios.get(`http://localhost:8080/flipkart/category/${categoryTitle}`);
      setProducts(response.data);
      setLoadingCart(false);
      window.scrollTo({ top: 0, behavior: 'instant' })
    } catch (error) {
      console.log("error searching products", error);
    }
  }
  useEffect(() => {
    handleSearch();
  }, [categoryTitle]);

  return (
    <div>
      {isLoadingCart ? (
        <Loader />
      ) : (
        <>
          <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginTop: '100px' }}>
            <h1>{categoryTitle}</h1>
          </div>

          <div className='d-flex flex-wrap justify-content-around'>
            {products.length > 0 ? (
              products.map((product) => (
                <div>
                  <CategoryChild product={product} />
                </div>
              ))
            ) :
              <div className='text-center' style={{ marginTop: "100px" }}>
                <img src={errorImage} />
                <h1 style={{ marginBottom: "140px", marginTop: "20px" }}>Oops! Something went wrong :(</h1>
              </div>
            }
          </div>
        </>)}
    </div>
  )
}
