import React, { useState, useEffect } from "react";
import {
  Card,
  ListGroup,
  Badge,
  Button,
  Table,
  Pagination,
} from "react-bootstrap";
import { FaUser } from "react-icons/fa";
import { PiCarBattery } from "react-icons/pi";
import { MdOutlineNotificationsActive, MdPerson } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
} from "@mui/material";
// import {Table, Pagination} from "react-bootstrap/Table";
import * as XLSX from "xlsx";

// import TextField from '@mui/material/TextField';

import styles from "./dashboard.module.css";

const Dashboard = () => {
  const [notifications, setNotifications] = useState([]);
  const navigate = useNavigate();

  //states for opening dailogs
  const [openOnline, setOpenOnline] = useState(false);
  const [openOffline, setOpenOffline] = useState(false);
  const [openLowBattery, setOpenLowBattery] = useState(false);
  const [openMediumBattery, setOpenMediumBattery] = useState(false);
  const [openFullBattery, setOpenFullBattery] = useState(false);

  const [page, setPage] = useState(0);
  const rowsPerPage = 10;

  const onlineUsers = [
    {
      id: 1,
      name: "Mark",
      staffCode: "Otto",
      email: "mdo@example.com",
      mobileNo: "1234567890",
      latLong: "28.6139, 77.2090",
      dateTime: "2024-09-28",
    },
    {
      id: 2,
      name: "Jacob",
      staffCode: "Thornton",
      email: "fat@example.com",
      mobileNo: "0987654321",
      latLong: "19.0760, 72.8777",
      dateTime: "2024-09-28",
    },
  ];
  const totalOnlinePages = Math.ceil(onlineUsers.length / rowsPerPage);

  const handleChangePage = (newPage) => {
    setPage(newPage);
  };

  const offlineUsers = [
    {
      id: 1,
      name: "Sham",
      staffCode: "sham@",
      email: "sham@example.com",
      mobileNo: "1234567890",
      latLong: "28.6139, 77.2090",
      dateTime: "2024-09-28",
    },
    {
      id: 2,
      name: "Ram",
      staffCode: "ram@",
      email: "ram@example.com",
      mobileNo: "0987654321",
      latLong: "19.0760, 72.8777",
      dateTime: "2024-09-28",
    },
    {
      id: 3,
      name: "Sita",
      staffCode: "sita@",
      email: "sita@example.com",
      mobileNo: "1122334455",
      latLong: "22.5726, 88.3639",
      dateTime: "2024-09-28",
    },
    {
      id: 4,
      name: "Gita",
      staffCode: "gita@",
      email: "gita@example.com",
      mobileNo: "2233445566",
      latLong: "13.0827, 80.2707",
      dateTime: "2024-09-28",
    },
    {
      id: 5,
      name: "Lata",
      staffCode: "lata@",
      email: "lata@example.com",
      mobileNo: "3344556677",
      latLong: "17.3850, 78.4867",
      dateTime: "2024-09-28",
    },
    {
      id: 6,
      name: "Amit",
      staffCode: "amit@",
      email: "amit@example.com",
      mobileNo: "4455667788",
      latLong: "12.9716, 77.5946",
      dateTime: "2024-09-28",
    },
    {
      id: 7,
      name: "Vijay",
      staffCode: "vijay@",
      email: "vijay@example.com",
      mobileNo: "5566778899",
      latLong: "28.7041, 77.1025",
      dateTime: "2024-09-28",
    },
    {
      id: 8,
      name: "Priya",
      staffCode: "priya@",
      email: "priya@example.com",
      mobileNo: "6677889900",
      latLong: "26.9124, 75.7873",
      dateTime: "2024-09-28",
    },
    {
      id: 9,
      name: "Ravi",
      staffCode: "ravi@",
      email: "ravi@example.com",
      mobileNo: "7788990011",
      latLong: "30.7333, 76.7794",
      dateTime: "2024-09-28",
    },
    {
      id: 10,
      name: "Anita",
      staffCode: "anita@",
      email: "anita@example.com",
      mobileNo: "8899001122",
      latLong: "9.9251, 78.1194",
      dateTime: "2024-09-28",
    },
    {
      id: 11,
      name: "Kiran",
      staffCode: "kiran@",
      email: "kiran@example.com",
      mobileNo: "9900112233",
      latLong: "23.2599, 77.4126",
      dateTime: "2024-09-28",
    },
    {
      id: 12,
      name: "Nisha",
      staffCode: "nisha@",
      email: "nisha@example.com",
      mobileNo: "1011121314",
      latLong: "17.4544, 78.4747",
      dateTime: "2024-09-28",
    },
    {
      id: 13,
      name: "Sanjay",
      staffCode: "sanjay@",
      email: "sanjay@example.com",
      mobileNo: "1213141516",
      latLong: "25.3176, 82.9739",
      dateTime: "2024-09-28",
    },
    {
      id: 14,
      name: "Neha",
      staffCode: "neha@",
      email: "neha@example.com",
      mobileNo: "1314151617",
      latLong: "26.8468, 80.9462",
      dateTime: "2024-09-28",
    },
    {
      id: 15,
      name: "Rahul",
      staffCode: "rahul@",
      email: "rahul@example.com",
      mobileNo: "1415161718",
      latLong: "19.2183, 72.9781",
      dateTime: "2024-09-28",
    },
    {
      id: 16,
      name: "Deepak",
      staffCode: "deepak@",
      email: "deepak@example.com",
      mobileNo: "1516171819",
      latLong: "15.3173, 75.7139",
      dateTime: "2024-09-28",
    },
    {
      id: 17,
      name: "Aarti",
      staffCode: "aarti@",
      email: "aarti@example.com",
      mobileNo: "1617181920",
      latLong: "12.2958, 76.6393",
      dateTime: "2024-09-28",
    },
    {
      id: 18,
      name: "Sunil",
      staffCode: "sunil@",
      email: "sunil@example.com",
      mobileNo: "1718192021",
      latLong: "22.9782, 88.2916",
      dateTime: "2024-09-28",
    },
    {
      id: 19,
      name: "Suman",
      staffCode: "suman@",
      email: "suman@example.com",
      mobileNo: "1819202122",
      latLong: "11.0168, 76.9558",
      dateTime: "2024-09-28",
    },
    {
      id: 20,
      name: "Rohit",
      staffCode: "rohit@",
      email: "rohit@example.com",
      mobileNo: "1920212223",
      latLong: "19.0760, 72.8777",
      dateTime: "2024-09-28",
    },
    {
      id: 21,
      name: "Tina",
      staffCode: "tina@",
      email: "tina@example.com",
      mobileNo: "2021222324",
      latLong: "28.4082, 77.3172",
      dateTime: "2024-09-28",
    },
    {
      id: 22,
      name: "Kamal",
      staffCode: "kamal@",
      email: "kamal@example.com",
      mobileNo: "2122232425",
      latLong: "10.8505, 76.2711",
      dateTime: "2024-09-28",
    },
  ];

  const totalOfflinePages = Math.ceil(offlineUsers.length / rowsPerPage);

  const lowBatteryUsers = [
    {
      id: 1,
      name: "ksdjfs",
      staffCode: "asdasas@",
      email: "sadsa@example.com",
      mobileNo: "1234567890",
      latLong: "28.6139, 77.2090",
      dateTime: "2024-09-28",
      batteryPerc: "30%",
    },
    {
      id: 2,
      name: "asdsd",
      staffCode: "adsas@",
      email: "dasd@example.com",
      mobileNo: "0987654321",
      latLong: "19.0760, 72.8777",
      dateTime: "2024-09-28",
      batteryPerc: "25%",
    },
  ];

  const totalLowBatteryPages = Math.ceil(lowBatteryUsers.length / rowsPerPage);

  const mediumBatteryUsers = [
    {
      id: 1,
      name: "htyhty",
      staffCode: "rtrty@",
      email: "tyuj@example.com",
      mobileNo: "1234567890",
      latLong: "28.6139, 77.2090",
      dateTime: "2024-09-28",
      batteryPerc: "66%",
    },
    {
      id: 2,
      name: "iukuyk",
      staffCode: "ghth@",
      email: "rtymh@example.com",
      mobileNo: "0987654321",
      latLong: "19.0760, 72.8777",
      dateTime: "2024-09-28",
      batteryPerc: "75%",
    },
  ];

  const totalMediunBatteryPages = Math.ceil(
    mediumBatteryUsers.length / rowsPerPage
  );

  const fullBatteryUsers = [
    {
      id: 1,
      name: "htyhty",
      staffCode: "rtrty@",
      email: "tyuj@example.com",
      mobileNo: "1234567890",
      latLong: "28.6139, 77.2090",
      dateTime: "2024-09-28",
      batteryPerc: "95%",
    },
    {
      id: 2,
      name: "iukuyk",
      staffCode: "ghth@",
      email: "rtymh@example.com",
      mobileNo: "0987654321",
      latLong: "19.0760, 72.8777",
      dateTime: "2024-09-28",
      batteryPerc: "95%",
    },
  ];

  const totalFullBatteryPages = Math.ceil(
    fullBatteryUsers.length / rowsPerPage
  );

  useEffect(() => {
    // Simulate an API call with dummy data
    const dummyNotifications = [
      {
        userName: "Mohit Kumar",
        userId: "ACME002",
        timestamp: "2024-09-26T15:21:32",
        loginBy: "Login by feild User",
      },
    ];
    // Set the dummy notifications to simulate data loading
    setNotifications(dummyNotifications);
  }, []);

  const navigateToAllNotifications = () => {
    navigate("/allNotifications");
  };

  const handleClickOpen = () => setOpenOnline(true);
  const handleClose = () => {
    setOpenOnline(false);
    setPage(0);
  };
  const handleOpenOffline = () => setOpenOffline(true);

  const handleCloseOffline = () => {
    setOpenOffline(false);
    setPage(0);
  };

  const handleOpenLowBattery = () => setOpenLowBattery(true);
  const handleCloseLowBattery = () => {
    setOpenLowBattery(false);
    setPage(0);
  };

  const handleOpenMediumBattery = () => setOpenMediumBattery(true);
  const handleCloseMediumBattery = () => {
    setOpenMediumBattery(false);
    setPage(0);
  };

  const handleOpenFullBattery = () => setOpenFullBattery(true);
  const handleCloseFullBattery = () => {
    setOpenFullBattery(false);
    setPage(0);
  };

  const exportToExcel = (tableData, fileName) => {
    const worksheet = XLSX.utils.json_to_sheet(tableData);
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, "Data");
    XLSX.writeFile(workbook, `${fileName}.xlsx`);
  };

  const submitForm = (event, data, fileName) => {
    event.preventDefault();
    exportToExcel(data, fileName);
    handleClose();
    handleCloseOffline();
    handleCloseLowBattery();
    handleCloseMediumBattery();
    handleCloseFullBattery();
  };

  return (
    <div className="">
      <div className="row">
        <div className="col-12 col-md-3 mb-4">
          <Card style={{ width: "100%", borderRadius: 0, borderColor: "#5bc0de" }} >
            <ListGroup variant="flush">
              {/* Header */}
              <ListGroup.Item style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  gap: "10px",
                  backgroundColor: "#5bc0de",
                  height: "35px",
                  color: "white",
                  padding: "0 10px",
                  borderRadius: 0,
                }} >
                <FaUser style={{ fontSize: "18px" }} />
                <p style={{ margin: 0 }}>Users</p>
              </ListGroup.Item>

              {/* Content */}
              <ListGroup.Item style={{ padding: "0" }}>
                <div style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    height: "50px",
                  }} >
                  {/* Online users */}
                  <div style={{
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "center",
                      alignItems: "center",
                      width: "50%",
                      borderRight: "1px solid #5bc0de",
                      height: "100%",
                    }} >
                    <span style={{
                        fontSize: "18px",
                        color: "#4083a9",
                        fontWeight: 700,
                        cursor: "pointer",
                      }}
                      onClick={() => handleClickOpen()} >
                      0
                    </span>
                    <span style={{ fontSize: "12px" }}>Online</span>
                  </div>

                  {/* Offline users */}
                  <div style={{
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "center",
                      alignItems: "center",
                      width: "50%",
                      height: "100%",
                    }} >
                    <span style={{
                        fontSize: "18px",
                        color: "#4083a9",
                        fontWeight: 700,
                        cursor: "pointer",
                      }}
                      onClick={() => handleOpenOffline()} >
                      10
                    </span>
                    <span style={{ fontSize: "12px" }}>Offline</span>
                  </div>
                </div>
              </ListGroup.Item>
            </ListGroup>
          </Card>
        </div>

        <div className="col-12 col-md-5 mb-4">
          <Card style={{ width: "100%", borderRadius: 0, borderColor: "#5bc0de" }} >
            <ListGroup variant="flush">
              {/* Header */}
              <ListGroup.Item
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  gap: "10px",
                  backgroundColor: "#5bc0de",
                  height: "35px",
                  color: "white",
                  padding: "0 10px",
                  borderRadius: 0,
                }} >
                <PiCarBattery style={{ fontSize: "20px" }} />
                <p style={{ margin: 0 }}>Battery Status</p>
              </ListGroup.Item>

              {/* Content */}
              <ListGroup.Item style={{ padding: "0" }}>
                <div style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    height: "50px",
                  }} >
                  {/* Low users */}
                  <div style={{
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "center",
                      alignItems: "center",
                      width: "50%",
                      borderRight: "1px solid #5bc0de",
                      height: "100%",
                    }} >
                    <span style={{
                        fontSize: "18px",
                        color: "#4083a9",
                        fontWeight: 700,
                        cursor: "pointer",
                      }}
                      onClick={() => handleOpenLowBattery()} >
                      0
                    </span>
                    <span style={{ fontSize: "12px" }}>Low</span>
                  </div>

                  {/* Medium users */}
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "center",
                      alignItems: "center",
                      borderRight: "1px solid #5bc0de",
                      width: "50%",
                      height: "100%",
                    }}
                  >
                    <span
                      style={{
                        fontSize: "18px",
                        color: "#4083a9",
                        fontWeight: 700,
                        cursor: "pointer",
                      }}
                      onClick={() => handleOpenMediumBattery()}
                    >
                      0
                    </span>
                    <span style={{ fontSize: "12px" }}>Medium</span>
                  </div>
                  {/* full users */}
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "center",
                      alignItems: "center",
                      width: "50%",
                      height: "100%",
                    }}
                  >
                    <span
                      style={{
                        fontSize: "18px",
                        color: "#4083a9",
                        fontWeight: 700,
                        cursor: "pointer",
                      }}
                      onClick={() => handleOpenFullBattery()}
                    >
                      0
                    </span>
                    <span style={{ fontSize: "12px" }}>Full</span>
                  </div>
                </div>
              </ListGroup.Item>
            </ListGroup>
          </Card>
        </div>

        <div className="col-12 col-md-4 mb-4">
          <Card style={{ width: "100%", borderRadius: 0, borderColor: "#e66454" }} >
            <ListGroup variant="flush">
              {/* Header */}
              <ListGroup.Item
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  backgroundColor: "#e66454",
                  height: "35px",
                  color: "white",
                  padding: "0 10px",
                  borderRadius: 0,
                }} >
                <div style={{ display: "flex", alignItems: "center", gap: "10px" }} >
                  <MdOutlineNotificationsActive style={{ fontSize: "20px" }} />
                  <p style={{ margin: 0 }}>Notification</p>
                </div>
                <Button variant="link"
                  style={{
                    color: "#d6c9e2",
                    fontSize: "14px",
                    textDecoration: "underline",
                  }}
                  onClick={navigateToAllNotifications} >
                  View all
                </Button>
              </ListGroup.Item>

              {/* Content */}
              {notifications.length === 0 ? (
                <ListGroup.Item
                  style={{
                    textAlign: "center",
                    color: "#d6c9e2",
                    fontSize: "16px",
                    height: "50px",
                  }}
                >
                  No Notification found...
                </ListGroup.Item>
              ) : (
                notifications.map((notification, index) => (
                  <ListGroup.Item
                    key={index}
                    style={{
                      // display: "flex",
                      // alignItems: "center",
                      // justifyContent: "space-between",
                      padding: "10px",
                      borderBottom: "1px solid #f1f1f1",
                    }}
                  >
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: "10px",
                      }}
                    >
                      <MdPerson
                        style={{ fontSize: "20px", color: "#8c8c8c" }}
                      />
                      <span>{notification.loginBy}</span>
                    </div>
                    <Badge className={styles["custom-badge"]}>
                      {notification.userName}-{notification.userId} (
                      {new Date(notification.timestamp).toLocaleString()})
                    </Badge>
                  </ListGroup.Item>
                ))
              )}
            </ListGroup>
          </Card>
        </div>
      </div>

      <Dialog open={openOnline} onClose={handleClose} maxWidth="lg" fullWidth
        sx={{
          "& .MuiDialog-container": {
            justifyContent: "center",
            alignItems: "flex-start",
          },
          "& .MuiPaper-root": {
            marginTop: "20px",
          },
        }} >
        <DialogTitle>Online Users (Total: - {onlineUsers.length})</DialogTitle>
        <DialogContent>
          <Table bordered>
            <thead>
              <tr>
                <th>#</th>
                <th>Name</th>
                <th>Staff Code</th>
                <th>Email</th>
                <th>Mobile No</th>
                <th>Current lat/long</th>
                <th>Date time</th>
              </tr>
            </thead>
            <tbody>
              {onlineUsers.length > 0 ? ( onlineUsers.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage) 
                  .map((user, index) => (
                    <tr key={user.id}>
                      <td>{page * rowsPerPage + index + 1}</td>
                      {/* Adjust index for pagination */}
                      <td>{user.name}</td>
                      <td>{user.staffCode}</td>
                      <td>{user.email}</td>
                      <td>{user.mobileNo}</td>
                      <td>{user.latLong}</td>
                      <td>{user.dateTime}</td>
                    </tr>
                  ))
              ) : (
                <tr>
                  <td colSpan="7"
                    style={{
                      textAlign: "center",
                      color: "orangered",
                      fontWeight: 700,
                    }}>
                    No users found.
                  </td>
                </tr>
              )}
            </tbody>
          </Table>
          <Pagination className="justify-content-center">
            <Pagination.First onClick={() => handleChangePage(0)} disabled={page === 0} />
            <Pagination.Prev onClick={() => handleChangePage(page - 1)} disabled={page === 0} />
            {[...Array(totalOnlinePages)].map((_, idx) => (
              <Pagination.Item key={idx} active={idx === page} onClick={() => handleChangePage(idx)} >
                {idx + 1}
              </Pagination.Item>
            ))}
            <Pagination.Next onClick={() => handleChangePage(page + 1)} disabled={page === totalOnlinePages - 1} />
            <Pagination.Last onClick={() => handleChangePage(totalOnlinePages - 1)} disabled={page === totalOnlinePages - 1}
            />
          </Pagination>
        </DialogContent>

        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={(e) => submitForm(e, onlineUsers, "OnlineUsers")}>
            Export
          </Button>
        </DialogActions>
      </Dialog>

      <Dialog open={openOffline} onClose={handleCloseOffline} maxWidth="lg" fullWidth
        sx={{
          "& .MuiDialog-container": {
            justifyContent: "center",
            alignItems: "flex-start",
          },
          "& .MuiPaper-root": {
            marginTop: "20px",
          },
        }} >
        <DialogTitle>Offline Users (Total: - {offlineUsers.length})</DialogTitle>
        <DialogContent>
          <Table striped bordered>
            <thead>
              <tr>
                <th>#</th>
                <th>Name</th>
                <th>Staff Code</th>
                <th>Email</th>
                <th>Mobile No</th>
                <th>Current lat/long</th>
                <th>Date time</th>
              </tr>
            </thead>
            <tbody>
              {offlineUsers.length > 0 ? (
                offlineUsers.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                  .map((user, index) => (
                    <tr key={user.id}>
                      <td>{page * rowsPerPage + index + 1}</td>
                      <td>{user.name}</td>
                      <td>{user.staffCode}</td>
                      <td>{user.email}</td>
                      <td>{user.mobileNo}</td>
                      <td>{user.latLong}</td>
                      <td>{user.dateTime}</td>
                    </tr>
                  ))
              ) : (
                <tr>
                  <td colSpan="7"
                    style={{
                      textAlign: "center",
                      color: "orangered",
                      fontWeight: 700,
                    }} >
                    No users found.
                  </td>
                </tr>
              )}
            </tbody>
          </Table>
          <Pagination className="justify-content-center">
            <Pagination.First onClick={() => handleChangePage(0)} disabled={page === 0} />
            <Pagination.Prev onClick={() => handleChangePage(page - 1)} disabled={page === 0} />
            {[...Array(totalOfflinePages)].map((_, idx) => (
              <Pagination.Item key={idx} active={idx === page} onClick={() => handleChangePage(idx)} >
                {idx + 1}
              </Pagination.Item>
            ))}
            <Pagination.Next onClick={() => handleChangePage(page + 1)} disabled={page === totalOfflinePages - 1} />
            <Pagination.Last onClick={() => handleChangePage(totalOfflinePages - 1)} disabled={page === totalOfflinePages - 1}
            />
          </Pagination>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseOffline}>Cancel</Button>
          <Button onClick={(e) => submitForm(e, offlineUsers, "OfflineUsers")}>
            Export
          </Button>
        </DialogActions>
      </Dialog>

      <Dialog open={openLowBattery} onClose={handleCloseLowBattery} maxWidth="lg" fullWidth
        sx={{
          "& .MuiDialog-container": {
            justifyContent: "center",
            alignItems: "flex-start",
          },
          "& .MuiPaper-root": {
            marginTop: "20px",
          },
        }}>
        <DialogTitle>Low Battery Users (Total: - {lowBatteryUsers.length})</DialogTitle>
        <DialogContent>
          <Table striped bordered>
            <thead>
              <tr>
                <th>#</th>
                <th>Name</th>
                <th>Staff Code</th>
                <th>Email</th>
                <th>Mobile No</th>
                <th>Battery (%)</th>
                <th>Current lat/long</th>
                <th>Date time</th>
              </tr>
            </thead>
            <tbody>
              {lowBatteryUsers.length > 0 ? (
                lowBatteryUsers.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                  .map((user, index) => (
                    <tr key={user.id}>
                      <td>{page * rowsPerPage + index + 1}</td>
                      <td>{user.name}</td>
                      <td>{user.staffCode}</td>
                      <td>{user.email}</td>
                      <td>{user.mobileNo}</td>
                      <td>{user.batteryPerc}</td>
                      <td>{user.latLong}</td>
                      <td>{user.dateTime}</td>
                    </tr>
                  ))
              ) : (
                <tr>
                  <td colSpan="8"
                    style={{
                      textAlign: "center",
                      color: "orangered",
                      fontWeight: 700,
                    }} >
                    No users found.
                  </td>
                </tr>
              )}
            </tbody>
          </Table>
          <Pagination className="justify-content-center">
            <Pagination.First onClick={() => handleChangePage(0)} disabled={page === 0} />
            <Pagination.Prev onClick={() => handleChangePage(page - 1)} disabled={page === 0} />
            {[...Array(totalLowBatteryPages)].map((_, idx) => (
              <Pagination.Item key={idx} active={idx === page} onClick={() => handleChangePage(idx)} >
                {idx + 1}
              </Pagination.Item>
            ))}
            <Pagination.Next onClick={() => handleChangePage(page + 1)} disabled={page === totalLowBatteryPages - 1}/>
            <Pagination.Last onClick={() => handleChangePage(totalLowBatteryPages - 1)} disabled={page === totalLowBatteryPages - 1}
            />
          </Pagination>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseLowBattery}>Cancel</Button>
          <Button onClick={(e) => submitForm(e, lowBatteryUsers, "LowBatteryUsers")} >
            Export
          </Button>
        </DialogActions>
      </Dialog>

      <Dialog open={openMediumBattery} onClose={handleCloseMediumBattery} maxWidth="lg" fullWidth
        sx={{
          "& .MuiDialog-container": {
            justifyContent: "center",
            alignItems: "flex-start",
          },
          "& .MuiPaper-root": {
            marginTop: "20px",
          },
        }} >
        <DialogTitle>Medium Battery Users (Total: - {mediumBatteryUsers.length})</DialogTitle>
        <DialogContent>
          <Table striped bordered>
            <thead>
              <tr>
                <th>#</th>
                <th>Name</th>
                <th>Staff Code</th>
                <th>Email</th>
                <th>Mobile No</th>
                <th>Battery (%)</th>
                <th>Current lat/long</th>
                <th>Date time</th>
              </tr>
            </thead>
            <tbody>
              {mediumBatteryUsers.length > 0 ? (
                mediumBatteryUsers.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                  .map((user, index) => (
                    <tr key={user.id}>
                      <td>{page * rowsPerPage + index + 1}</td>
                      <td>{user.name}</td>
                      <td>{user.staffCode}</td>
                      <td>{user.email}</td>
                      <td>{user.mobileNo}</td>
                      <td>{user.batteryPerc}</td>
                      <td>{user.latLong}</td>
                      <td>{user.dateTime}</td>
                    </tr>
                  ))
              ) : (
                <tr>
                  <td colSpan="8"
                    style={{
                      textAlign: "center",
                      color: "orangered",
                      fontWeight: 700,
                    }} >
                    No users found.
                  </td>
                </tr>
              )}
            </tbody>
          </Table>
          <Pagination className="justify-content-center">
            <Pagination.First onClick={() => handleChangePage(0)} disabled={page === 0} />
            <Pagination.Prev onClick={() => handleChangePage(page - 1)} disabled={page === 0} />
            {[...Array(totalMediunBatteryPages)].map((_, idx) => (
              <Pagination.Item key={idx} active={idx === page} onClick={() => handleChangePage(idx)} >
                {idx + 1}
              </Pagination.Item>
            ))}
            <Pagination.Next onClick={() => handleChangePage(page + 1)} disabled={page === totalMediunBatteryPages - 1} />
            <Pagination.Last onClick={() => handleChangePage(totalMediunBatteryPages - 1)} disabled={page === totalMediunBatteryPages - 1} />
          </Pagination>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseMediumBattery}>Cancel</Button>
          <Button onClick={(e) => submitForm(e, mediumBatteryUsers, "MediumBatteryUsers") } >
            Export
          </Button>
        </DialogActions>
      </Dialog>

      <Dialog open={openFullBattery} onClose={handleCloseFullBattery} maxWidth="lg" fullWidth
        sx={{
          "& .MuiDialog-container": {
            justifyContent: "center",
            alignItems: "flex-start",
          },
          "& .MuiPaper-root": {
            marginTop: "20px",
          },
        }}>
        <DialogTitle>Full Battery Users (Total: - {fullBatteryUsers.length})</DialogTitle>
        <DialogContent>
          <Table striped bordered>
            <thead>
              <tr>
                <th>#</th>
                <th>Name</th>
                <th>Staff Code</th>
                <th>Email</th>
                <th>Mobile No</th>
                <th>Battery (%)</th>
                <th>Current lat/long</th>
                <th>Date time</th>
              </tr>
            </thead>
            <tbody>
              {fullBatteryUsers.length > 0 ? (
                fullBatteryUsers.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                  .map((user, index) => (
                    <tr key={user.id}>
                      <td>{page * rowsPerPage + index + 1}</td>
                      <td>{user.name}</td>
                      <td>{user.staffCode}</td>
                      <td>{user.email}</td>
                      <td>{user.mobileNo}</td>
                      <td>{user.batteryPerc}</td>
                      <td>{user.latLong}</td>
                      <td>{user.dateTime}</td>
                    </tr>
                  ))
              ) : (
                <tr>
                  <td colSpan="8" style={{
                      textAlign: "center",
                      color: "orangered",
                      fontWeight: 700,
                    }} >
                    No users found.
                  </td>
                </tr>
              )}
            </tbody>
          </Table>
          <Pagination className="justify-content-center">
            <Pagination.First onClick={() => handleChangePage(0)} disabled={page === 0} />
            <Pagination.Prev onClick={() => handleChangePage(page - 1)} disabled={page === 0} />
            {[...Array(totalFullBatteryPages)].map((_, idx) => (
              <Pagination.Item key={idx} active={idx === page} onClick={() => handleChangePage(idx)} >
                {idx + 1}
              </Pagination.Item>
            ))}
            <Pagination.Next onClick={() => handleChangePage(page + 1)} disabled={page === totalFullBatteryPages - 1} />
            <Pagination.Last onClick={() => handleChangePage(totalFullBatteryPages - 1)} disabled={page === totalFullBatteryPages - 1}
            />
          </Pagination>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseFullBattery}>Cancel</Button>
          <Button onClick={(e) => submitForm(e, fullBatteryUsers, "FullBatteryUsers")} >
            Export
          </Button>
        </DialogActions>
      </Dialog>
      
    </div>
  );
};

export default Dashboard;
