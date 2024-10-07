import React, { useState } from "react";
import { Table, Row, Col, Dropdown, DropdownButton  } from "react-bootstrap";
import { Dialog, DialogActions, DialogContent, DialogTitle, Button, TextField, Alert, Grid } from '@mui/material';
import ReactPaginate from "react-paginate";
import { FaBars } from "react-icons/fa";
import styles from "./dailyProject.module.css";

const DailyProject = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [currentPage, setCurrentPage] = useState(0);
  const [itemsPerPage, setItemsPerPage] = useState(5);
  const [open, setOpen] = useState(false);

  const [error, setError] = useState(""); // State to manage error message
  const [selectedArea, setSelectedArea] = useState("");
  const [selectedSubArea, setSelectedSubArea] = useState("");
  const [selectedProject, setSelectedProject] = useState("");
  const [selectedActivity, setSelectedActivity] = useState("");


  const [projectName, setProjectName] = useState(""); 
  const [activityName, setActivityName] = useState(""); 
  const [area, setArea] = useState(""); 
  const [lattitude, setLattitude] = useState(""); 
  const [longitude, setLongitude] = useState(""); 
  const [address, setSetAddress] = useState(""); 
  const [image, setSetImage] = useState(null);

  const ProjectSites = [
    {
      id: 1,
      rowId: 8600,
      siteImg: "https://www.shutterstock.com/shutterstock/photos/2504072849/display_1500/stock-photo-aerial-view-of-solar-farm-sustainable-renewable-energy-and-modern-photovoltaic-technology-for-eco-2504072849.jpg",
      siteLong: 123123,
      siteLat: 345343242,
      projectID: 78,
      Activity: "Engineering",
      Area: "Block 7",
      Type: "APM",
      CapturedDateTime: "2024-09-01 08:00",
      updatedDateTime: "2024-09-02 10:00",
    },
    {
      id: 2,
      rowId: 8601,
      siteImg: "https://www.shutterstock.com/shutterstock/photos/2386351327/display_1500/stock-photo-aerial-view-of-big-sustainable-electric-power-plant-with-many-rows-of-solar-photovoltaic-panels-for-2386351327.jpg",
      siteLong: 453432,
      siteLat: 654654321,
      projectID: 79,
      Activity: "Construction",
      Area: "Block 5",
      Type: "APM",
      CapturedDateTime: "2024-09-01 09:00",
      updatedDateTime: "2024-09-02 11:00",
    },
    {
      id: 3,
      rowId: 8602,
      siteImg: "https://www.shutterstock.com/shutterstock/photos/2336231487/display_1500/stock-photo-solar-power-station-captured-with-a-dji-drone-harnessing-renewable-energy-from-the-sun-2336231487.jpg",
      siteLong: 987654,
      siteLat: 234567890,
      projectID: 80,
      Activity: "Surveying",
      Area: "Block 9",
      Type: "CPM",
      CapturedDateTime: "2024-09-01 10:00",
      updatedDateTime: "2024-09-02 12:00",
    },
    {
      id: 4,
      rowId: 8603,
      siteImg: "https://i0.wp.com/thedronelifenj.com/wp-content/uploads/2023/08/DJI_20230808193809_0007_Z-scaled.jpg?resize=2048%2C1152&ssl=1",
      siteLong: 246802,
      siteLat: 135790246,
      projectID: 81,
      Activity: "Maintenance",
      Area: "Block 2",
      Type: "APM",
      CapturedDateTime: "2024-09-01 11:00",
      updatedDateTime: "2024-09-02 13:00",
    },
    {
      id: 5,
      rowId: 8604,
      siteImg: "https://thumbs.dreamstime.com/z/aerial-shot-group-photovoltaic-solar-panels-countryside-renewable-energy-aerial-shot-drones-fly-over-photovoltaic-279091133.jpg?ct=jpeg",
      siteLong: 654321,
      siteLat: 123456789,
      projectID: 82,
      Activity: "Inspection",
      Area: "Block 4",
      Type: "CPM",
      CapturedDateTime: "2024-09-01 12:00",
      updatedDateTime: "2024-09-02 14:00",
    },
    {
      id: 6,
      rowId: 8605,
      siteImg: "https://thumbs.dreamstime.com/z/aerial-shot-group-photovoltaic-solar-panels-countryside-renewable-energy-drones-fly-over-power-station-pf-looking-sun-279832449.jpg?ct=jpeg",
      siteLong: 112233,
      siteLat: 998877665,
      projectID: 83,
      Activity: "Logistics",
      Area: "Block 1",
      Type: "CPM",
      CapturedDateTime: "2024-09-01 13:00",
      updatedDateTime: "2024-09-02 15:00",
    },
    {
      id: 7,
      rowId: 8606,
      siteImg: "",
      siteLong: 789012,
      siteLat: 456123789,
      projectID: 84,
      Activity: "Design",
      Area: "Block 8",
      Type: "APM",
      CapturedDateTime: "2024-09-01 14:00",
      updatedDateTime: "2024-09-02 16:00",
    },
    {
      id: 8,
      rowId: 8607,
      siteImg: "",
      siteLong: 456789,
      siteLat: 987654321,
      projectID: 85,
      Activity: "Demolition",
      Area: "Block 6",
      Type: "CPM",
      CapturedDateTime: "2024-09-01 15:00",
      updatedDateTime: "2024-09-02 17:00",
    },
    {
      id: 9,
      rowId: 8608,
      siteImg: "",
      siteLong: 321654,
      siteLat: 123789654,
      projectID: 86,
      Activity: "Surveying",
      Area: "Block 3",
      Type: "APM",
      CapturedDateTime: "2024-09-01 16:00",
      updatedDateTime: "2024-09-02 18:00",
    },
    {
      id: 10,
      rowId: 8609,
      siteImg: "",
      siteLong: 147258,
      siteLat: 369258147,
      projectID: 87,
      Activity: "Engineering",
      Area: "Block 10",
      Type: "CPM",
      CapturedDateTime: "2024-09-01 17:00",
      updatedDateTime: "2024-09-02 19:00",
    },
  ];

  const projects = [
    { projectId: 1, projectName: "KREDL-Guledgudda" },
    { projectId: 2, projectName: "KREDL-Sandur" },
    { projectId: 3, projectName: "KREDL-sidhlaghatta" },
    { projectId: 4, projectName: "KREDL-Chithorgrah" },
    { projectId: 5, projectName: "TEST IT" },
  ];

  const activities = [
    { activityId: 1, activeityName: "Engineering" },
    { activityId: 2, activeityName: "Land Acquition" },
    { activityId: 3, activeityName: "Statutory Aprprovals" },
  ];

  const areas = [
    { areaId: 1, areaName: "Bay 1" },
    { areaId: 2, areaName: "Bay 2" },
    { areaId: 3, areaName: "Block 1" },
    { areaId: 4, areaName: "Block 2" },
  ];

  const subAreas = [
    { subAreaId: 1, subAreaName: "Demo 1" },
    { subAreaId: 2, subAreaName: "Demo 2" },
    { subAreaId: 3, subAreaName: "Demo 3" },
    { subAreaId: 4, subAreaName: "Demo 4" },
  ];

  const filteredRoles = ProjectSites.filter((role) =>
    role.Area.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const pageCount = Math.ceil(filteredRoles.length / itemsPerPage);

  const handlePageClick = ({ selected }) => {
    setCurrentPage(selected);
  };

  const displayRoles = filteredRoles.slice(
    currentPage * itemsPerPage,
    currentPage * itemsPerPage + itemsPerPage
  );

  const handleClickOpen = (site = null) => {
    console.log(site)
    setProjectName(site.projectID);
    setActivityName(site.Activity);
    setArea(site.Area);
    setLattitude(site.siteLat);
    setLongitude(site.siteLong);
    setSetAddress(site.address);
    setSetImage(site.siteImg);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setProjectName('');
    setActivityName('');
    setArea('');
    setLattitude('');
    setLongitude('');
    setSetAddress('');
    setSetImage('');
    setError("");  
  };

  const handleSubmit = () => {
    const searchData = {
      selectedProject,
      selectedActivity,
      selectedArea,
      selectedSubArea,
    };

    console.log(searchData);
  };

  return (
    <div className={styles["user-role-table"]}>
      <div className={styles["button"]}
        style={{
          textAlign: "flex-start",
          marginBottom: "5px",
          display: "flex",
          gap: "10px",
        }} >
        <form style={{display: 'flex'}}>

          <TextField select variant="outlined" className={styles["form-control"]} value={selectedProject}
            onChange={(e) => setSelectedProject(e.target.value)}
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
            {/* Default placeholder option */}
            <option value="" disabled defaultValue>
              Select a project
            </option>
            {projects.map((project) => (
              <option key={project.projectId} value={project.projectName}>
                {project.projectName}
              </option>
            ))}
          </TextField>

          <TextField select variant="outlined" className={styles["form-control"]} value={selectedActivity}
            onChange={(e) => setSelectedActivity(e.target.value)}
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
            {/* Default placeholder option */}
            <option value="" disabled defaultValue>
              Select Activity
            </option>
            {activities.map((activity) => (
              <option key={activity.activityId} value={activity.activeityName}>
                {activity.activeityName}
              </option>
            ))}
          </TextField>

          <TextField select variant="outlined" className={styles["form-control"]} value={selectedArea}
            onChange={(e) => setSelectedArea(e.target.value)}
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
            {/* Default placeholder option */}
            <option value="" disabled defaultValue>
              Select Area
            </option>
            {areas.map((area) => (
              <option key={area.areaId} value={area.areaName}>
                {area.areaName}
              </option>
            ))}
          </TextField>

          <TextField select variant="outlined" className={styles["form-control"]} value={selectedSubArea}
            onChange={(e) => setSelectedSubArea(e.target.value)}
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
            {/* Default placeholder option */}
            <option value="" disabled defaultValue>
              Select SubArea
            </option>
            {subAreas.map((subArea) => (
              <option key={subArea.subAreaId} value={subArea.subAreaName}>
                {subArea.subAreaName}
              </option>
            ))}
          </TextField>

          <Button variant="contained" className={styles["form-control"]} style={{ textAlign: "center" }} onClick={handleSubmit} >
            Search
          </Button>

          <Button variant="contained" className={styles["form-control"]} style={{ textAlign: "center" }}  >
            Reset
          </Button>
        </form>
      </div>

      <Row className={`${styles.tableHeader} align-items-center justify-content-between`} >
        <Col xs={12} md={6} className="d-flex align-items-center" style={{height: '30px'}}>
          <p className={styles["table-title"]}>
            <span className="mr-2">
              <FaBars style={{ marginRight: "10px", fontWeight: 900 }} />
            </span>
            Daily Project Site
          </p>
        </Col>
        <Col xs={12} md={6} className="d-flex justify-content-end align-items-center" style={{height: '30px'}}>
          <div className="d-flex align-items-center" >
            <span className="mr-2" style={{ color: "white" }}>
              Per page: &nbsp;
            </span>
            <DropdownButton title={itemsPerPage} onSelect={(value) => setItemsPerPage(Number(value))}
              variant="transparent" className={`${styles["custom-dropdown-button"]}`} >
              <Dropdown.Item eventKey="5">5</Dropdown.Item>
              <Dropdown.Item eventKey="10">10</Dropdown.Item>
              <Dropdown.Item eventKey="15">15</Dropdown.Item>
            </DropdownButton>
          </div>
        </Col>
      </Row>

      {/* Table */}
      <Table responsive className={styles.table}>
        <thead>
          <tr>
            <th>sr.No</th>
            <th>Row id</th>
            <th>Site Image</th>
            <th>Site Latitude</th>
            <th>Site Longitude</th>
            <th>Project Id</th>
            <th>Activity</th>
            <th>Area</th>
            <th>Type</th>
            <th>Captured Date & Time</th>
            <th>Uploaded Date & Time</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {displayRoles.length > 0 ? (
            displayRoles.map((role, index) => (
              <tr key={role.id}>
                <td>{index + 1 + currentPage * itemsPerPage}</td>
                <td>{role.rowId}</td>
                <td>
                    <img src={role.siteImg} alt="SiteImage" style={{
                        width: '120px',
                        height: '70px'
                    }} />
                </td>
                <td>{role.siteLong}</td>
                <td>{role.siteLat}</td>
                <td>{role.projectID}</td>
                <td>{role.Activity}</td>
                <td>{role.Area}</td>
                <td>{role.Type}</td>
                <td>{role.CapturedDateTime}</td>
                <td>{role.updatedDateTime}</td>
                <td>
                  <FaBars className={styles["action-icon"]} title="View" onClick={() => handleClickOpen(role)} />
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="12" className="notFound"
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
        activeClassName={"active"} />

      {/* Dialog for Add/Edit User Role */}
      <Dialog open={open} onClose={handleClose} fullWidth maxWidth="md">
      <DialogTitle>
       Site Details
      </DialogTitle>
      <DialogContent>
        {/* Grid for Layout */}
        <Grid container spacing={2}>
          {/* Left side: Image Details */}
          <Grid item xs={6}>
            <img  src={ image }  alt="Site View" style={{ width: '100%', height: 'auto', borderRadius: '8px' }} />
          </Grid>
          <Grid item xs={6}>
            {error && <Alert severity="error">{error}</Alert>}{" "}
            {/* Display error message */}
            
            {/* Details section */}
            <div className="pl-5">
              <p><strong>Project: </strong>{ projectName }</p>
              <p><strong>Activity:</strong> { activityName }</p>
              <p><strong>Area:</strong> { area }</p>
              <p><strong>Latitude:</strong> { lattitude }</p>
              <p><strong>Longitude:</strong> { longitude }</p>
              <p><strong>Address:</strong> { address }</p>
            </div>
          </Grid>
        </Grid>
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose}>Close</Button>
      </DialogActions>
    </Dialog>
    </div>
  );
};

export default DailyProject;
