import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <nav>
        <div className="brand-logo">Furniture.</div>
        <div className="menus">
          <Link to="/" className="menu">
            Home
          </Link>
          <Link to="/products" className="menu">
            Products
          </Link>
          <Link to="/cart" className="menu">
            My Cart
          </Link>
        </div>
      </nav>
    </>
  );
};
export default Navbar;
