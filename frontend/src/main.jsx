import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import ShopContextPovider from "./Context/ShopContext.jsx";
import { Toaster } from "react-hot-toast";
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    {/* toaster will be accessible in all app */}
    <Toaster position="top-right" reverseOrder={false} />
    {/* we provide the shopcontext data threw all pages */}
    <ShopContextPovider>
      <App />
    </ShopContextPovider>
  </React.StrictMode>
);
