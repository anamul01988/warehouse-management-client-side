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
          </Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
};

export default Blog;
