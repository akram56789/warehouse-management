import React from 'react';
import { Button, Card } from 'react-bootstrap';
import { Link, useParams } from 'react-router-dom';
import useProductDetail from '../../Hooks/UseProductDetail';
import './ProductDetail.css';

const ProductDetail = () => {
    const { productId } = useParams();
    const [product] = useProductDetail(productId)

    // const [product, setProduct] = useState({})

    // useEffect(() => {
    //     const url = `http://localhost:5000/product/${productId}`;
    //     fetch(url)
    //         .then(res => res.json())
    //         .then(data => setProduct(data))

    // }, [])


    return (
       <>
             <Card className='mx-auto mt-5' style={{ width: '18rem' }}>
        <Card.Img variant="top" src={product.img} />
        <Card.Body>
          <Card.Title>{product.name}</Card.Title>
          <Card.Text>
          price: {product.price}
          </Card.Text>
          <Card.Text>
         supplier: {product.supplier }
          </Card.Text>
          <Card.Text>
        quantity:  {product.quantity }
          </Card.Text>
          <Button variant="primary">delivered</Button>
        </Card.Body>
        <Link to={`/manage`}>
        <Button className='btn btn-primary'>Manage Inventories</Button>
        </Link>
      </Card>
            
          
      
 </>
      
    );
};

export default ProductDetail;