import React, { useEffect, useState } from 'react';
import Product from '../Product/Product';
import './Products.css';

const Products = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch('https://sleepy-earth-76800.herokuapp.com/product')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])
    return (
        
            <div id='products' className='container'>
                <div className="row ">
                    <h1 className='products-title mt-5'>  My Inventory  </h1>
                   
                    <div className="products-container">
                        {
                            products.slice(0, 6).map(product =>  <Product
                                key={product._id}
                                product={product}
                                >
                             
                            </Product>)
                              


                           
                        }
                    </div>
                 
                </div>
            </div>
 
    );
};

export default Products;