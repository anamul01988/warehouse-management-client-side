import { signOut } from "firebase/auth";
import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link } from "react-router-dom";
import auth from "../../firebase.init";
import "./Header.css";
const Header = () => {
  const [user] = useAuthState(auth);
  const handleSignOut = () => {
    signOut(auth);
  };
  return (
    <div className="container">
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <Link className="nav-link link" to="/">
            E-house
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarScroll"
            aria-controls="navbarScroll"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarScroll">
            <ul className="navbar-nav ms-auto my-2 my-lg-0 navbar-nav-scroll">
              <li className="nav-item">
                <Link className="nav-link link" aria-current="page" to="home">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link link" to="manage_inventory">
                  Manage Inventory
                </Link>
              </li>
              {/* <li className="nav-item">
                <Link className="nav-link link" to="login">
                  Login
                </Link>
              </li> */}
              {user ? (
                <>
                  <li className="nav-item">
                    <Link className="nav-link link" to="manageitem">
                      Manage Items
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link link" to="additem">
                      Add Items
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link link" to="myitems">
                      My Items
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link link" to="blog">
                       Blog
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link
                      onClick={handleSignOut}
                      className="nav-link link"
                      to="login"
                    >
                      Sign Out
                    </Link>
                  </li>
                </>
              ) : (
                <>
                  <li className="nav-item">
                    <Link className="nav-link link" to="login">
                      Login
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link link" to="/register">
                      Register
                    </Link>
                  </li>
                </>
              )}
              {/* <li className="nav-item">
                <Link className="nav-link link" to="/register">
                  Register
                </Link>
              </li> */}

              {/* <li className="nav-item">
                <Link className="nav-link link" to="manage_items">
                  Manage Items
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link link" to="add_items">
                  Add Items
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link link" to="my_items">
                  My Items
                </Link>
              </li> */}
              <li className="nav-item">
                <Link className="nav-link link" to="blog">
                  Blog
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Header;
