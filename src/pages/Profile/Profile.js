import React from "react";
import styles from "./Profile.module.css";
import { useAuth } from "../../context/authContext";

export const Profile = () => {
  const { currentUser,logoutUser } = useAuth();
  return (
    <div className={styles.proileContainer}>
      <div className={styles.wrapper}>
        <h1>User Profile</h1>
        <img
          src="https://th.bing.com/th/id/OIP.ndmzWlDy0P6s6JxKVyJUfAHaHa?w=199&h=199&c=7&r=0&o=5&dpr=1.3&pid=1.7"
          alt=""
          className={styles.image}
        />
        <p>
          <span className={styles.bold}>Name:</span> {currentUser?.firstName} {currentUser?.lastName}
        </p>
        <p>
        <span className={styles.bold}>Email:</span> {currentUser.email}
        </p>
        <button className={styles.button} onClick={logoutUser}>Logout</button>
      </div>
    </div>
  );
};
