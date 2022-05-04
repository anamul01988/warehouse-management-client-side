import React from "react";
import { Card } from "react-bootstrap";
import { Link, useParams } from "react-router-dom";
import useProductDetail from "../../Hooks/useProductDetail";
import "./Inventory.css";
const Inventory = () => {
  const { inventoryId } = useParams();
  const [inventory] = useProductDetail(inventoryId);

  const reducedQuantity= (quantity) =>{
      console.log('added',quantity-1)
      let quantities = quantity -1;
      return quantities;
   
  }
  return (
    <div className="container">
      <div className="selected-product w-50 mx-auto my-5">
        {/* <h1>{product.id}</h1>
               <h3>{product.name}</h3> */}
        <Card style={{ width: "18rem" }}>
          <Card.Img variant="top" src={inventory.img} />
          <Card.Body>
            <Card.Title>{inventory.name}</Card.Title>
            <Card.Title>{inventory._id}</Card.Title>
            <Card.Text> {inventory.quantity}</Card.Text>
            <Card.Text>$ {inventory.price}</Card.Text>
            <Card.Text> {inventory.short_description}</Card.Text>
            <Card.Text> {inventory.supplier_name}</Card.Text>
          </Card.Body>

          <Card.Body>
            <Card.Link onClick={()=> reducedQuantity(inventory.quantity)} className="btn btn-primary">Delivered</Card.Link>
          </Card.Body>
        </Card>
      </div>
       <div className="text-center py-5">
       <Link to="/manage_inventory" className="btn btn-primary">Manage Inventory</Link>
       </div>
    </div>
  );
};

export default Inventory;
