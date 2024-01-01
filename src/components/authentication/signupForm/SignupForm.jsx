import React, { useState } from "react";
import styles from "./Signup.module.css";
import { Link } from "react-router-dom";
import mainImage from "../../../assest/mainImage.svg";
import BrandLogo from "../../brandLogo/BrandLogo";
import toast from "react-hot-toast";
import { useAuth } from "../../../context/authContext";

const SignupForm = () => {
  const {signupUser}=useAuth()
  const [userDetails, setUserDetails] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const signupSubmitHandler=(event)=>{
    event.preventDefault()
    if(userDetails.password!==userDetails.confirmPassword){
      toast.error("Your password and confirmpassword does not match")
    }
    else{
      signupUser(userDetails)
    }
  }
  return (
    <div className={styles.container}>
      <img src={mainImage} alt="" className={styles.mainImage} />
      <div className={styles.signupContainer}>
        <BrandLogo />
        <form action="" className={styles.form} onSubmit={signupSubmitHandler}>
          <div className={styles.inputContainer}>
            <label htmlFor="first-name" className={styles.label}>
              First Name:
              <input
                id="first-name"
                type="text"
                className={styles.input}
                value={userDetails.firstName}
                onChange={(event) =>
                  setUserDetails({
                    ...userDetails,
                    firstName: event.target.value,
                  })
                }
              />
            </label>
            <label htmlFor="last-name" className={styles.label}>
              Last Name:
              <input
                id="last-name"
                type="text"
                className={styles.input}
                value={userDetails.lastName}
                onChange={(event) =>
                  setUserDetails({
                    ...userDetails,
                    lastName: event.target.value,
                  })
                }
              />
            </label>
          </div>
          <label htmlFor="email" className={styles.label}>
            Email:
            <input
              id="email"
              type="text"
              className={styles.input}
              value={userDetails.email}
              onChange={(event) =>
                setUserDetails({
                  ...userDetails,
                  email: event.target.value,
                })
              }
            />
          </label>
          <div className={styles.inputContainer}>
            <label htmlFor="password" className={styles.label}>
              Password:
              <input
                id="password"
                type="text"
                className={styles.input}
                value={userDetails.password}
                onChange={(event) =>
                  setUserDetails({
                    ...userDetails,
                    password: event.target.value,
                  })
                }
              />
            </label>
            <label htmlFor="confirm-password" className={styles.label}>
              Confirm Password:
              <input
                id="confirm-password"
                type="text"
                className={styles.input}
                value={userDetails.confirmPassword}
                onChange={(event) =>
                  setUserDetails({
                    ...userDetails,
                    confirmPassword: event.target.value,
                  })
                }
              />
            </label>
          </div>
          <button className={styles.button} type="submit">Signup</button>
        </form>
        <p className={styles.center}>
          Already have an account?{" "}
          <Link className={styles.link} to="/login">
            Log In
          </Link>
        </p>
      </div>
    </div>
  );
};

export default SignupForm;
