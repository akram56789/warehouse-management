import React from 'react';
import { Button, Card } from 'react-bootstrap';
import useProducts from '../../Hooks/UseProducts';
import './Myproducts.css';

const MyProducts = () => {
    const [products, setProducts] = useProducts()
    

    const handleDelete = _id => {
        const proceed = window.confirm('Delete tha product !!')
        if (proceed) {
            const url = `https://sleepy-earth-76800.herokuapp.com/product/${_id}`
            fetch(url, {
                method: "DELETE"
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    const remaining = products.filter(product => product._id !== _id)
                    setProducts(remaining)
                })

        }
    }
    return (

        <div id='products' className='container'>
            <div className="row ">
                <h1 className='products-title mt-5'>  My Items </h1>
                <div className="products-container">
                    {
                        products.map(product =>
                            <div key={product._id}>
                                <Card style={{ width: '18rem' }}>
                                    <Card.Img height={'200px'} variant="top" src={product.img} />
                                    <Card.Body>
                                        <Card.Title>{product.name}</Card.Title>
                                        <p>
                                            Price: ${product.price}
                                        </p>
                                        <p>
                                            Supplier: {product.supplier}
                                        </p>
                                        <p>
                                            Quantity: {product.quantity}
                                        </p>
                                        <p>
                                            Descriptions: {product.description}
                                        </p>
                                        <Button onClick={() => handleDelete(product._id)} className="btn btn-danger"   >Delete</Button>
                                    </Card.Body>
                                </Card>
                            </div>

                        )
                    }
                </div>

            </div>
        </div>

    );
};

export default MyProducts;