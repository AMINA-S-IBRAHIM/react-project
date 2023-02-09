import React, {useState,useEffect} from 'react';
import {Button,Form} from 'react-bootstrap';
import "bootstrap/dist/css/bootstrap.min.css";
import Userlist from './Userlist';
import{ useNavigate} from 'react-router-dom';

function Edit(){
    const[Name,setName]=useState("");
   const[Age,setAge]=useState("");
   const[Gender,setGender]=useState("");
   const[Email,setEmail]=useState("");
   const[Id,setId]=useState("");

   let history = useNavigate();

   var index = Userlist.map(function(e){
    return e.Id
    }).indexOf(Id);

    const handleSubmit=(e)=>{
        e.preventDefault();

        let a=Userlist[index];
        a.Name=Name;
        a.Age=Age;
        a.Gender=Gender;
        a.Email=Email;

        history("/");
    }

    useEffect(()=>{
        setName(localStorage.getItem('Name'))
        setAge(localStorage.getItem('Age'))
        setGender(localStorage.getItem('Gender'))
        setEmail(localStorage.getItem('Email'))
        setId(localStorage.getItem('Id'))

    },[])

    return(
        <div>
            <Form className="AddForm"style={{margin:"15rem"}}>
                <Form.Group className="mb-3" controlId="formName">
                    <Form.Control type="text"  placeholder="Enter Name" value={Name} required onChange={(e)=>setName(e.target.value)}>
                    </Form.Control>
                </Form.Group><br/>
                <Form.Group className="mb-3" controlId="formAge">
                    <Form.Control type="text"  placeholder="Enter Age" value={Age} required onChange={(e)=>setAge(e.target.value)}>
                    </Form.Control>
                </Form.Group><br/>
                <Form.Group className="mb-3" controlId="formGender">
                    <Form.Control type="text"  placeholder="Enter Gender" value={Gender} required onChange={(e)=>setGender(e.target.value)}>
                    </Form.Control>
                </Form.Group><br/>
                <Form.Group className="mb-3" controlId="formEmail">
                    <Form.Control type="text" placeholder="Enter Email" value={Email} required onChange={(e)=>setEmail(e.target.value)}>
                    </Form.Control>
                </Form.Group><br/>

                
                    <Button onClick={(e)=> handleSubmit(e)} type="submit">Update</Button>

            </Form>
        </div>

    )
}

export default Edit();