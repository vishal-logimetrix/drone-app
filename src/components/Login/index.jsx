import React, { useState, useEffect } from "react";
import { useNavigate } from 'react-router-dom';
import Box from '@mui/material/Box';
import Snackbar from '@mui/material/Snackbar';
import SnackbarContent from '@mui/material/SnackbarContent';
import styles from "./login.module.css";

const Login = () => {
  const navigate = useNavigate();

  // Snackbar state for managing notification
  const [state, setState] = useState({
    open: false,
    vertical: 'top',
    horizontal: 'center',
  });

  const { vertical, horizontal, open } = state;

  // State for form, errors, touched status, form validity, and login failure
  const model = {
    username: '',
    password: ''
  };

  const errModel = {
    username: null,
    password: null
  };

  const touchedModel = {
    username: false,
    password: false
  };

  const [form, setForm] = useState(model);
  const [formError, setFormError] = useState(errModel);
  const [touched, setTouched] = useState(touchedModel);
  const [formIsValid, setFormIsValid] = useState(false);
  const [loginFailed, setLoginFailed] = useState(false); // Track login failure

  // Validator function
  const validator = (name, value) => {
    let error = null;
    if (name === "username") {
      if (!value) {
        error = "Username is required";
      }
    }
    if (name === "password") {
      if (!value) {
        error = "Password is required";
      } else if (value.length < 6) {
        error = "Password must be at least 6 characters";
      }
    }

    setFormError({
      ...formError,
      [name]: error
    });
  };

  // Check form validity
  useEffect(() => {
    if (!formError.username && !formError.password && form.username && form.password) {
      setFormIsValid(true);
    } else {
      setFormIsValid(false);
    }
  }, [formError, form]);

  // Handle input changes and validate
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setForm({
      ...form,
      [name]: value
    });

    // Only validate after the field is touched
    if (touched[name]) {
      validator(name, value);
    }
  };

  // Handle field blur (when user clicks out of the field)
  const handleBlur = (e) => {
    const { name, value } = e.target;
    // Mark the field as touched
    setTouched({
      ...touched,
      [name]: true
    });
    validator(name, value);
  };

  // Handle form submission
  const handleLogin = (e) => {
    e.preventDefault();
    // Final validation before submission
    validator("username", form.username);
    validator("password", form.password);
    // Check if form is valid
    if (formIsValid) {
      console.log('Form Values:', form);
      navigate('/dashboard');
      // Simulate API call (you can replace this with real API call logic)
      // if (form.username === "admin" && form.password === "password123") {
        // Successful login simulation
        // navigate('/dashboard');
      // } else {
        // Trigger login failure Snackbar
        // setLoginFailed(true);
        // handleClick({ vertical: 'top', horizontal: 'right' });
      // }
    } else {
      console.log('Form has errors');
    }
  };

  const handleClick = (newState) => {
    setState({ ...newState, open: true });
  };

  const handleClose = () => {
    setState({ ...state, open: false });
    setLoginFailed(false); 
  };

  return (
    <>
      <div className={styles.parent}>
        <video src="/assets/Video/bgblue.m4v" autoPlay loop muted></video>
        <div className={styles.container}>
          <form onSubmit={handleLogin}>
            <img className={styles.logo} src="logo_acme.png" alt="ACME_LOGO" />
            <div className={styles.input_box}>
              <input type="text" placeholder="Username" name="username" value={form.username}
                onChange={handleInputChange} onBlur={handleBlur} />
              {touched.username && formError.username && (
                <small className="text-danger" style={{ fontWeight: '800', fontSize: '12px' }}>
                  {formError.username}
                </small>
              )}
            </div>

            <div className={styles.input_box}>
              <input type="password" placeholder="Password" name="password" value={form.password}
                onChange={handleInputChange} onBlur={handleBlur}
              />
              {touched.password && formError.password && (
                <small className="text-danger" style={{ fontWeight: '800', fontSize: '12px' }}>
                  {formError.password}
                </small>
              )}
            </div>

            <button className={formIsValid ? styles.btn : styles.disableBtn} type="submit" disabled={!formIsValid}>
              Login
            </button>

          </form>
        </div>
      </div>

      <Box sx={{ width: 500 }}>
        <Snackbar anchorOrigin={{ vertical, horizontal }} open={open} onClose={handleClose}
          autoHideDuration={4000} key={vertical + horizontal} >
          <SnackbarContent message="Login failed. Please try again."
            sx={{ backgroundColor: '#FF6347', color: '#fff', width: '200px', height: '60px' }}
          />
        </Snackbar>
      </Box>
    </>
  );
};

export default Login;
