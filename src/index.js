import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { makeServer } from "./server";
import { BrowserRouter } from "react-router-dom";
import { ECommerceProvider } from "./context/ECommerceContext";

// Call make Server
makeServer();

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <ECommerceProvider>
        <App />
      </ECommerceProvider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
