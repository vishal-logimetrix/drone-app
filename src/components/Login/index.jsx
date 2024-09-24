import React from "react";
import { useNavigate } from 'react-router-dom';

import styles from "./login.module.css";

const Login = () => {

  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    // You can add form validation or API call here before navigation
    navigate('/dashboard');  
  };


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
    
            <button className={styles.btn} onClick={handleLogin} >Login</button>

          </form>
        </div>
      </div>
    </>
  );
};

export default Login;
