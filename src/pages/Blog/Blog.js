import React from "react";
import { Button, Card } from "react-bootstrap";

const Blog = () => {
  return (
    <div className="container">
      <Card className="my-5 w-50 mx-auto shadow ">
        <Card.Header>Question 1 With Answer</Card.Header>
        <Card.Body>
          <Card.Title>Difference between Javascript and Node js?</Card.Title>
          <Card.Text>
            1.Javascript is a client side scripting language that is built on java and html. Whereas Node js is a server side scripting language  based on the Google Chrome V8 engine. <br />
            2. Javascript runs in any browser JavaScript Engine while Node is Node JS is an interpreter for a JavaScript programming language that holds many excesses. <br />
            3. All JavaScript does not important to the node community. on the other hand All node projects represent the javaScript community.
          </Card.Text>
        </Card.Body>
      </Card>
      <Card className="my-5 w-50 mx-auto shadow ">
        <Card.Header>Question 2 With Answer</Card.Header>
        <Card.Body>
          <Card.Title>Difference between SQL and NOSQL database?</Card.Title>
          <Card.Text>
            1.SQL is a relational database management system, Whereas NoSql is a distributed management system. <br />
            2. SQL is best suited for complex queries and multi-row transactions, while NoSql is best for hierarchical data storage and unstructured data like documents or JSON. <br />
            3. SQL databases are vertically scalable, On the other hand NoSQL databases are horizontally scalable.
            4. SQL database have predefined schema whereas NoSql has dynamic schema.
              
          </Card.Text>
        </Card.Body>
      </Card>

      <Card className="my-5 w-50 mx-auto shadow">
        <Card.Header>Question 3 With Answer</Card.Header>
        <Card.Body>
          <Card.Title>What is the purpose of JWT and How does it work?</Card.Title>
          <Card.Text>
          JWT that is called JSON Web Token, is an open standard mechanism used to share security information between two client and server. Mainly it is identify the owner of json data.
        <br />
        Working procedure : <br /> 1. A JWT is a string that is made up by three parts . Also, separated by dots (.). It is  serialized by using base64. In the most common serialization format, compact serialization, the JWT looks something like this: a.b.c.
         <br /> 2. After decoded, JWT will provide us two JSON strings:
          such as the header and the payload nad the signature. 
         <br /> 3. Header contains the type of token, Payload contains the claim that is displayed as a string. 
          it is usually containing no more than a dozen fields to keep the JWT compact. So that this information is typically used by the server to verify that the user has permission to perform the action they are requesting.
         <br /> 4.The signature ensures that the token hasn’t been altered. The party creates JWT signs the header and payload with a secret that is known to both the issuer and receiver,  When the token is used, the receiving party verifies that the header and payload match the signature. 
          </Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
};

export default Blog;
