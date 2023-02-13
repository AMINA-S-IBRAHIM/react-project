import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import Form from './Form';
import Card from "@mui/material/Card";
import { getFromLocalStorage } from "../getFromLocalStorage";
import { useNavigate } from 'react-router-dom';
import Userlist from './Userlist';


const View = () => {

  return (
   <div >
    <br/><br/>
    <Card sx={{ minWidth: 275, my: 2 }} variant="outlined">
   
     
     </Card>
<br/><br/>

     <Form/>
   </div>
  );
};

export default View;