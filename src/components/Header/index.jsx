import React, { useState } from "react";
import styles from "./header.module.css";
import { FaBars } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import { Menu, MenuItem, Button } from "@mui/material";

const Header = ({ toggleSidebar }) => {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <>
    <nav className="navbar navbar-expand-lg bg-body-tertiary" style={{
          minHeight: '55px'
    }}>
      <div className="container-fluid">
        <button className="btn btn-light me-2" onClick={toggleSidebar}>
          <FaBars />
        </button>
        <NavLink className="navbar-brand" to="/dashboard">
          <img
            src="logo_acme.png"
            className={styles.acme_logo}
            alt="ACME_LOGO"
          />
        </NavLink>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0"></ul>

          {/* Material UI User Dropdown */}
          <Button
            aria-controls={open ? "user-menu" : undefined}
            aria-haspopup="true"
            aria-expanded={open ? "true" : undefined}
            onClick={handleClick}
          >
            User
          </Button>
          <Menu
            id="user-menu"
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
            MenuListProps={{
              "aria-labelledby": "basic-button",
            }}
          >
            <MenuItem onClick={handleClose}>
              <NavLink to="/" style={{ textDecoration: "none", color: "inherit" }}>
                Logout
              </NavLink>
            </MenuItem>
          </Menu>
        </div>
      </div>
    </nav>
    </>
  );
};

export default Header;
