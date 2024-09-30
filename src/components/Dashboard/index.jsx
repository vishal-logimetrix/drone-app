import React, { useState, useEffect } from "react";
import { Card, ListGroup, Badge, Button } from "react-bootstrap";
import { FaUser } from "react-icons/fa";
import { PiCarBattery } from "react-icons/pi";
import { MdOutlineNotificationsActive, MdPerson } from "react-icons/md";
import { useNavigate } from "react-router-dom";

import styles from './dashboard.module.css'

const Dashboard = () => {

  const [notifications, setNotifications] = useState([]);
  const navigate = useNavigate();
  
  useEffect(() => {
    // Simulate an API call with dummy data
    const dummyNotifications = [
      {
        userName: "Mohit Kumar",
        userId: "ACME002",
        timestamp: "2024-09-26T15:21:32",
        loginBy: 'Login by feild User'
      },
      {
        userName: "Mohit Kumar",
        userId: "ACME002",
        timestamp: "2024-09-26T11:51:49",
        loginBy: 'Login by Block User'
      },
      {
        userName: "Mohit Kumar",
        userId: "ACME002",
        timestamp: "2024-09-26T08:52:35",
        loginBy: 'Login by Admin'
      },
    ];

    // Set the dummy notifications to simulate data loading
    setNotifications(dummyNotifications);
  }, []);

  const navigateToAllNotifications = () => {
    // Use the navigate function to navigate programmatically
    navigate('/allNotifications');
  }

  return (
    <div className="">
      <div className="row">
        <div className="col-12 col-md-3 mb-4">
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
                <FaUser style={{ fontSize: "18px" }} />
                <p style={{ margin: 0 }}>Users</p>
              </ListGroup.Item>

              {/* Content */}
              <ListGroup.Item style={{ padding: "0" }}>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    height: "50px",
                  }} >
                  {/* Online users */}
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "center",
                      alignItems: "center",
                      width: "50%",
                      borderRight: "1px solid #5bc0de",
                      height: "100%",
                    }} >
                    <span
                      style={{
                        fontSize: "18px",
                        color: "#4083a9",
                        fontWeight: 700,
                      }} >
                      0
                    </span>
                    <span style={{ fontSize: "12px" }}>Online</span>
                  </div>

                  {/* Offline users */}
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "center",
                      alignItems: "center",
                      width: "50%",
                      height: "100%",
                    }} >
                    <span
                      style={{
                        fontSize: "18px",
                        color: "#4083a9",
                        fontWeight: 700,
                      }} >
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
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    height: "50px",
                  }} >
                  {/* Low users */}
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "center",
                      alignItems: "center",
                      width: "50%",
                      borderRight: "1px solid #5bc0de",
                      height: "100%",
                    }} >
                    <span
                      style={{
                        fontSize: "18px",
                        color: "#4083a9",
                        fontWeight: 700,
                      }} >
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
                    }} >
                    <span
                      style={{
                        fontSize: "18px",
                        color: "#4083a9",
                        fontWeight: 700,
                      }} >
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
                    }} >
                    <span
                      style={{
                        fontSize: "18px",
                        color: "#4083a9",
                        fontWeight: 700,
                      }} >
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
        <Card style={{ width: "100%", borderRadius: 0, borderColor: "#e66454" }}>
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
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
            <MdOutlineNotificationsActive style={{ fontSize: "20px" }} />
            <p style={{ margin: 0 }}>Notification</p>
          </div>
          <Button variant="link"  style={{ color: "#d6c9e2", fontSize: "14px", textDecoration: "underline" }} onClick={navigateToAllNotifications}>
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
            }} >
            No Notification found...
          </ListGroup.Item>
        ) : (
          notifications.map((notification, index) => (
            <ListGroup.Item key={index}
              style={{
                // display: "flex",
                // alignItems: "center",
                // justifyContent: "space-between",
                padding: "10px",
                borderBottom: "1px solid #f1f1f1",
              }} >
              <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                <MdPerson style={{ fontSize: "20px", color: "#8c8c8c" }} />
                <span>{ notification.loginBy}</span>
              </div>
              <Badge className={styles['custom-badge']} >
                {notification.userName}-{notification.userId}{" "}
                ({new Date(notification.timestamp).toLocaleString()})
              </Badge>
            </ListGroup.Item>
          ))
        )}
      </ListGroup>
    </Card>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
