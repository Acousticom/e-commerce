import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { makeServer } from "./server";
import { BrowserRouter } from "react-router-dom";
import { ECommerceProvider } from "./context/ECommerceContext";
import { AuthProvider } from "./context/authContext";
import { Toaster } from "react-hot-toast";

// Call make Server
makeServer();

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <AuthProvider>
        <ECommerceProvider>
        <Toaster
              position="top-center"
              reverseOrder={false}
              containerStyle={{
                top: "1rem",
                right: "1rem",
                fontSize: "0.9rem",
              }}
            />
          <App />
        </ECommerceProvider>
      </AuthProvider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
