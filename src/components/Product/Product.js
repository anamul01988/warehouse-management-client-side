import React from "react";
import { Card } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const Product = ({ product }) => {
const navigate = useNavigate();
  const navigateToServiceDetail = (id) =>{
       console.log(id)
       navigate(`/inventory/${id}`);
  }
  return (
    <div className="col-md-4 col-12">
      {/* <h1>{product.id}</h1>
            <h3>{product.name}</h3> */}
      <Card style={{ width: "18rem" }}>
        <Card.Img variant="top" src={product.img} />
        <Card.Body>
          <Card.Title>{product.name}</Card.Title>
          <Card.Text> {product.quantity }</Card.Text>
          <Card.Text>$ {product.price }</Card.Text>
          <Card.Text> {product.short_description }</Card.Text>
          <Card.Text> {product.supplier_name }</Card.Text>
        </Card.Body>

        <Card.Body>
          <Card.Link onClick={()=>navigateToServiceDetail(product.id)} className="btn btn-primary">Stock Update</Card.Link>
       
        </Card.Body>
      </Card>
    </div>
  );
};

export default Product;
