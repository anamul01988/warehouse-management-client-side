
import React from "react";
import './ManageItems.css';
import { Card } from "react-bootstrap";

import useProducts from "../../Hooks/useProducts";

const ManageItems = () => {
  const [products, setProducts] = useProducts();
  console.log(products);
  const handleDelete = (id) => {
    const isAllow = window.confirm("Are you sure ?");
    if (isAllow) {
      const url = `https://damp-dusk-59308.herokuapp.com/inventory/${id}`;
      fetch(url, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          const remaining = products.filter((product) => product._id !== id);
          setProducts(remaining);
        });
    }
  };
  return (
    <div className="manage-items mt-5">
      <h2 className="text-secondary mb-3">Manage items</h2>
      {products.map((product) => (
        <div key="product._id">
          <div className="card mb-4 shadow">
            <div className="row g-0">
              <div className="col-md-4 shadow">
                <img
                  src={product.img}
                  className="img-fluid rounded-start"
                  alt="img"
                />
              </div>
              <div className="col-md-8">
                <div className="card-body text-center ">
                  <h5 className="card-title">{product.name}</h5>
                  <p className="card-text">{product.quantity}</p>
                  <p className="card-text">$ {product.price}</p>
                  <p className="card-text">{product.short_description}</p>
                  <p className="card-text">{product.supplier_name}</p>
                  <div className="manage-content ms-3 mt-3  mb-3">
          <button onClick={() => handleDelete(product._id)}>Delete</button>
          </div>
                </div>
              </div>
            </div>
            {/* <div className="manage-content ms-3 mt-3  mb-3">
          <button onClick={() => handleDelete(product._id)}>Delete</button>
          </div> */}
          </div>

       
        </div>
      ))}
    </div>
  );
};

export default ManageItems;

