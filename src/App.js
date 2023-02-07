import React from "react";
import { Route, Routes } from "react-router";
import { NavigationBar } from "./components/NavigationBar";
import Users from "./components/Users.js";
import Requests from "./components/Requests";
import Outcomes from "./components/Outcomes";
import Home from "./components/Home";

function App() {
  return (
    <div className="App">
      <NavigationBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Users" element={<Users />} />
        <Route path="/Requests" element={<Requests />} />
        <Route path="/Outcomes" element={<Outcomes />} />
      </Routes>
    </div>
  );
}

export default App;
