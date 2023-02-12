import React from 'react';
import { useState,useEffect } from "react";
import Box from "@mui/material/Box";
import '../index.css';
import { getFromLocalStorage } from "../getFromLocalStorage";


function Form() {
  const[inputarr,setInputarr]=useState([])

  const [inputdata, SetInputdata]=useState({Date:"",Request:"",Outcome:""})
  
  function changehandle(e){
    SetInputdata({...inputdata,[e.target.name]:e.target.value})
    
  }


  let{Date,Request,Outcome}= inputdata;

  function handle(){
      setInputarr([...inputarr,{Date,Request,Outcome}])

      console.log(inputdata, "Data that has been input")
      SetInputdata({Date:"",Request:"",Outcome:""})  
  }

  function handle2(){
    console.log("Object store in array",inputarr)
    
  }
 

  return(
         
       <div  className='form' >
        
        <Box>
          
         <input type="Date" autoComplete='on' name='Date' value={inputdata.Date} onChange={changehandle}  placeholder="Enter Date"/>
         <input type="text" autoComplete='on' name='Request' value={inputdata.Request} onChange={changehandle} placeholder="Enter Request"/>
         <input type="text" autoComplete='on' name='Outcome' value={inputdata.Outcome} onChange={changehandle} placeholder="Enter Outcome"/>
 <br/>
         <button onClick={handle}>Add </button><br/>
         <button onClick={handle2}>check array in console </button><br/><br/>
        
         <table border={2} width="70%" cell padding={30}>
          <tbody>
               <tr>
                      <th>Date</th>
                      <th>Request</th>
                      <th>Outcome</th>
                 </tr>
            {
              inputarr.map(
                (info,ind)=>{
                       return(
                   <tr key={ind}>
                     <td>{info.Date}</td>
                     <td>{info.Request}</td>
                     <td>{info.Outcome}</td>
                   </tr>
                   )
                }
              )
            }
            </tbody>  
          </table>
          </Box>
        </div>
  );
}

export default Form;
