import React, { useState } from "react";
import { Table, Row, Col } from "react-bootstrap";
import {  Button, TextField} from '@mui/material';
import { FaBars } from "react-icons/fa";


import styles from './processedImg.module.css'


const ProcessedImage = () => {


    const [fromDate, setFromDate] = useState("");  
    const [toDate, setToDate] = useState("");
    
      const handleFromDateChange = (e) => {
        setFromDate(e.target.value);
      };
    
    
      const handleSubmit = () => {
        const searchData = {
          fromDate,
          toDate,
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

  
            <Button variant="contained" className={styles["form-control"]} style={{ textAlign: "center" }} onClick={handleSubmit} >
              Search
            </Button>
            <Button variant="contained" className={styles["form-control"]} style={{ textAlign: "center" }}  >
              Reset
            </Button>
          </form>
        </div>
        <Row className={`${styles.tableHeader} align-items-center justify-content-between`} >
          <Col xs={12} md={6} className="d-flex align-items-center">
            <p className={styles["table-title"]}>
              <span className="mr-2">
                <FaBars style={{ marginRight: "10px", fontWeight: 900 }} />
              </span>
              Processed images
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
            
        <Table responsive className={styles.table}>
        <thead>
          <tr>
            <th>Yesterday Image</th>
            <th>Today Image</th>
            <th>Processed Image</th>
            
          </tr>
        </thead>
        <tbody>

              {/* <tr >
                <td>kjn</td>
                <td>mbm</td>
                <td>yj</td>
              </tr> */}
        </tbody>
      </Table>

      </div>
    )
}

export default ProcessedImage;