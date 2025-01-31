import React from "react";
import ReactDOM from "react-dom/client";
import App from "./components/App";
import { GuideProvider } from "./context/GuideContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <GuideProvider>
      <App />
    </GuideProvider>
  </React.StrictMode>
);
