import React from "react";
import { Table } from "react-bootstrap";
import { Link } from "react-router-dom";
import Product from "../../components/Product/Product";
import useProducts from "../../Hooks/useProducts";

const ManageInventory = () => {
  const [products] = useProducts();
  console.log(products);
  return (
    <div className="container">
      <h2>ManageInventory...</h2>
      <div class="table-responsive">
  <table class="table align-middle">
    <thead>
    <tr>
            <th className="text-center">Name</th>
            <th className="text-center">Quantity</th>
            <th className="text-center">Image</th>
            <th className="text-center">Price</th>
            <th className="text-center">Supplier Name</th>
            <th className="text-center">Description</th>
            <th className="text-center">Action</th>
         
          </tr>
    </thead>
    <tbody>
    {
               products.map(product => {
                   return (
                    // <tr className="align-bottom">
                    <tr >
                    <td>{product.name}</td>
                    <td>{product.quantity}</td>
                    <td>{product.quantity}</td>
                    <td><img className="" src={product.img} alt="img" /></td>
                    <td>{product.supplier_name}</td>
                    <td>{product.short_description}</td>
                    <td>
                        <div className="d-flex">
                        <Link className="me-3 text-decoration-none text-light p-2 bg-dark" to="">Edit</Link>
                         <Link className="text-decoration-none text-light p-2 bg-dark" to="">Delete</Link>
                        </div>
                    </td>
                
                  </tr>
                   )
               })
           }
      {/* <tr class="align-bottom">
        ...
      </tr> */}
      {/* <tr>
        <td>...</td>
        <td>...</td>
        <td class="align-top">This cell is aligned to the top.</td>
        <td>...</td>
      </tr> */}
    </tbody>
  </table>
</div>


      {/* <Table responsive="sm md">
        <thead>
          <tr>
            <th className="text-center">Name</th>
            <th className="text-center">Quantity</th>
            <th className="text-center">Image</th>
            <th className="text-center">Price</th>
            <th className="text-center">Supplier Name</th>
            <th className="text-center">Description</th>
            <th className="text-center">Action</th>
         
          </tr>
        </thead>
        <tbody>
           {
               products.map(product => {
                   return (
                    <tr>
                    <td>{product.name}</td>
                    <td>{product.quantity}</td>
                    <td>{product.quantity}</td>
                    <td><img className="" src={product.img} alt="img" /></td>
                    <td>{product.supplier_name}</td>
                    <td>{product.short_description}</td>
                    <td>
                        <div className="d-flex">
                        <Link className="me-3 text-decoration-none text-light p-2 bg-dark" to="">Edit</Link>
                         <Link className="text-decoration-none text-light p-2 bg-dark" to="">Delete</Link>
                        </div>
                    </td>
                
                  </tr>
                   )
               })
           }
         
        </tbody>
      </Table> */}
    </div>
  );
};

export default ManageInventory;
