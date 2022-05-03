import React from "react";
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
    <div className="col-md-4 col-12">
      {/* <h1>{product.id}</h1>
            <h3>{product.name}</h3> */}
      <Card style={{ width: "18rem" }}>
        <Card.Img variant="top" src={img} />
        <Card.Body>
          <Card.Title>{name}</Card.Title>
          <Card.Title>{_id}</Card.Title>
          <Card.Text> {quantity }</Card.Text>
          <Card.Text>$ {price }</Card.Text>
          <Card.Text> {short_description }</Card.Text>
          <Card.Text> {supplier_name }</Card.Text>
        </Card.Body>

        <Card.Body>
          <Card.Link onClick={()=>navigateToServiceDetail(_id)} className="btn btn-primary">Stock Update</Card.Link>
       
        </Card.Body>
      </Card>
    </div>
  );
};

export default Product;
