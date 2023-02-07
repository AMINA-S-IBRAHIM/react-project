import React from 'react';
import { useState } from "react";
import Box from "@mui/material/Box";


function Form() {
  const[inputarr,setInputarr]=useState([])

  const [inputdata, SetInputdata]=useState({name:"",Gender:"",Age:"",Email:""})

  function changehandle(e){
    SetInputdata({...inputdata,[e.target.name]:e.target.value})
    
  }

  let{name,Gender,Age,Email}=inputdata;

  function handle(){
    setInputarr([...inputarr,{name,Gender,Age,Email}])
    
    console.log(inputdata, "input data what we enter")
    SetInputdata({name:"",Gender:"",Age:"",Email:""})
  }

  function handle2(){
    console.log("Object store in array",inputarr)
    
  }

  return(
         
       <div className="App" >
        <Box>
          
         <input type="text" autoComplete='off' name='name' value={inputdata.name} onChange={changehandle}  placeholder="Enter Name"/>
         <input type="text" autoComplete='off' name='Gender' value={inputdata.Gender} onChange={changehandle} placeholder="Gender"/><br/>
         <input type="text" autoComplete='off' name='Age' value={inputdata.Age} onChange={changehandle} placeholder="Age"/>
         <input type="text" autoComplete='off' name='Email' value={inputdata.Email} onChange={changehandle} placeholder="Email"/><br/>

         <button onClick={handle}>Add </button><br/>
         <button onClick={handle2}>check array in console </button><br/><br/>
        
         <table border={1} width="30%" cell padding={10}>
          <tbody>
               <tr>
                      <th>Name</th>
                      <th>Gender</th>
                      <th>Age</th>
                      <th>Email</th>
                 </tr>
            {
              inputarr.map(
                (info,ind)=>{
                       return(
                   <tr key={ind}>
                     <td>{info.name}</td>
                     <td>{info.Gender}</td>
                     <td>{info.Age}</td>
                     <td>{info.Email}</td>
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