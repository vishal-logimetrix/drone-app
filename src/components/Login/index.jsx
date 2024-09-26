import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Snackbar from '@mui/material/Snackbar';
import SnackbarContent from '@mui/material/SnackbarContent'; // Import SnackbarContent for custom styling
//import axios from 'axios'; // Import Axios for HTTP requests
import styles from "./login.module.css";

const Login = () => {
  const navigate = useNavigate();
  const [state, setState] = useState({
    open: false,
    vertical: 'top',
    horizontal: 'center',
  });
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { vertical, horizontal, open } = state;

  const handleLogin = async (e) => {
    e.preventDefault();
    console.log({email, password})
    navigate('/dashboard')
    try {
      // Make the HTTP POST request to authenticate the user
      // const response = await axios.post('https://your-api-url.com/auth/login', {
      //   email,
      //   password,
      // });
      
      const response = await fetch('https://your-api-url.com/', {
        email, password
      })
      // Assuming the API returns a token or some user data upon successful authentication
      if (response.data.success) {
        // You can save the token in localStorage or context if needed
        // localStorage.setItem('token', response.data.token);
        navigate('/dashboard'); // Navigate to the dashboard on successful login
      } else {
        // Handle error (e.g., show a snackbar with an error message)
        handleClick({ vertical: 'top', horizontal: 'center' });
      }
    } catch (error) {
      // Handle the error (e.g., show a snackbar with an error message)
      console.error('Login failed:', error);
      handleClick({ vertical: 'top', horizontal: 'center' });
    }
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
          <form onSubmit={handleLogin}>
            <img className={styles.logo} src="logo_acme.png" alt="ACME_LOGO" />

            <div className={styles.input_box}>
              <input
                type="email"
                placeholder="Email"
                name="username"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>

            <div className={styles.input_box}>
              <input
                type="password"
                placeholder="Password"
                name="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>

            <button className={styles.btn} type="submit">Login</button>
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
          autoHideDuration={4000} 
          key={vertical + horizontal}
        >
          <SnackbarContent 
            message="Login failed. Please try again." // Customize your message based on success/failure
            sx={{ backgroundColor: '#FF6347', color: '#fff', width: '150px', height: '60px' }} 
          />
        </Snackbar>
      </Box>
    </>
  );
};

export default Login;
