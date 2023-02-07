import React from "react";
import { Route, Routes } from "react-router";
import { NavigationBar } from "./components/NavigationBar";
import Users from "../pages/Users"
import Requests from "./pages/Requests";
import Outcomes from "./pages/Outcomes";
import Home from "./pages/Home";

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
