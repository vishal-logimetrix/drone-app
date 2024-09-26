import React, { useState } from "react";
import { Row, Col, Dropdown, DropdownButton  } from "react-bootstrap";
import {  Button, TextField} from '@mui/material';
import { FaBars } from "react-icons/fa";

import styles from "./dayWiseProject.module.css";

const DayWiseProject = () => {

  const [selectedArea, setSelectedArea] = useState("");
  const [selectedSubArea, setSelectedSubArea] = useState("");
  const [selectedProject, setSelectedProject] = useState("");
  const [selectedActivity, setSelectedActivity] = useState("");
  const [fromDate, setFromDate] = useState("");  
  const [toDate, setToDate] = useState("");
  const [itemsPerPage, setItemsPerPage] = useState(5);

  const projects = [
    { projectId: 1, projectName: "KREDL-Guledgudda" },
    { projectId: 2, projectName: "KREDL-Sandur" },
    { projectId: 3, projectName: "KREDL-sidhlaghatta" },
    { projectId: 4, projectName: "KREDL-Chithorgrah" },
    { projectId: 5, projectName: "TEST IT" },
  ];

  const areas = [
    { areaId: 1, areaName: "Bay 1" },
    { areaId: 2, areaName: "Bay 2" },
    { areaId: 3, areaName: "Block 1" },
    { areaId: 4, areaName: "Block 2" },
  ];

  const handleFromDateChange = (e) => {
    setFromDate(e.target.value);
  };

  const handleSubmit = () => {
    const searchData = {
      fromDate,
      toDate,
      selectedProject,
      selectedActivity,
      selectedArea,
      selectedSubArea,
    };

    console.log(searchData);
  };

  return (
    <div className={styles["user-role-table"]}>
      <div className="button"
        style={{
          textAlign: "flex-start",
          marginBottom: "5px",
          display: "flex",
          gap: "10px",
        }} >
        <form >
          <TextField label="select date" type="date" value={fromDate} onChange={handleFromDateChange} required id="date"
            variant="outlined" className={styles["form-control"]}
            sx={{
              height: "40px",
            }}
            InputLabelProps={{
              shrink: true,
            }}
            InputProps={{
              style: {
                height: "40px",
              },
            }} />


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

          <TextField select variant="outlined" className={styles["form-control"]}
            
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

            <option value="" disabled defaultValue> Select Days </option>
            <option value="3"> 3 </option>
            <option value="6"> 6 </option>
            <option value="8"> 9 </option>
           
          </TextField>

          <Button variant="contained" className={styles["form-control"]} style={{ textAlign: "center" }} onClick={handleSubmit} >
            Search
          </Button>
        </form>
      </div>
      <Row className={`${styles.tableHeader} align-items-center justify-content-between`} >
        <Col xs={12} md={6} className="d-flex align-items-center">
          <p className={styles["table-title"]}>
            <span className="mr-2">
              <FaBars style={{ marginRight: "10px", fontWeight: 900 }} />
            </span>
            View Project Site
          </p>
        </Col>
        {/* <Col xs={12} md={6} className="d-flex justify-content-end align-items-center" >
          <div className="d-flex align-items-center" style={{ height: "40px" }}>
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
        </Col> */}
      </Row>

    </div>
  );
};

export default DayWiseProject;
