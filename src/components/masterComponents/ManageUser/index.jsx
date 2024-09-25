import React, { useState } from "react";
import { Table, InputGroup, FormControl, Row, Col, Dropdown, DropdownButton } from "react-bootstrap";
import ReactPaginate from "react-paginate";
import Button from "@mui/material/Button";
import { FaPlus, FaBars, FaEdit, FaTrash, FaUserCog } from "react-icons/fa";
import { MdDevices } from "react-icons/md";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";

import styles from "./managUser.module.css";

const ManageUser = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [currentPage, setCurrentPage] = useState(0);
  const [itemsPerPage, setItemsPerPage] = useState(5);
  const [open, setOpen] = useState(false);

  const roles = [
    {
      id: 1,
      loginId: "USER0020",
      Name: "Rajat Seksaria",
      emailID: "rajat.seksaria@acme.in",
      mobileNo: 9999999999,
      roleName: "Ops Admin",
    },
    {
      id: 2,
      loginId: "USER0021",
      Name: "Amit Verma",
      emailID: "amit.verma@acme.in",
      mobileNo: 8888888888,
      roleName: "Site User",
    },
    {
      id: 3,
      loginId: "USER0022",
      Name: "Nisha Gupta",
      emailID: "nisha.gupta@acme.in",
      mobileNo: 7777777777,
      roleName: "Web User",
    },
    {
      id: 4,
      loginId: "USER0023",
      Name: "Suresh Kumar",
      emailID: "suresh.kumar@acme.in",
      mobileNo: 6666666666,
      roleName: "Zonal Head",
    },
    {
      id: 5,
      loginId: "USER0024",
      Name: "Rina Singh",
      emailID: "rina.singh@acme.in",
      mobileNo: 5555555555,
      roleName: "Manager",
    },
    {
      id: 6,
      loginId: "USER0025",
      Name: "Vikas Sharma",
      emailID: "vikas.sharma@acme.in",
      mobileNo: 4444444444,
      roleName: "Team Lead",
    },
    {
      id: 7,
      loginId: "USER0026",
      Name: "Pooja Deshmukh",
      emailID: "pooja.deshmukh@acme.in",
      mobileNo: 3333333333,
      roleName: "Developer",
    },
    {
      id: 8,
      loginId: "USER0027",
      Name: "Rajiv Nair",
      emailID: "rajiv.nair@acme.in",
      mobileNo: 2222222222,
      roleName: "Analyst",
    },
    {
      id: 9,
      loginId: "USER0028",
      Name: "Monika Arora",
      emailID: "monika.arora@acme.in",
      mobileNo: 1111111111,
      roleName: "Ops Admin",
    },
    {
      id: 10,
      loginId: "USER0029",
      Name: "Karan Patel",
      emailID: "karan.patel@acme.in",
      mobileNo: 9999991111,
      roleName: "Site User",
    },
    {
      id: 11,
      loginId: "USER0030",
      Name: "Simran Kaur",
      emailID: "simran.kaur@acme.in",
      mobileNo: 9999992222,
      roleName: "Web User",
    },
    {
      id: 12,
      loginId: "USER0031",
      Name: "Rahul Aggarwal",
      emailID: "rahul.aggarwal@acme.in",
      mobileNo: 9999993333,
      roleName: "Zonal Head",
    },
    {
      id: 13,
      loginId: "USER0032",
      Name: "Neha Saxena",
      emailID: "neha.saxena@acme.in",
      mobileNo: 9999994444,
      roleName: "Manager",
    },
    {
      id: 14,
      loginId: "USER0033",
      Name: "Aditya Desai",
      emailID: "aditya.desai@acme.in",
      mobileNo: 9999995555,
      roleName: "Team Lead",
    },
    {
      id: 15,
      loginId: "USER0034",
      Name: "Sonal Mehta",
      emailID: "sonal.mehta@acme.in",
      mobileNo: 9999996666,
      roleName: "Developer",
    },
  ];

  // State to hold form inputs
  const [newUserRole, setNewUserRole] = useState("");
  const [newUserName, setNewUserName] = useState("");
  const [newUserEmail, setNewUserEmail] = useState("");
  const [newUserMobile, setNewUserMobile] = useState("");
  const [newUserAddress, setNewUserAddress] = useState("");
  const [selectedDrone, setSelectedDrone] = useState("");

  // Predefined lists
  const userRoles = [
    "Ops Admin",
    "Site User",
    "Web User",
    "Manager",
    "Team Lead",
  ];
  const drones = ["Drone A", "Drone B", "Drone C"];

  const filteredRoles = roles.filter((role) =>
    role.roleName.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const pageCount = Math.ceil(filteredRoles.length / itemsPerPage);
  const handlePageClick = ({ selected }) => {
    setCurrentPage(selected);
  };

  const displayRoles = filteredRoles.slice(
    currentPage * itemsPerPage,
    currentPage * itemsPerPage + itemsPerPage
  );

  const handleClose = () => {
    setOpen(false);
    // Clear inputs when dialog closes
    setNewUserRole("");
    setNewUserName("");
    setNewUserEmail("");
    setNewUserMobile("");
    setNewUserAddress("");
    setSelectedDrone("");
  };

  const handleClickOpen = () => {
    setOpen(true);
  };

  const submitForm = (event) => {
    event.preventDefault();
    console.log("Submitting User Data:", {
      newUserRole,
      newUserName,
      newUserEmail,
      newUserMobile,
      newUserAddress,
      selectedDrone,
    });
    handleClose();
  };

  return (
    <div className={styles["user-role-table"]}>
      <div className="button" style={{
          textAlign: "end",
          marginBottom: "5px",
        }}
      >
        <Button
          onClick={handleClickOpen}
          variant="contained"
          aria-hidden="false"
          style={{
            backgroundColor: "#1d89cf",
          }}
        >
          <FaPlus style={{ marginRight: "5px" }} />
          Add User
        </Button>
      </div>
      <Row className={`${styles.tableHeader} align-items-center justify-content-between`} >
        <Col xs={12} md={6} className="d-flex align-items-center">
          <p className={styles["table-title"]}>
            <span className="mr-2">
              <FaBars style={{ marginRight: "10px" }} />
            </span>
            Manage Users
          </p>
        </Col>
        <Col xs={12} md={6} className="d-flex justify-content-end align-items-center" >
          <div className="d-flex align-items-center" style={{ height: "40px" }}>
            <span className="mr-2">Per page: &nbsp;</span>
            <DropdownButton title={itemsPerPage} onSelect={(value) => setItemsPerPage(Number(value))}
              variant="transparent" className={`${styles["custom-dropdown-button"]}`} >
              <Dropdown.Item eventKey="5">5</Dropdown.Item>
              <Dropdown.Item eventKey="10">10</Dropdown.Item>
              <Dropdown.Item eventKey="15">15</Dropdown.Item>
            </DropdownButton>
          </div>
          <InputGroup className={`${styles["search-bar"]}`}>
            <FormControl placeholder="Search..." onChange={(e) => setSearchTerm(e.target.value)} />
          </InputGroup>
        </Col>
      </Row>

      {/* Table */}
      <Table responsive className={styles.table}>
        <thead>
          <tr>
            <th>Sr. No</th>
            <th>Login ID</th>
            <th>Name</th>
            <th>Email ID</th>
            <th>Mobile No</th>
            <th>Role Name</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {displayRoles.length > 0 ? (
            displayRoles.map((role, index) => (
              <tr key={index}>
                <td>{index + 1 + currentPage * itemsPerPage}</td>
                <td>{role.loginId}</td>
                <td>{role.Name}</td>
                <td>{role.emailID}</td>
                <td>{role.mobileNo}</td>
                <td>{role.roleName}</td>
                <td>
                  <FaEdit className={styles["action-icon"]} /> |
                  <FaTrash className={styles["action-icon"]} /> |
                  <FaUserCog className={styles["action-icon"]} /> |
                  <MdDevices className={styles["action-icon"]} />
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="7" className="notFound"
                style={{
                  color: "orangered",
                  textAlign: "center",
                  fontWeight: "bold",
                }} >
                No Matching Data Found!
              </td>
            </tr>
          )}
        </tbody>
      </Table>

      {/* Pagination */}
      <ReactPaginate
        previousLabel={"< Prev"}
        nextLabel={"Next >"}
        breakLabel={"..."}
        pageCount={pageCount}
        marginPagesDisplayed={2}
        pageRangeDisplayed={2}
        onPageChange={handlePageClick}
        containerClassName={`pagination justify-content-end ${styles["paginationRow"]}`}
        pageClassName={"page-item"}
        pageLinkClassName={"page-link"}
        previousClassName={"page-item"}
        previousLinkClassName={`page-link ${styles["prev-next-button"]}`}
        nextClassName={"page-item"}
        nextLinkClassName={`page-link ${styles["prev-next-button"]}`}
        breakClassName={"page-item"}
        breakLinkClassName={"page-link"}
        activeClassName={"active"}
      />

      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Add User</DialogTitle>
        <DialogContent className={styles["dialog-content"]}>
          <DialogContentText>
            To add a user, please fill in the details below.
          </DialogContentText>

          <form onSubmit={submitForm}>
            {/* Name, Email */}
            <div className={styles["form-row"]}>
              <TextField required id="name" label="Name" variant="outlined" className={styles["form-control"]}
                value={newUserName} onChange={(e) => setNewUserName(e.target.value)} // Update state
                 />
              <TextField required id="email" label="Email" variant="outlined" className={styles["form-control"]}
                value={newUserEmail} onChange={(e) => setNewUserEmail(e.target.value)} // Update state
              />
            </div>

            {/* Mobile, Role Dropdown */}
            <div className={styles["form-row"]}>
              <TextField required id="mobile" label="Mobile" variant="outlined" className={styles["form-control"]}
                value={newUserMobile} onChange={(e) => setNewUserMobile(e.target.value)} // Update state
              />
              <TextField defaultValue variant="outlined" className={styles["form-control"]} value={newUserRole}
                onChange={(e) => setNewUserRole(e.target.value)} // Update state
                SelectProps={{
                  native: true,
                }} >
                <option value="" disabled selected>
                  Select User Role
                </option>
                {userRoles.map((userRole) => (
                  <option value={userRole} key={userRole}>
                    {userRole}
                  </option>
                ))}
              </TextField>
            </div>

            {/* Address, Drone Dropdown */}
            <div className={styles["form-row"]}>
              <TextField required id="address" label="Address" variant="outlined" className={styles["form-control"]}
                value={newUserAddress} onChange={(e) => setNewUserAddress(e.target.value)} // Update state
              />
              <TextField select variant="outlined" className={styles["form-control"]} value={selectedDrone}
                onChange={(e) => setSelectedDrone(e.target.value)} // Update state
                SelectProps={{
                  native: true,
                }} >
                {/* Default placeholder option */}
                <option value="" disabled selected>
                  Select a drone
                </option>
                {drones.map((drone, index) => (
                  <option key={index} value={drone}>
                    {drone}
                  </option>
                ))}
              </TextField>
            </div>

            {/* Submit Button */}
            <DialogActions>
              <Button onClick={handleClose}>Cancel</Button>
              <Button type="submit" variant="contained" color="primary">
                Submit
              </Button>
            </DialogActions>
          </form>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default ManageUser;
