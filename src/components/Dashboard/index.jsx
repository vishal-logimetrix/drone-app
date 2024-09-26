import React from "react";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import { FaUser } from "react-icons/fa";
import { PiCarBattery } from "react-icons/pi";
import { MdOutlineNotificationsActive } from "react-icons/md";
import { Link } from "react-router-dom";

import styles from './dashboard.module.css'

const Dashboard = () => {
  return (
    <div className="container">
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
          <Card style={{ width: "100%", borderRadius: 0, borderColor: "#e66454" }}
          >
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
                <Link href="#" style={{ color: "#d6c9e2", fontSize: "14px" }}>
                  View all
                </Link>
              </ListGroup.Item>

              {/* Content */}
              <ListGroup.Item
                style={{
                  textAlign: "center",
                  color: "#d6c9e2",
                  fontSize: "16px",
                  height: "50px",
                }} >
                No Notification found...
              </ListGroup.Item>
            </ListGroup>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
