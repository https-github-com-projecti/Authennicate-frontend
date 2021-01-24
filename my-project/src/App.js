import React from "react";
import "./App.css";
import { portAssets } from "./configs";
import Router from "./router";

function App() {
  return (
    <div
      className="App"
      style={{
        width: "100%",
        height: "100vh",
        // backgroundImage: `linear-gradient(rgba(70, 70, 70, 0.226), rgba(70, 70, 70, 0.226)),url(${portAssets}green-leaves-1931141.jpg)`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "center",
        overflow: "auto",
      }}
    >
      <Router />
    </div>
  );
}

export default App;
