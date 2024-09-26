import React, { useState } from 'react';
import { Table, InputGroup, FormControl, Row, Col, Dropdown, DropdownButton } from 'react-bootstrap';
import ReactPaginate from 'react-paginate';
import Button from '@mui/material/Button';
import { FaPlus, FaBars, FaEdit, FaTrash } from 'react-icons/fa'; 
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Alert from '@mui/material/Alert'; // Import Alert for displaying error messages

import styles from './ManageUserRole.module.css';

const ManageUserRole = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [currentPage, setCurrentPage] = useState(0);
  const [itemsPerPage, setItemsPerPage] = useState(5); 
  const [open, setOpen] = useState(false);
  const [newRole, setNewRole] = useState('');
  const [editMode, setEditMode] = useState(false); 
  const [currentRoleId, setCurrentRoleId] = useState(null); 
  const [error, setError] = useState(''); // State to manage error message

  const roles = [
    { id: 1, roleName: 'Ops Admin' },
    { id: 2, roleName: 'Site User' },
    { id: 3, roleName: 'Web User' },
    { id: 4, roleName: 'Zonal Head' },
    { id: 5, roleName: 'Manager' },
    { id: 6, roleName: 'Team Lead' },
    { id: 7, roleName: 'Developer' },
    { id: 8, roleName: 'Analyst' }
  ];

  const filteredRoles = roles.filter(role =>
    role.roleName.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const pageCount = Math.ceil(filteredRoles.length / itemsPerPage);
  const handlePageClick = ({ selected }) => {
    setCurrentPage(selected);
  };

  const displayRoles = filteredRoles.slice(
    currentPage * itemsPerPage,
    currentPage * itemsPerPage + itemsPerPage
  );

  const handleClose = () => {
    setOpen(false);
    setNewRole('');
    setEditMode(false);
    setCurrentRoleId(null);
    setError(''); // Reset error message on close
  };

  const handleClickOpen = (role = null) => {
    if (role) {
      setEditMode(true);
      setNewRole(role.roleName);
      setCurrentRoleId(role.id);
    } else {
      setEditMode(false);
      setNewRole('');
    }
    setOpen(true);
  };

  const submitForm = (event) => {
    event.preventDefault();
    
    if (newRole.trim() === '') {
      setError('Role name is required.'); // Set error message if input is empty
      return; // Stop the form submission
    }

    if (editMode) {
      console.log(`Updating role ID: ${currentRoleId} to new name: ${newRole}`);
    } else {
      console.log("Adding new role:", newRole);
    }

    handleClose(); 
  };

  return (
    <div className={styles['user-role-table']}>
      <div className="button" style={{
        textAlign: 'end',
        marginBottom: '5px'
      }}>
        <Button  onClick={() => handleClickOpen(null)}  variant="contained" aria-hidden="false"
        style={{
          backgroundColor: '#1d89cf',
           textTransform: 'none',
           fontWeight: 300
        }}>
          <FaPlus style={{ marginRight: '5px' , fontWeight: 900}} />
          Add User Role
        </Button>
      </div>
      <Row className={`${styles.tableHeader} align-items-center justify-content-between`}>
        <Col xs={12} md={6} className="d-flex align-items-center">
          <p className={styles['table-title']}>
            <span className="mr-2" >
            <FaBars style={{ marginRight: '10px', color: '#fff' }} />
            </span>Manage User Role
          </p>
        </Col>
        <Col xs={12} md={6} className="d-flex justify-content-end align-items-center">
          <div className="d-flex align-items-center" style={{height: '40px'}}>
            <span className="mr-2" style={{color: '#fff'}}>Per page: &nbsp;</span>
            <DropdownButton
                title={itemsPerPage}
                onSelect={(value) => setItemsPerPage(Number(value))}
                variant="transparent"  
                className={`${styles['custom-dropdown-button']}`}
            >
                <Dropdown.Item eventKey="5">5</Dropdown.Item>
                <Dropdown.Item eventKey="10">10</Dropdown.Item>
                <Dropdown.Item eventKey="15">15</Dropdown.Item>
            </DropdownButton>
          </div>
          <InputGroup className={`${styles['search-bar']}`}>
            <FormControl
              placeholder="Search..."
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </InputGroup>
        </Col>
      </Row>

      {/* Table */}
      <Table responsive className={styles.table}>
        <thead>
          <tr>
            <th>sr.No</th>
            <th>Role Name</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
        {
        displayRoles.length > 0 ? (
          displayRoles.map((role, index) => (
            <tr key={role.id}>
              <td>{index + 1 + currentPage * itemsPerPage}</td>
              <td>{role.roleName}</td>
              <td>
                <FaEdit className={styles['action-icon']}  title='Edit' 
                  onClick={() => handleClickOpen(role)} /> |
                <FaTrash className={styles['action-icon']} title='Delete' />
              </td>
            </tr>
          ))
        ) : (
          <tr>
            <td colSpan="3" className="notFound" style={{
              color: 'orangered',
              textAlign: 'center',
              fontWeight: 'bold'
            }}>
              No Matching Data Found!
            </td>
          </tr>
        )}
        </tbody>
      </Table>

      {/* Pagination */}
      <ReactPaginate
        previousLabel={'< Prev'}
        nextLabel={'Next >'}
        breakLabel={'...'}
        pageCount={pageCount}
        marginPagesDisplayed={2}
        pageRangeDisplayed={2}
        onPageChange={handlePageClick}
        containerClassName={`pagination justify-content-end ${styles['paginationRow']}`}
        pageClassName={'page-item'}
        pageLinkClassName={'page-link'}
        previousClassName={'page-item'}
        previousLinkClassName={`page-link ${styles['prev-next-button']}`}
        nextClassName={'page-item'}
        nextLinkClassName={`page-link ${styles['prev-next-button']}`}
        breakClassName={'page-item'}
        breakLinkClassName={'page-link'}
        activeClassName={'active'}
      />

      {/* Dialog for Add/Edit User Role */}
      <Dialog open={open} onClose={handleClose} >
        <DialogTitle>{editMode ? 'Edit User Role' : 'Add User Role'}</DialogTitle>
        <DialogContent>
          <DialogContentText>
            {editMode ? 'Update the role name below.' : 'To add a user role, please enter the role name.'}
          </DialogContentText>
          <TextField autoFocus required margin="dense" id="role" label={editMode ? 'Edit User Role' : 'Add User Role'}
            type="text" fullWidth variant="standard" value={newRole} 
            onChange={(e) => {
              setNewRole(e.target.value);
              setError(''); // Clear error message on input change
            }} 
          />
          {error && <Alert severity="error">{error}</Alert>} {/* Display error message */}
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={submitForm}>{editMode ? 'Update' : 'Submit'}</Button>
        </DialogActions>
      </Dialog>

    </div>
  );
};

export default ManageUserRole;
