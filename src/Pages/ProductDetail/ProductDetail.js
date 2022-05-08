import React, { useEffect, useState } from 'react';
import { Button, Card } from 'react-bootstrap';
import { Link, useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
 
 const ProductDetail = () => {
  const { productId } = useParams();
  const [product, setProduct] = useState({}); 
  
  let  {img, name, price,  description, supplier, quantity } = product;
  useEffect(() =>{
    const url = `https://sleepy-earth-76800.herokuapp.com/product/${productId}`
    console.log(url);
    fetch(url)
    .then(res => res.json())
    .then(data => setProduct(data))
  },[productId])

  
const delivered= () => {
let Remaining=parseFloat(+quantity)-1
let newInventory={img,name,price, supplier,quantity:Remaining,description, }
setProduct(newInventory)
fetch(`https://sleepy-earth-76800.herokuapp.com/product/${productId}`,{
  method: 'PUT',
  body: JSON.stringify(newInventory),
  headers:{
    'Content-Type': 'application/json',
  },
})
 
.then((response) =>response.json())
.then(data=>{
   
  toast("Delivered succeeded!!!!")
})
}
const restock= (e) => {
  e.preventDefault();
let updatedQuantity=parseFloat(+quantity)+1
let newInventory={img,name,price, supplier, quantity:updatedQuantity,description}
setProduct(newInventory)
fetch(`https://sleepy-earth-76800.herokuapp.com/product/${productId}`,{
  method: 'PUT',
  body: JSON.stringify(newInventory),
  headers:{
    'Content-Type': 'application/json',
  },
})
.then((response) =>response.json())
.then(data=>{
 console.log(data);
 
  toast("Restock succeeded!!!!")
})
}
 
 

  return (
     <>
           <Card className='mx-auto mt-5' style={{ width: '18rem' }}>
      <Card.Img variant="top" src={product.img} />
      <Card.Body>
        <Card.Title>{product.name}</Card.Title>
        <Card.Text>
      <p>  price: {product.price}</p>
        </Card.Text>
        <Card.Text>
       supplier: {product.supplier }
        </Card.Text>
        <Card.Text>
    <p>  quantity:  {product.quantity }</p>
        </Card.Text>
        <Card.Text>
    <p>  description:  {product.description }</p>
        </Card.Text>
        <Button onClick={delivered}   className='btn btn-primary m-2'>delivered</Button>
        <Button onClick={restock}  className='btn btn-primary m-4' >restock </Button>
      </Card.Body>
      <Link to={`/manage`}>
      <Button className='btn btn-primary w-100'>Manage Inventories</Button>
      </Link>
    </Card>
          
        
    
</>
  
 
  );   
 };
 
 export default ProductDetail;













 

