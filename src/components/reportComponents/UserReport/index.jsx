import React, { useState } from "react";
import { Row, Col } from "react-bootstrap";
import { Button, TextField } from "@mui/material";
import { FaBars } from "react-icons/fa";

import styles from "./userReport.module.css";

const UserReport = () => {
  const [selectedUsers, setSelectedUsers] = useState("");
  const [selectedProject, setSelectedProject] = useState("");

  const projects = [
    { projectId: 1, projectName: "KREDL-Guledgudda" },
    { projectId: 2, projectName: "KREDL-Sandur" },
    { projectId: 3, projectName: "KREDL-sidhlaghatta" },
    { projectId: 4, projectName: "KREDL-Chithorgrah" },
    { projectId: 5, projectName: "TEST IT" },
  ];

  const users = [
    { areaId: 1, areaName: "Bay 1" },
    { areaId: 2, areaName: "Bay 2" },
    { areaId: 3, areaName: "Block 1" },
    { areaId: 4, areaName: "Block 2" },
  ];

  const handleSubmit = () => {
    const searchData = {
      selectedProject,
      selectedUsers,
    };

    console.log(searchData);
  };

  // Check if both dropdowns are selected
  const isButtonDisabled = selectedProject === "" || selectedUsers === "";

  return (
    <div className={styles["user-role-table"]}>
      <div
        className="button"
        style={{
          textAlign: "flex-start",
          marginBottom: "5px",
          display: "flex",
          gap: "10px",
        }}
      >
        <form>
          <TextField
            select
            variant="outlined"
            className={styles["form-control"]}
            value={selectedProject}
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
            }}
          >
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

          <TextField
            select
            variant="outlined"
            className={styles["form-control"]}
            value={selectedUsers}
            onChange={(e) => setSelectedUsers(e.target.value)}
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
              Select User
            </option>
            {users.map((area) => (
              <option key={area.areaId} value={area.areaName}>
                {area.areaName}
              </option>
            ))}
          </TextField>

          {/* Button is disabled if both dropdowns are not selected */}
          <Button
            variant="contained"
            className={styles["form-control"]}
            style={{ textAlign: "center" }}
            onClick={handleSubmit}
            disabled={isButtonDisabled} >
            Search
          </Button>
        </form>
      </div>
      <Row className={`${styles.tableHeader} align-items-center justify-content-between`}>
        <Col xs={12} md={6} className="d-flex align-items-center">
          <p className={styles["table-title"]}>
            <span className="mr-2">
              <FaBars style={{ marginRight: "10px", fontWeight: 900 }} />
            </span>
            View Project Site
          </p>
        </Col>
      </Row>
    </div>
  );
};

export default UserReport;
