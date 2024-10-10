import React, { useState } from "react";
import { Table, InputGroup, FormControl, Row, Col, Dropdown, DropdownButton } from 'react-bootstrap';
import ReactPaginate from "react-paginate";
import Button from "@mui/material/Button";
import { FaBars } from "react-icons/fa";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import Alert from "@mui/material/Alert"; // Import Alert for displaying error messages

import styles from "./uploadAPK.module.css";

const UploadApk = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [currentPage, setCurrentPage] = useState(0);
  const [itemsPerPage, setItemsPerPage] = useState(5);
  const [open, setOpen] = useState(false);
  const [newRole, setNewRole] = useState("");
  const [editMode, setEditMode] = useState(false);
  const [currentRoleId, setCurrentRoleId] = useState(null);
  const [error, setError] = useState(""); // State to manage error message


  const roles = [
    { id: 1, apk: "1551531100drone.apk", version: 2},
    { id: 2, apk: "1562245183Drone 2.0.apk", version: 1.1 },
  ];
 

  const filteredRoles = roles.filter((role) =>
    role.apk.toLowerCase().includes(searchTerm.toLowerCase())
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
    setNewRole("");
    setEditMode(false);
    setCurrentRoleId(null);
    setError(""); // Reset error message on close
  };

  // const handleClickOpen = (role = null) => {
  //   if (role) {
  //     setEditMode(true);
  //     setNewRole(role.apk);
  //     setCurrentRoleId(role.id);
  //   } else {
  //     setEditMode(false);
  //     setNewRole("");
  //   }
  //   setOpen(true);
  // };

  const submitForm = (event) => {
    event.preventDefault();

    if (newRole.trim() === "") {
      setError("Manage Snap name is required.");  
      return;  
    }

    if (editMode) {
      console.log(
        `Updating manage snap ID: ${currentRoleId} to new name: ${newRole}`
      );
    } else {
      console.log("Adding new manage snap:", newRole);
    }

    handleClose();
  };

  return (
    <div className={styles["user-role-table"]}>
      <div className="button" style={{ textAlign: "flex-start", marginBottom: "5px", display: 'flex', gap: '10px'}} >
        <TextField  variant="outlined" className={styles["form-control"]} type="text" label='Enter Version'
        sx={{
          height: '40px', 
        }}
        InputProps={{
          style: {
            height: '40px',  
          }
        }} />

         <TextField type="file" required id="file" variant="outlined" className= {styles['form-control']}
        sx={{
          height: '40px', 
        }}
        InputProps={{
          style: {
            height: '40px',  
          }
        }}
         />

        <Button variant="contained" style={{
            textAlign: 'center',
        }}> Upload</Button>

      </div>
      <Row className={`${styles.tableHeader} align-items-center justify-content-between`} style={{height: '40px'}} >
        <Col xs={12} md={6} className="d-flex align-items-center" style={{height: '30px'}}>
          <p className={styles["table-title"]}>
            <span className="mr-2">
              <FaBars style={{ marginRight: "10px" }} />
            </span>
            Snap Block Update
          </p>
        </Col>
        <Col xs={12} md={6} className="d-flex justify-content-end align-items-center" style={{height: '40px'}}>
          <div className="d-flex align-items-center" style={{height: '30px'}}>
            <span className="mr-2" style={{color: '#fff'}}>Per page: &nbsp;</span>
            <DropdownButton title={itemsPerPage} onSelect={(value) => setItemsPerPage(Number(value))} variant="transparent"  
                className={`${styles['custom-dropdown-button']}`} >
                <Dropdown.Item eventKey="5">5</Dropdown.Item>
                <Dropdown.Item eventKey="10">10</Dropdown.Item>
                <Dropdown.Item eventKey="15">15</Dropdown.Item>
            </DropdownButton>
          </div>
          <InputGroup className={`${styles['search-bar']}`}>
            <FormControl placeholder="Search Project..." onChange={(e) => setSearchTerm(e.target.value)} style={{height: '30px'}} />
          </InputGroup>
        </Col>
      </Row>

      {/* Table */}
      <Table responsive className={styles.table}>
        <thead>
          <tr>
            <th>sr.No</th>
            <th>version</th>
            <th>APK</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {displayRoles.length > 0 ? (
            displayRoles.map((role, index) => (
              <tr key={role.id}>
                <td>{index + 1 + currentPage * itemsPerPage}</td>
                <td>{role.version}</td>
                <td>{role.apk}</td>
                <td> active </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="4" className="notFound"
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

      {/* Dialog for Add/Edit User Role */}
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>
          {editMode ? "Update Manage Snap Block" : "Add Snap Block"}
        </DialogTitle>
        <DialogContent>
          <DialogContentText>
            {editMode
              ? "Update the Snap Block below."
              : "To add a new snap Block, please enter the Snap Block name."}
          </DialogContentText>
          <TextField
            autoFocus
            required
            margin="dense"
            id="role"
            label={editMode ? "Update Snap Block" : "Add Snap Block"}
            type="text"
            fullWidth
            variant="standard"
            value={newRole}
            onChange={(e) => {
              setNewRole(e.target.value);
              setError(""); // Clear error message on input change
            }}
          />
          {error && <Alert severity="error">{error}</Alert>}{" "}
          {/* Display error message */}
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={submitForm}>{editMode ? "Update" : "Add"}</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default UploadApk;
