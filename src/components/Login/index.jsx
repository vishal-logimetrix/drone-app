import React from "react";
import { useNavigate } from 'react-router-dom';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Snackbar from '@mui/material/Snackbar';
import SnackbarContent from '@mui/material/SnackbarContent'; // Import SnackbarContent for custom styling

import styles from "./login.module.css";

const Login = () => {
  const navigate = useNavigate();
  const [state, setState] = React.useState({
    open: false,
    vertical: 'top',
    horizontal: 'center',
  });

  const { vertical, horizontal, open } = state;

  const handleLogin = (e) => {
    e.preventDefault();
    // You can add form validation or API call here before navigation
    navigate('/dashboard');
  };

  const handleClick = (newState) => () => {
    setState({ ...newState, open: true });
  };

  const handleClose = () => {
    setState({ ...state, open: false });
  };

  const buttons = (
    <React.Fragment>
      <Grid item xs={6} sx={{ textAlign: 'right' }}>
        <Button onClick={handleClick({ vertical: 'top', horizontal: 'right' })}>
          Top-Right
        </Button>
      </Grid>
    </React.Fragment>
  );

  return (
    <>
      <div className={styles.parent}>
        <video src="/assets/Video/bgblue.m4v" autoPlay loop muted></video>

        <div className={styles.container}>
          <form action="#">
            <img className={styles.logo} src="logo_acme.png" alt="ACME_LOGO" />

            <div className={styles.input_box}>
              <input type="email" placeholder="Email" name="username" />
            </div>

            <div className={styles.input_box}>
              <input type="password" placeholder="Password" name="password" />
            </div>

            <button className={styles.btn} onClick={handleLogin}>Login</button>
            <button className={styles.btn} onClick={handleClick({ vertical: 'top', horizontal: 'right' })}>Check notification</button>
          </form>
        </div>
      </div>

      <Box sx={{ width: 500 }}>
        {buttons}
        <Snackbar
          anchorOrigin={{ vertical, horizontal }}
          open={open}
          onClose={handleClose}
          autoHideDuration={4000} // Automatically close after 4 seconds
          key={vertical + horizontal}
        >
          <SnackbarContent 
            message="I love snacks"
            sx={{ backgroundColor: '#FF6347', color: '#fff', width: '150px', height: '60px' }} // Set background and text color
          />
        </Snackbar>
      </Box>
    </>
  );
};

export default Login;
