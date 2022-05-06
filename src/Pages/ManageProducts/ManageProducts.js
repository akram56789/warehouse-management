 import React from 'react';
import useProducts from '../../Hooks/UseProducts';
import Product from '../Product/Product';
 
 const ManageProducts = () => {
    const [products, setProducts] =useProducts()
     return (
        <div>
        <div id='products' className='container'>
            <div className="row ">
                <h1 className='products-title mt-5'>  My Inventory  </h1>
               
                <div className="products-container">
                    {
                        products.map(product =>  <Product
                            key={product._id}
                            product={product}
                            >
                         
                        </Product>)
                          


                       
                    }
                </div>
             
            </div>
        </div>

    </div>
     );
 };
 
 export default ManageProducts;