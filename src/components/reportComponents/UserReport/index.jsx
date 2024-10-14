import React, { useState } from "react";
import { Button, TextField } from "@mui/material";
import { Calendar, momentLocalizer } from 'react-big-calendar';
import moment from 'moment';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import styles from "./userReport.module.css";

const localizer = momentLocalizer(moment);

const UserReport = () => {
  const [selectedUsers, setSelectedUsers] = useState("");
  const [selectedProject, setSelectedProject] = useState("");
  const [events, setEvents] = useState([
    {
      title: 'login : 00: 22',
      start: new Date(2024, 9, 2, 10, 0), 
      end: new Date(2024, 9, 2, 12, 0),
      allDay: false,
    },
    {
      title: 'login 11: 18',
      start: new Date(2024, 9, 3, 10, 0), 
      end: new Date(2024, 9, 3, 12, 0),
      allDay: false,
    },
  ]);
  const [showCalendar, setShowCalendar] = useState(false); 

  // Function to add event
  const handleAddEvent = (newEvent) => {
    
    setEvents([...events, newEvent]);
    console.log(events)
  };

  const projects = [
    { projectId: 1, projectName: "KREDL-Guledgudda" },
    { projectId: 2, projectName: "KREDL-Sandur" },
    { projectId: 3, projectName: "KREDL-sidhlaghatta" },
    { projectId: 4, projectName: "KREDL-Chithorgrah" },
    { projectId: 5, projectName: "TEST IT" },
  ];

  const users = [
    { areaId: 1, areaName: "Mohit kumar" },
    { areaId: 2, areaName: "jay gupta" },
    { areaId: 3, areaName: "ravi pandey" },
    { areaId: 4, areaName: "satyendra dev" },
  ];

  const handleSubmit = () => {
    const searchData = {
      selectedProject,
      selectedUsers,
    };
    setShowCalendar(true); 
  };

  const isButtonDisabled = selectedProject === "" || selectedUsers === "";

  return (
    <div className={styles["user-role-table"]}>
      <div  className={styles["button"]} style={{
          textAlign: "flex-start",
          marginBottom: "5px",
          display: "flex",
          gap: "10px",
        }} >
        <form style={{display: 'flex'}} >
          
          <TextField select variant="outlined" className={styles["form-control"]} value={selectedProject} onChange={(e) => setSelectedProject(e.target.value)}
            SelectProps={{
              native: true,
            }}
            sx={{ height: "40px" }}
            InputProps={{ style: { height: "40px" }}}
          >
            <option value="" disabled defaultValue>
              Select a project
            </option>
            {projects.map((project) => (
              <option key={project.projectId} value={project.projectName}>
                {project.projectName}
              </option>
            ))}
          </TextField>

          <TextField select variant="outlined" className={styles["form-control"]} value={selectedUsers} onChange={(e) => setSelectedUsers(e.target.value)}
            SelectProps={{
              native: true,
            }}
            sx={{ height: "40px" }}
            InputProps={{ style: { height: "40px" }}}
          >
            <option value="" disabled defaultValue>
              Select User
            </option>
            {users.map((area) => (
              <option key={area.areaId} value={area.areaName}>
                {area.areaName}
              </option>
            ))}
          </TextField>

          <Button variant="contained" className={styles["form-control"]} style={{ textAlign: "center" }} onClick={handleSubmit} disabled={isButtonDisabled} >
            Search
          </Button>
        </form>
      </div>

      <hr />

      {showCalendar && ( // Conditionally show the calendar if both selections are made
        <div style={{ height: '60vh' }}>
          <Calendar
            localizer={localizer}
            events={events}
            startAccessor="start"
            endAccessor="end"
            selectable={true} 
            style={{ height: '100%' }}
          />
        </div>
      )}
    </div>
  );
};

export default UserReport;



// add above the calender 

      {/* <Row className={`${styles.tableHeader} align-items-center justify-content-between`}>
        <Col xs={12} md={6} className="d-flex align-items-center">
          <p className={styles["table-title"]}>
            <span className="mr-2">
              <FaBars style={{ marginRight: "10px", fontWeight: 900 }} />
            </span>
            View Project Site
          </p>
        </Col>
      </Row> */}