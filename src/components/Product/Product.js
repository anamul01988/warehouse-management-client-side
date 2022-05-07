import React from "react";
import './Product.css';
import { Card } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const Product = ({ product }) => {
  const {_id, img, name, quantity, price, short_description, supplier_name} = product;
const navigate = useNavigate();
  const navigateToServiceDetail = (id) =>{
       console.log(id)
       navigate(`/inventory/${id}`);
  }
  return (
    <div className=" col-lg-4 col-md-6 col-12">
      {/* <h1>{product.id}</h1>
            <h3>{product.name}</h3> */}
            {/* style={{ width: "18rem" }} */}
      <Card className="shadow mb-4 " >
        <Card.Img variant="top" src={img} />
        <Card.Body >
          <Card.Title>Name : {name}</Card.Title>
          <Card.Text>Quantity : {quantity }</Card.Text>
          <Card.Text> Prcie : $ {price }</Card.Text>
          <Card.Text> Desc :  {short_description }</Card.Text>
          <Card.Text>Supplier : {supplier_name }</Card.Text>
        </Card.Body>

        <Card.Body className="mb-3">
          <Card.Link onClick={()=>navigateToServiceDetail(_id)} className="prd-btn">Stock Update</Card.Link>
       
        </Card.Body>
      </Card>
    </div>
  );
};

export default Product;
