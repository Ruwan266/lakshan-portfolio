import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";

import emailjs from "@emailjs/browser";

/* ✅ Initialize EmailJS (Public Key) */
emailjs.init("I-dkwc9ek4US9yP3GZwxO");

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);