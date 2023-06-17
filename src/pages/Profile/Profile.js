import React from "react";
import "../Profile/Profile.css";

export const Profile = () => {
  return (
    <div className="proileContainer">
      <form className="loginForm">
        <div>
          <h2>Login</h2>
          <div>
            <input type="email" placeholder="email" />
          </div>
          <div>
            <input type="password" placeholder="password" />
          </div>
          <div>
            <button>Login</button>
          </div>
          <div>
            <button>Login as Guest</button>
          </div>
        </div>
      </form>
    </div>
  );
};
