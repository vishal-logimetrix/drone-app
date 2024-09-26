import React, { useState } from "react";
import { Table } from 'react-bootstrap';
import ReactPaginate from "react-paginate";
import Button from "@mui/material/Button";
import { FaMapMarkerAlt } from "react-icons/fa";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import Alert from "@mui/material/Alert"; // Import Alert for displaying error messages

import styles from "./uploadkmz.module.css";

const UploadKMZ = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [currentPage, setCurrentPage] = useState(0);
  const [itemsPerPage, setItemsPerPage] = useState(5);
  const [open, setOpen] = useState(false);
  const [newRole, setNewRole] = useState("");
  const [editMode, setEditMode] = useState(false);
  const [currentRoleId, setCurrentRoleId] = useState(null);
  const [error, setError] = useState(""); // State to manage error message
  const [selectedDrone, setSelectedDrone] = useState("");
  const [selectedFile, setSelectedFile] = useState(null);


  const roles = [
    { id: 1, project: "MSEDCL-Chittorgarh-250MW", uploadDate: '12/06/2019 12:44:52'},
    { id: 2, project: "MSEDCL-Chittorgarh-250MW", uploadDate: '30/05/2019 17:02:50' },
    { id: 3, project: "	KREDL-Guledgudda-15MW", uploadDate: '15/03/2019 16:18:02' },
  ];
  const drones = ["Drone A", "Drone B", "Drone C"];

  const filteredRoles = roles.filter((role) =>
    role.project.toLowerCase().includes(searchTerm.toLowerCase())
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

//   const handleClickOpen = (role = null) => {
//     if (role) {
//       setEditMode(true);
//       setNewRole(role.project);
//       setCurrentRoleId(role.id);
//     } else {
//       setEditMode(false);
//       setNewRole("");
//     }
//     setOpen(true);
//   };

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


  const handleSubmit = (e) => {
    e.preventDefault();

    if (!selectedDrone) {
      alert("Please select a project.");
      return;
    }

    if (!selectedFile) {
      alert("Please select a file.");
      return;
    }

    // Log the selected values (or handle them accordingly)
    console.log("Selected Project:", selectedDrone);
    console.log("Selected File:", selectedFile);
    // You can now send these values to a backend or use them as needed
  };



  return (
    <div className={styles["user-role-table"]}>
<form onSubmit={handleSubmit}> {/* Form wrapper for submit */}
        <div
          className="button"
          style={{
            textAlign: "flex-start",
            marginBottom: "5px",
            display: "flex",
            gap: "10px",
          }}
        >
          <TextField select variant="outlined" className={styles["form-control"]} value={selectedDrone}
            onChange={(e) => setSelectedDrone(e.target.value)} // Update state
            SelectProps={{
              native: true,
            }}
            sx={{
              height: "40px",
            }}
            InputProps={{
              style: {
                height: "40px",
              },
            }}
          >
            {/* Default placeholder option */}
            <option value="" disabled defaultValue>
              Select a Project
            </option>
            {drones.map((drone) => (
              <option key={drone} value={drone}>
                {drone}
              </option>
            ))}
          </TextField>

          <TextField
            type="file"
            required
            id="file"
            variant="outlined"
            className={styles["form-control"]}
            onChange={(e) => setSelectedFile(e.target.files[0])} // Handle file selection
            sx={{
              height: "40px",
            }}
            InputProps={{
              style: {
                height: "40px",
              },
            }}
            inputProps={{
              accept: '.apk', // Restrict to .apk files
            }}
          />

          <Button
            type="submit" // Submit button
            variant="contained"
            style={{
              textAlign: "center",
            }}
          >
            Upload
          </Button>
        </div>
      </form>
      {/* <Row
        className={`${styles.tableHeader} align-items-center justify-content-between`}
      >
        <Col xs={12} md={6} className="d-flex align-items-center">
          <p className={styles["table-title"]}>
            <span className="mr-2">
              <FaBars style={{ marginRight: "10px" }} />
            </span>
            Snap Block Update
          </p>
        </Col>
        <Col xs={12} md={6} className="d-flex justify-content-end align-items-center">
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
              placeholder="Search Project..."
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </InputGroup>
        </Col>
      </Row> */}

      {/* Table */}
      <Table responsive className={`${styles.table} mt-3`}>
        <thead>
          <tr>
            <th>sr.No</th>
            <th>uploadDate</th>
            <th>project</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {displayRoles.length > 0 ? (
            displayRoles.map((role, index) => (
              <tr key={role.id}>
                <td>{index + 1 + currentPage * itemsPerPage}</td>
                <td>{role.uploadDate}</td>
                <td>{role.project}</td>
                <td> <FaMapMarkerAlt className={styles['action-icon']} /> </td>
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

export default UploadKMZ;
