import React from "react";
import { Route, Routes } from "react-router";
import { NavigationBar } from "./Main/NavigationBar";
import Users from "./Main/Users.js";
import Requests from "./Main/Requests";
import Outcomes from "./Main/Outcomes";
import MHome from "./Main/MHome";

function App() {
  return (
    <div className="App">
      <NavigationBar />
      <Routes>
        <Route path="/" element={<MHome />} />
        <Route path="/Users" element={<Users />} />
        <Route path="/Requests" element={<Requests />} />
        <Route path="/Outcomes" element={<Outcomes />} />
      </Routes>
    </div>
  );
}

export default App;
