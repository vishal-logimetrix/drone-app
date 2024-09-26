import React, { useState } from "react";
import { Table, Row, Col} from "react-bootstrap";
import ReactPaginate from "react-paginate";
import Button from "@mui/material/Button";
import { FaBars, FaEdit, FaTrash } from "react-icons/fa";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import Alert from "@mui/material/Alert"; // Import Alert for displaying error messages

import styles from "./managesnapBlock.module.css";

const ManageSnapBlock = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [currentPage, setCurrentPage] = useState(0);
  const [itemsPerPage, setItemsPerPage] = useState(5);
  const [open, setOpen] = useState(false);
  const [newRole, setNewRole] = useState("");
  const [editMode, setEditMode] = useState(false);
  const [currentRoleId, setCurrentRoleId] = useState(null);
  const [error, setError] = useState(""); // State to manage error message
  const [selectedDrone, setSelectedDrone] = useState("");

  const roles = [
    { id: 1, areaName: "Demo 2" },
    { id: 2, areaName: "Demo Sub" },
    { id: 3, areaName: "Test Sub" },
    { id: 4, areaName: "Demo Sub Area" },
    { id: 5, areaName: "Test Sub Area" },
    { id: 6, areaName: "ICR 18" },
    { id: 7, areaName: "ICR 17" },
  ];
  
  const drones = ["Drone A", "Drone B", "Drone C"];

  const filteredRoles = roles.filter((role) =>
    role.areaName.toLowerCase().includes(searchTerm.toLowerCase())
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

  const handleClickOpen = (role = null) => {
    if (role) {
      setEditMode(true);
      setNewRole(role.areaName);
      setCurrentRoleId(role.id);
    } else {
      setEditMode(false);
      setNewRole("");
    }
    setOpen(true);
  };

  const submitForm = (event) => {
    event.preventDefault();

    if (newRole.trim() === "") {
      setError("Manage Snap name is required."); // Set error message if input is empty
      return; // Stop the form submission
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
        <TextField select variant="outlined" className={styles["form-control"]} value={selectedDrone} onChange={(e) => setSelectedDrone(e.target.value)} // Update state
         SelectProps={{
            native: true,
          }}
          sx={{
            height: '40px', 
          }}
          InputProps={{
            style: {
              height: '40px',  
            }
          }} 
          >
          {/* Default placeholder option */}
          <option value="" disabled defaultValue>
            Select a drone
          </option>
          {drones.map((drone) => (
            <option key={drone} value={drone}>
              {drone}
            </option>
          ))}
        </TextField>

         <TextField type="date" required id="date" variant="outlined" className= {styles['form-control']} 
         sx={{
          height: '40px', 
        }}
        InputProps={{
          style: {
            height: '40px',  
          }
        }} 
        ></TextField>

        <Button variant="contained" className= {styles['form-control']} style={{ textAlign: 'center', }}>Search</Button>


        {/* <Button 
        onClick={() => handleClickOpen(null)} 
        variant="contained"
        aria-hidden="false"
        style={{
          backgroundColor: '#1d89cf'
        }}>
          <FaPlus style={{ marginRight: '5px' }} />
          Add Sub Area
        </Button> */}
      </div>
      <Row className={`${styles.tableHeader} align-items-center justify-content-between`} >
        <Col xs={12} md={6} className="d-flex align-items-center">
          <p className={styles["table-title"]}>
            <span className="mr-2">
              <FaBars style={{ marginRight: "10px", fontWeight: 900 }} />
            </span>
            Snap Block Update
          </p>
        </Col>
        {/* <Col xs={12} md={6} className="d-flex justify-content-end align-items-center">
          <div className="d-flex align-items-center" style={{height: '40px'}}>
            <span className="mr-2">Per page: &nbsp;</span>
            <DropdownButton
                title={itemsPerPage}
                onSelect={(value) => setItemsPerPage(Number(value))}
                variant="transparent"  
                className={`${styles['custom-dropdown-button']}`}
            >
                <Dropdown.Item eventKey="5">5</Dropdown.Item>
                <Dropdown.Item eventKey="10">10</Dropdown.Item>
                <Dropdown.Item eventKey="15">15</Dropdown.Item>
            </DropdownButton>
          </div>
          <InputGroup className={`${styles['search-bar']}`}>
            <FormControl
              placeholder="Search By Area..."
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </InputGroup>
        </Col> */}
      </Row>

      {/* Table */}
      <Table responsive className={styles.table}>
        <thead>
          <tr>
            <th>sr.No</th>
            <th>ID</th>
            <th>manage Snap Block</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {displayRoles.length > 0 ? (
            displayRoles.map((role, index) => (
              <tr key={role.id}>
                <td>{index + 1 + currentPage * itemsPerPage}</td>
                <td>{role.id}</td>
                <td>{role.areaName}</td>
                <td>
                  <FaEdit className={styles["action-icon"]} title="Edit"
                    onClick={() => handleClickOpen(role)} />
                    {" "} |
                  <FaTrash className={styles["action-icon"]} title="Delete" />
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="3" className="notFound"
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

export default ManageSnapBlock;
