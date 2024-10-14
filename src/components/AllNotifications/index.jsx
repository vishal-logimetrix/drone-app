import React, { useState } from "react";
import { Table, Row, Col, Dropdown, DropdownButton, ListGroup, Badge } from "react-bootstrap";
import ReactPaginate from "react-paginate";
import { FaBars } from "react-icons/fa";
import { MdPerson } from "react-icons/md";

import styles from "./allNotifications.module.css";

const AllNotifications = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [currentPage, setCurrentPage] = useState(0);
  const [itemsPerPage, setItemsPerPage] = useState(5);

  const notifications = [
    {
      id: 1,
      userType: "Site User",
      userName: "Mohit Kumar",
      date: "2024-09-26T15:21:32",
    },
    {
      id: 2,
      userType: "Block User",
      userName: "Sharma Vimal",
      date: "2024-09-26T15:21:32",
    },
    {
      id: 3,
      userType: "ACME User",
      userName: "rahul shinde",
      date: "2024-09-26T15:21:32",
    },
    {
      id: 4,
      userType: "LTS User",
      userName: "prashant yadav",
      date: "2024-09-26T15:21:32",
    },
    {
      id: 5,
      userType: "Site User",
      userName: "vijay kulkarni",
      date: "2024-09-26T15:21:32",
    },
    {
      id: 6,
      userType: "Admin",
      userName: "santosh gaikwad",
      date: "2024-09-26T15:21:32",
    },
    {
      id: 7,
      userType: "Site User",
      userName: "ram satpute",
      date: "2024-09-26T15:21:32",
    },
    {
      id: 8,
      userType: "Manager",
      userName: "akash padalkar",
      date: "2024-09-26T15:21:32",
    },
  ];

  const filterednotifications = notifications.filter((role) =>
    role.userType.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const pageCount = Math.ceil(filterednotifications.length / itemsPerPage);
  const handlePageClick = ({ selected }) => {
    setCurrentPage(selected);
  };

  const displaynotifications = filterednotifications.slice(
    currentPage * itemsPerPage,
    currentPage * itemsPerPage + itemsPerPage
  );

  return (
    <div className={styles["user-role-table"]}>
      <Row className={`${styles.tableHeader} align-items-center justify-content-between`} >
        <Col xs={12} md={6} className="d-flex align-items-center" style={{height: '30px'}}>
          <p className={styles["table-title"]}>
            <span className="mr-2">
              <FaBars style={{ marginRight: "10px", color: "#fff" }} />
            </span>
            Notification's
          </p>
        </Col>
        <Col xs={12} md={6} className="d-flex justify-content-end align-items-center" style={{height: '30px'}}>
          <div className="d-flex align-items-center" style={{ height: "40px" }}>
            <span className="mr-2" style={{ color: "#fff" }}>
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
            <th>Notification</th>
          </tr>
        </thead>
        <tbody>
          {displaynotifications.length > 0 ? (
            displaynotifications.map((role, index) => (
              <tr key={role.id}>
                <td>{index + 1 + currentPage * itemsPerPage}</td>
                <td>
                  <ListGroup.Item key={index}
                    style={{
                      padding: "5px",
                      border: "1px solid #e4e4e4",
                      display: "flex",
                      justifyContent: "space-between",
                    }} >
                    <div style={{ display: "flex", gap: "1rem" }}>
                      <MdPerson
                        style={{ fontSize: "1.25rem", color: "#8c8c8c" }} />
                      <span>Login by {role.userType}</span>
                    </div>
                    <Badge className={styles["custom-badge"]}>
                      {role.userName} ({new Date(role.date).toLocaleString()})
                    </Badge>
                  </ListGroup.Item>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="3" className="notFound"
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
        activeClassName={"active"}
      />
    </div>
  );
};

export default AllNotifications;
