import React, { useState } from "react";
import styles from "./LoginForm.module.css";
import { useAuth } from "../../../context/authContext";
import { Link } from "react-router-dom";
import BrandLogo from "../../brandLogo/BrandLogo";
import mainImage from "../../../assest/mainImage.svg"

const LoginForm = () => {
  const [userLoginDetails, setUserLoginDetails] = useState({
    email: "",
    password: "",
  });
  const {loginAsGuestUser}=useAuth()

  const guestLoginHandler=(event)=>{
    event.preventDefault()
    const guestLoginDetails={username:"",password:""}
    setUserLoginDetails(guestLoginDetails)
    loginAsGuestUser(guestLoginHandler)
  }
  return (
    <>
      <div className={styles.container}>
        <img src={mainImage} alt="" className={styles.mainImage}/>
        <form action="" className={styles.form}>
          <div className={styles.inputContainer}>
           <BrandLogo/>

            <label htmlFor="email">Email</label>
            <input
              className={styles.inputField}
              id="email"
              type="email"
              value={userLoginDetails.email}
              placeholder="Enter email"
              onChange={(event) =>
                setUserLoginDetails({
                  ...userLoginDetails,
                  email: event.target.value,
                })
              }
            />
          </div>
          <div className={styles.inputContainer}>
            <label htmlFor="password">Password </label>
            <input
              className={styles.inputField}
              id="password"
              type="password"
              placeholder="Enter password"
              value={userLoginDetails.password}
              onChange={(event) =>
                setUserLoginDetails({
                  ...userLoginDetails,
                  password: event.target.value,
                })
              }
            />
          </div>
          <button className={styles.loginBtn}>Login</button>
          <button className={styles.loginAsGuestBtn} onClick={guestLoginHandler}>Login As Guest</button>
          <p>Don't have an account? <Link to="/signup" className={styles.link}>Create One</Link></p>
        </form>
      </div>
    </>
  );
};

export default LoginForm;
