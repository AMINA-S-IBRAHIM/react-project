import React from "react";
import { Route, Routes } from "react-router";
import { NavigationBar } from "./Main/NavigationBar";
import Users from "./Main/Users.js";
import About from "./Main/About";
import Contact from "./Main/Contact";
import MHome from "./Main/MHome";
import Add from "./Main/Add";
import View from "./Main/View";
import { getFromLocalStorage } from "../getFromLocalStorage";

function App() {
  return (
    <div className="App">
      <NavigationBar />
      <Routes>
        <Route path="/" element={<MHome />} />
        <Route path="/Users" element={<Users />} />
        <Route path="/Create" element={<Add />} />
        <Route path="/View" element={<View />} />
        <Route path="/About" element={<About />} />
        <Route path="/Contact" element={<Contact />} />
      </Routes>
    </div>
  );
}

export default App;
