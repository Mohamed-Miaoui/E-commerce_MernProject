import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import ShopContextPovider from "./Context/ShopContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    {/* we provide the shopcontext data threw all pages */}
    <ShopContextPovider>
      <App />
    </ShopContextPovider>
  </React.StrictMode>
);
