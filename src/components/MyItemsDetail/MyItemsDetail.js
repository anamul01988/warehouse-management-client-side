import React from "react";
import { Card } from "react-bootstrap";

const MyItemsDetail = ({ item }) => {
  console.log(item);
  const { name, img, quantity, price, short_description, supplier_name, sold, email } =
    item;
  return (
 
      <div className="col-lg-4 col-md-6 col-12 mx-auto">
        <Card style={{ width: "18rem" }}>
          <Card.Img variant="top" src={img} />
          <Card.Body>
            <Card.Title>{name}</Card.Title>
            <Card.Text> {quantity}</Card.Text>
            <Card.Text>$ {price}</Card.Text>
            <Card.Text> {short_description}</Card.Text>
            <Card.Text> {supplier_name}</Card.Text>
            <Card.Text> {sold}</Card.Text>
            <Card.Text> {email}</Card.Text>
          </Card.Body>

          <Card.Body>
            {/* <Card.Link onClick={()=>navigateToServiceDetail(_id)} className="btn btn-primary">Stock Update</Card.Link> */}
          </Card.Body>
        </Card>
      </div>
  
  );
};

export default MyItemsDetail;
