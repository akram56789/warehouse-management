import { Button, Card } from "react-bootstrap";

const Product = ({ product }) => {

    const { id, name, img, price, supplier,quantity  } = product;
  
   
   
    return (
<>
<Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src={img} />
  <Card.Body>
    <Card.Title>{name}</Card.Title>
    <p>
    Price: {price}
    </p>
    <p>
    Supplier: {supplier}
    </p>
    <p>
    Quantity: {quantity}
    </p>
   
    <Button variant="primary">Update</Button>
  </Card.Body>
</Card>
</>

    );
};

export default Product;