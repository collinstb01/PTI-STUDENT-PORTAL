import React from "react";
import { FaStore } from "react-icons/fa";
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <nav className="sidebar sidebar-offcanvas" id="sidebar">
      <ul className="nav dash">
        <li className="nav-item">
          <Link className="nav-link" to="/">
            <i className="fa fa-home menu-icon"></i>
            <span className="menu-title">Home</span>
          </Link>
        </li>

        <li className="nav-item">
          <Link className="nav-link" to="/Staff">
            <i className="fa fa-user menu-icon"></i>
            <span className="menu-title">Receipt</span>
          </Link>
        </li>

        <li className="nav-item">
          <Link className="nav-link" to="/Users">
            <i className="fa fa-users menu-icon"></i>
            <span className="menu-title">Hotel</span>
          </Link>
        </li>

        {/* <li className="nav-item">
          <Link className="nav-link" to="/orders">
            <i className="fa fa-users menu-icon"></i>
            <span className="menu-title">Orders</span>
          </Link>
        </li> */}

        {/* <li className="nav-item">
            <Link className="nav-link" data-toggle="collapse" to="#error" aria-expanded="false" aria-controls="error">
              <i className="fa fa-exclamation-circle menu-icon"></i>
              <span className="menu-title">Error pages</span>
              <i className="menu-arrow"></i>
            </Link>
            <div className="collapse" id="error">
              <ul className="nav flex-column sub-menu">
                <li className="nav-item"> <Link className="nav-link" to="samples/error-404.html"> 404 </Link></li>
                <li className="nav-item"> <Link className="nav-link" to="samples/error-500.html"> 500 </Link></li>
              </ul>
            </div>
          </li>
          <li className="nav-item">
            <Link className="nav-link" data-toggle="collapse" to="#e-commerce" aria-expanded="false" aria-controls="e-commerce">
              <i className="fa fa-shopping-cart menu-icon"></i>
              <span className="menu-title">E-commerce</span>
              <i className="menu-arrow"></i>
            </Link>
            <div className="collapse" id="e-commerce">
              <ul className="nav flex-column sub-menu">
                <li className="nav-item"> <Link className="nav-link" to="samples/pricing-table.html"> Pricing Table </Link></li>
                <li className="nav-item"> <Link className="nav-link" to="samples/orders.html"> Orders </Link></li>
              </ul>
            </div>
          </li> */}

        <li className="nav-item">
          <Link className="nav-link" to="/Store">
            <i className="menu-icon">
              <FaStore />
            </i>
            <span className="menu-title">Store</span>
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Sidebar;
