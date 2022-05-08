import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const Product = ({ product }) => {


  const { _id, name, img, description, price, supplier, quantity } = product;
  const navigate = useNavigate();
  const navigateToProductDetail = id => {
    navigate(`/product/${_id}`)
    
  }

    return (
      <>

 
  <div  className="inventory">
    <div className="cart">
      <div  className="image">
        <img href = "#" src = {img} />
      </div>
      <div className="content">
        <h4>{name}</h4>
        <p>Price: {price}</p>
        <p>Supplier: {supplier}</p>
        <p>Quantity: {quantity}</p>
        <p>Description: {description}</p>
        <Button className="btn btn-dark w-100 rounded-2 " onClick={() =>navigateToProductDetail(_id)}  >Update</Button>

      </div>
    </div>    
    
  </div>
 
 
      
      </>

    );
  };

  export default Product;