import React from 'react';
import { useParams } from 'react-router-dom';

const ProductDetail = () => {
    const {productId} = useParams();

 
    
   
    return (
        <div>
      
            <h1>Name: {productId}</h1>
            <button>Delivered</button>
            
        </div>
    );
};

export default ProductDetail;