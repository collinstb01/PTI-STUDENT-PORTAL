import * as React from "react";
import mainlogo from "../images/oyinLogo.png";
import homeFace5 from "../images/faces/face5.jpg";
import { BiChevronDown } from "react-icons/bi";
import { FaEnvelope } from "react-icons/fa";
import { BsBellFill } from "react-icons/bs";
import { FaBars } from "react-icons/fa";
import { BsSearch } from "react-icons/bs";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

const Navbar = ({ setShow }) => {
  const navigate = useNavigate();
  const handleClick = (e) => {
    setShow((e) => !e);
  };

  const LogOut = () => {
    localStorage.removeItem("user");
    navigate("/Login");
  };
  return (
    <nav className="navbar col-lg-12 col-12 p-0 fixed-top d-flex flex-row default-layout-navbar bg-white">
      <div className="text-center navbar-brand-wrapper d-flex align-items-center justify-content-center">
        <a className="navbar-brand" href="/">
          <img src={mainlogo} alt="" width="50px" className="oyin" />
        </a>
      </div>
      <div className="navbar-menu-wrapper d-flex align-items-stretch">
        <button
          className="navbar-toggler navbar-toggler align-self-center"
          type="button"
          data-toggle="minimize"
          onClick={handleClick}
        >
          <span>
            <FaBars />
          </span>
        </button>
        <ul className="navbar-nav">
          <li className="nav-item nav-search d-none d-md-flex">
            <div className="nav-link">
              <div className="input-group">
                <div className="input-group-prepend">
                  <span className="input-group-text">
                    <i className="got">
                      <BsSearch />
                    </i>
                  </span>
                </div>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Search"
                  aria-label="Search"
                />
              </div>
            </div>
          </li>
        </ul>
        <ul className="navbar-nav navbar-nav-right">
          <li>
            <Button variant="outlined" onClick={LogOut}>
              Log Out
            </Button>
          </li>
          <li className="nav-item dropdown">
            <a
              className="nav-link count-indicator dropdown-toggle"
              id="notificationDropdown"
              href="#"
              data-toggle="dropdown"
            >
              <i className="mx-0">
                <BsBellFill />
              </i>
              <span className="count">16</span>
            </a>
            <div
              className="dropdown-menu dropdown-menu-right navbar-dropdown preview-list"
              aria-labelledby="notificationDropdown"
            >
              <a className="dropdown-item">
                <p className="mb-0 font-weight-normal float-left">
                  You have 16 new notifications
                </p>
                <span className="badge badge-pill badge-warning float-right">
                  View all
                </span>
              </a>
              <div className="dropdown-divider"></div>
              <a className="dropdown-item preview-item">
                <div className="preview-thumbnail">
                  <div className="preview-icon bg-danger">
                    <i className="fa fa-exclamation-circle mx-0"></i>
                  </div>
                </div>
                <div className="preview-item-content">
                  <h6 className="preview-subject font-weight-medium">
                    Application Error
                  </h6>
                  <p className="font-weight-light small-text">Just now</p>
                </div>
              </a>
              <div className="dropdown-divider"></div>
              <a className="dropdown-item preview-item">
                <div className="preview-thumbnail">
                  <div className="preview-icon bg-warning">
                    <i className="fa fa-wrench mx-0"></i>
                  </div>
                </div>
                <div className="preview-item-content">
                  <h6 className="preview-subject font-weight-medium">
                    Settings
                  </h6>
                  <p className="font-weight-light small-text">
                    Private message
                  </p>
                </div>
              </a>
              <div className="dropdown-divider"></div>
              <a className="dropdown-item preview-item">
                <div className="preview-thumbnail">
                  <div className="preview-icon bg-info">
                    <i className="mx-0">
                      <FaEnvelope />
                    </i>
                  </div>
                </div>
                <div className="preview-item-content">
                  <h6 className="preview-subject font-weight-medium">
                    New user registration
                  </h6>
                  <p className="font-weight-light small-text">2 days ago</p>
                </div>
              </a>
            </div>
          </li>
          <li className="nav-item nav-profile dropdown">
            <a
              className="nav-link"
              href="#"
              data-toggle="dropdown"
              id="profileDropdown"
            >
              <img src={homeFace5} alt="profile" />
              <BiChevronDown />
            </a>
            <div
              className="dropdown-menu dropdown-menu-right navbar-dropdown"
              aria-labelledby="profileDropdown"
            >
              <a className="dropdown-item">
                <i className="fa fa-cog text-primary"></i>
                Settings
              </a>
              <div className="dropdown-divider"></div>
              <a href="samples/login.html" className="dropdown-item">
                <i className="fa fa-power-off text-primary"></i>
                Logout
              </a>
            </div>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
