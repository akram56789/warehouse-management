import { useEffect, useState } from "react";

const useProductDetail = productId =>{
    const [product, setProduct] = useState({});

    useEffect( () =>{
        const url = `https://sleepy-earth-76800.herokuapp.com/product/${productId}`
        fetch(url)
        .then(res => res.json())
        .then(data => setProduct(data))

    },[productId]);
    return [product]
}

export default useProductDetail;