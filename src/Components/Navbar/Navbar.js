import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {

  return (
    <div className="container">
      <div className="row">
        <nav className="navbar m-2 p-4">
          <div className="container-fluid">
            <h2 className="navbar-brand">Funrise</h2> 
            <div className="d-flex">
              <Link className="nav-link active" aria-current="page" to="/home">Home</Link>
              <Link className="nav-link active" aria-current="page" to="/orders">Orders</Link>
              <Link className="nav-link active" aria-current="page" to="/admin">Admin</Link>
              <Link className="nav-link active btn btn-primary" type="button" aria-current="page" to="/login">Log in</Link>
            </div>
          </div>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;