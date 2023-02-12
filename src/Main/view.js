import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import Form from './Form';
import Card from "@mui/material/Card";
import { getFromLocalStorage } from "../getFromLocalStorage";


const View = () => {
 
  return (
   <div >
    <br/><br/>
    <Card sx={{ minWidth: 275, my: 2 }} variant="outlined">
    <h4>Id:{}</h4>
     <h4>Name:{}</h4>
     <h4>Age:{}</h4>
     <h4>Gender:{}</h4>
     <h4>Email:{}</h4>
     
     </Card>
<br/><br/>

     <Form/>
   </div>
  );
};

export default View;