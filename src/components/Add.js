import React, {useState} from 'react';
import {Button,Form} from 'react-bootstrap';
import "bootstrap/dist/css/bootstrap.min.css";
import Users from './Users';
import {v4 as uuid} from "uuid";
import{Link, useNavigate} from 'react-router-dom';

function Add(){

   const[Name,setName]=useState("");
   const[Age,setAge]=useState("");
   const[Gender,setGender]=useState("");
   const[Email,setEmail]=useState("");

   let history=useNavigate();

    const handleSubmit=(e)=>{
        e.preventDefault();

        const ids=uuid();
        let uniqueId =ids.slice(0,8);

        let a = Name,
        b = Age,
        c = Gender,
        d = Email;

        Users.push({id: uniqueId, Name:a, Age: b, Gender: c, Email: d});

        history("/");
    }

    return( 
        <div>
            <Form className="AddForm"style={{margin:"15rem"}}>
                <Form.Group className="mb-3" controlId="formName">
                    <Form.Control type="text"  placeholder="Enter Name" required onChange={(e)=>setName(e.target.value)}>
                    </Form.Control>
                </Form.Group><br/>
                <Form.Group className="mb-3" controlId="formAge">
                    <Form.Control type="text"  placeholder="Enter Age" required onChange={(e)=>setAge(e.target.value)}>
                    </Form.Control>
                </Form.Group><br/>
                <Form.Group className="mb-3" controlId="formGender">
                    <Form.Control type="text"  placeholder="Enter Gender" required onChange={(e)=>setGender(e.target.value)}>
                    </Form.Control>
                </Form.Group><br/>
                <Form.Group className="mb-3" controlId="formEmail">
                    <Form.Control type="text" placeholder="Enter Email" required onChange={(e)=>setEmail(e.target.value)}>
                    </Form.Control>
                </Form.Group><br/>

                
                    <Button onClick={(e)=> handleSubmit(e)} type="submit">Submit</Button>

            </Form>
        </div>
    )
}

export default Add;