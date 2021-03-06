import React from "react";
import './ManageInventory.css';
import { Link } from "react-router-dom";
import useProducts from "../../Hooks/useProducts";

const ManageInventory = () => {
  const [products] = useProducts();
  console.log(products);
  return (
    <div className="container">
     <div className="manageInventory-content  mt-5">
     <h3 className="text-secondary mb-3">Manage Inventory Items </h3>
      <div className="manageAdd text-center mb-5">
          <Link className="prd-btn mt-5" to="/additem">Add New Item</Link>
      </div>
     </div>

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
              <th className="text-center">Sold</th>
              <th className="text-center">Action</th>
            </tr>
          </thead>
          <tbody>
            {products.map((product) => {
              return (
                <tr className="align-top">
                  <td>{product.name}</td>
                  <td>{product.quantity}</td>
                  <td>
                    <img className="table-img" src={product.img} alt="img" />
                  </td>
                  <td>{product.price}</td>
                  <td>{product.supplier_name}</td>
                  <td>{product.short_description}</td>
                  <td>{product.sold}</td>
                  <td>
                    <div className="d-flex">
                      <Link
                        className="me-3 text-decoration-none text-light p-2 bg-dark"
                        to=""
                      >
                        Edit
                      </Link>
                      <Link
                        className="text-decoration-none text-light p-2 bg-dark"
                        to=""
                      >
                        Delete
                      </Link>
                    </div>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
      
      {/* <div className="manageAdd text-center mb-5">
          <Link className="btn btn-primary" to="/additem">Add New Item</Link>
      </div> */}

    </div>
  );
};

export default ManageInventory;
