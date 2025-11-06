import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { StudentProvider } from "./context/StudentContext";  // ✅ Import provider

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <StudentProvider>       {/* ✅ Wrap App inside context provider */}
        <App />
      </StudentProvider>
    </BrowserRouter>
  </React.StrictMode>
);
