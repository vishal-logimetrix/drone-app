import React, { useState } from "react";
import { Table } from 'react-bootstrap';
import ReactPaginate from "react-paginate";
import Button from "@mui/material/Button";
import { FaMapMarkerAlt } from "react-icons/fa";
import TextField from "@mui/material/TextField";
import { useNavigate } from 'react-router-dom';

import styles from "./uploadkmz.module.css";

const UploadKMZ = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [currentPage, setCurrentPage] = useState(0);
  const [itemsPerPage, setItemsPerPage] = useState(5);
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

  const navigate = useNavigate();

  const pageCount = Math.ceil(filteredRoles.length / itemsPerPage);
  const handlePageClick = ({ selected }) => {
    setCurrentPage(selected);
  };

  const displayRoles = filteredRoles.slice(
    currentPage * itemsPerPage,
    currentPage * itemsPerPage + itemsPerPage
  );

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

  const handleLocationClick = (role) => {
    navigate(`/viewMap`);
    // navigate(`/viewMap/${role.id}`, { state: { role } });
  };


  return (
    <div className={styles["user-role-table"]}>
      <form onSubmit={handleSubmit}> {/* Form wrapper for submit */}
        <div className="button" style={{
            textAlign: "flex-start",
            marginBottom: "5px",
            display: "flex",
            gap: "10px",
          }} >

          <TextField select variant="outlined" className={styles["form-control"]} value={selectedDrone}
            onChange={(e) => setSelectedDrone(e.target.value)} 
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
            }} >

            <option value="" disabled defaultValue>
              Select a Project
            </option>
            {drones.map((drone) => (
              <option key={drone} value={drone}>
                {drone}
              </option>
            ))}
          </TextField>

          <TextField type="file" required id="file" variant="outlined" className={styles["form-control"]}
            onChange={(e) => setSelectedFile(e.target.files[0])} 
            sx={{
              height: "40px",
            }}
            InputProps={{
              style: {
                height: "40px",
              },
            }}
            inputProps={{
              accept: '.apk', 
            }} />

          <Button type="submit"  variant="contained"
            style={{
              textAlign: "center",
            }} >
            Upload
          </Button>
        </div>
      </form>
      
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
                <td> 
                  <FaMapMarkerAlt 
                  className={styles['action-icon']}
                  onClick={() => handleLocationClick(role)} /> 
                   </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="4" className="notFound" style={{
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
    </div>
  );
};

export default UploadKMZ;
