import React from 'react';
import './App.css';
import Form from './components/Form';
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import {Route, Routes} from "react-router";
import { BannerCard } from "./components/BannerCard";
import { NavigationBar } from "./components/NavigationBar";
import Users from "./components/Users.js";
import Requests from "./components/Requests";
import Outcomes from "./components/Outcomes";

function App() {
  return(     
    <div className="App">
      <NavigationBar />
      <Routes>
        
        <Route path="/Users" element={<Users />} />
        <Route path="/Requests" element={<Requests />} />
        <Route path="/Outcomes" element={<Outcomes />} />

      </Routes>
      <Box>
      <Container
        maxWidth="xl"
        sx={{
          display: "flex",
          flexDirection: { sm: "column", md: "row" },
          flexWrap: "wrap",
          justifyContent: "space-around",
          my: 7,
        }}
      >
        <BannerCard />
      </Container>
    </Box>
        <Form />
     </div>
  );
};

export default App;