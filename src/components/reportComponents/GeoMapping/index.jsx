import React, { useState } from "react";
import { Button, TextField } from '@mui/material';
import styles from "./geoMapping.module.css";

const GeoMapping = () => {
  const [selectedArea, setSelectedArea] = useState("");
  // const [selectedSubArea, setSelectedSubArea] = useState("");
  const [selectedProject, setSelectedProject] = useState("");
  const [selectedActivity, setSelectedActivity] = useState("");
  const [fromDate, setFromDate] = useState("");  
  const [toDate, setToDate] = useState("");

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
    { subAreaId: 1, subAreaName: "Pune", latitude: 18.5204, longitude: 73.8567 },
    { subAreaId: 2, subAreaName: "Lucknow", latitude: 26.8467, longitude: 80.9462 },
    { subAreaId: 3, subAreaName: "Mumbai", latitude: 19.0760, longitude: 72.8777 },
    { subAreaId: 4, subAreaName: "Delhi", latitude: 28.6139, longitude: 77.2090 },
  ];

  const [selectedSubArea, setSelectedSubArea] = useState(subAreas[0]);

  const handleSubAreaChange = (e) => {
    const selectedId = parseInt(e.target.value, 10);
    const selectedLocation = subAreas.find(subArea => subArea.subAreaId === selectedId);
    setSelectedSubArea(selectedLocation);
  };

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
      <div className={styles["button"]} style={{textAlign: "flex-start", marginBottom: "5px", display: "flex", gap: "10px"}}>
        <form style={{display: 'flex'}}> 
          <TextField label="select date" type="date" value={fromDate} onChange={handleFromDateChange} required id="date"
            variant="outlined" className={styles["form-control"]} InputLabelProps={{shrink: true}} InputProps={{style: {height: "40px"}}}/>
          
          <TextField select variant="outlined" className={styles["form-control"]} value={selectedProject}
            onChange={(e) => setSelectedProject(e.target.value)} SelectProps={{native: true}} InputProps={{style: {height: "40px"}}}>
            <option value="" disabled defaultValue>Select a project</option>
            {projects.map((project) => (
              <option key={project.projectId} value={project.projectName}>{project.projectName}</option>
            ))}
          </TextField>

          <TextField select variant="outlined" className={styles["form-control"]} value={selectedActivity}
            onChange={(e) => setSelectedActivity(e.target.value)} SelectProps={{native: true}} InputProps={{style: {height: "40px"}}}>
            <option value="" disabled defaultValue>Select Activity</option>
            {activities.map((activity) => (
              <option key={activity.activityId} value={activity.activeityName}>{activity.activeityName}</option>
            ))}
          </TextField>

          <TextField select variant="outlined" className={styles["form-control"]} value={selectedArea}
            onChange={(e) => setSelectedArea(e.target.value)} SelectProps={{native: true}} InputProps={{style: {height: "40px"}}}>
            <option value="" disabled defaultValue>Select Area</option>
            {areas.map((area) => (
              <option key={area.areaId} value={area.areaName}>{area.areaName}</option>
            ))}
          </TextField>

           <TextField select variant="outlined" className={styles["form-control"]}
            value={selectedSubArea.subAreaId} onChange={handleSubAreaChange} 
            SelectProps={{ native: true }}
            InputProps={{ style: { height: "40px" } }}>
            <option value="" disabled>Select SubArea</option>
            {subAreas.map((subArea) => (
              <option key={subArea.subAreaId} value={subArea.subAreaId}>
                {subArea.subAreaName}
              </option>
            ))}
          </TextField>

          <Button variant="contained" className={styles["form-control"]} style={{ textAlign: "center" }} onClick={() => {}}>
            Search
          </Button>
        </form>
      </div>

      {/* Simple embedded Google Map */}
      <div id="geomap" className={styles["geomap"]} style={{ height: '400px', width: '100%' }}>
        <iframe
           src={`https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d10000!2d${selectedSubArea.longitude}!3d${selectedSubArea.latitude}!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sin&layer=c`}
          style={{ border: 0, width: '100%', height: '100%' }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title={selectedSubArea.subAreaName}
        />
      </div>

    </div>
  );
};

export default GeoMapping;
