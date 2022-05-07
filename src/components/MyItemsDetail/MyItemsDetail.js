import React from "react";
import { Card } from "react-bootstrap";

const MyItemsDetail = ({ item }) => {
  console.log(item);
  const { name, img, quantity, price, description, supplier_name, sold, email } =
    item;
  return (
 
      <div className="col-lg-4 col-md-6 col-12 mx-auto shadow mb-4">
        <Card className="" >
          <Card.Img variant="top" src={img} />
          <Card.Body>
            <Card.Title>Name : {name}</Card.Title>
            <Card.Text>Quantity :  {quantity}</Card.Text>
            <Card.Text> Price : $ {price}</Card.Text>
            <Card.Text>Desc : {description}</Card.Text>
            <Card.Text>Supplier :  {supplier_name}</Card.Text>
            <Card.Text>Sold :  {sold}</Card.Text>
            <Card.Text>User-Mail :  {email}</Card.Text>
          </Card.Body>
        </Card>
      </div>
  
  );
};

export default MyItemsDetail;
