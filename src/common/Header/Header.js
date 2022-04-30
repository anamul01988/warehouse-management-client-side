import React from 'react';
import { Link } from "react-router-dom";
import './Header.css';
const Header = () => {
    return (
        <div className='container'>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
  <div className="container-fluid">
    <Link className="nav-link link" to="/">E-house</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarScroll" aria-controls="navbarScroll" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarScroll">
      <ul className="navbar-nav ms-auto my-2 my-lg-0 navbar-nav-scroll">
        <li className="nav-item">
          <Link className="nav-link link" aria-current="page" to="home">Home</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link link" to="manage_inventory">Manage Inventory</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link link" to="login">Login</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link link" to="manage_items">Manage Items</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link link" to="add_items">Add Items</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link link" to="my_items">My Items</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link link" to="blog">Blog</Link>
        </li>
      </ul>
  
    </div>
  </div>
</nav>
        </div>
    );
};

export default Header;