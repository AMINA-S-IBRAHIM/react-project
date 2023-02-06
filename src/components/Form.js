import React from 'react';
import { useState } from "react";
import Box from "@mui/material/Box";


function Form() {
  const[inputarr,setInputarr]=useState([])

  const [inputdata, SetInputdata]=useState({name:"",rollNo:""})

  function changehandle(e){
    SetInputdata({...inputdata,[e.target.name]:e.target.value})
    
  }

  let{name,rollNo}=inputdata;

  function handle(){
    setInputarr([...inputarr,{name,rollNo}])
    
    console.log(inputdata, "input data what we enter")
    SetInputdata({name:"",rollNo:""})
  }

  function handle2(){
    console.log("Object store in array",inputarr)
    
  }

  return(
         
       <div className="App" >
        <Box>
          
         <input type="text" autoComplete='off' name='name' value={inputdata.name} onChange={changehandle}  placeholder="Enter Name"/>

         <input type="text" autoComplete='off' name='rollNo' value={inputdata.rollNo} onChange={changehandle} placeholder="Roll No"/><br/>

         <button onClick={handle}>Add </button><br/>
         <button onClick={handle2}>check array in console </button><br/><br/>
        
         <table border={1} width="30%" cell padding={10}>
          <tbody>
               <tr>
                      <th>Name</th>
                      <th>Roll No</th>
                 </tr>
            {
              inputarr.map(
                (info,ind)=>{
                       return(
                   <tr key={ind}>
                     <td>{info.name}</td>
                     <td>{info.rollNo}</td>
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