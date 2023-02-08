import React, {useState} from 'react';
import {Button,Form} from 'react-bootstrap';
import "bootstrap/dist/css/bootstrap.min.css";
import Users from './Users';
import {v4 as uuid} from "uuid";
import{ useNavigate} from 'react-router-dom';

function Add(){
    const[inputarr,setInputarr]=useState([])

    const [inputdata, SetInputdata]=useState({Id:"",Name:"",Gender:"",Age:"",Email:""})
    function changehandle(e){
        SetInputdata({...inputdata,[e.target.name]:e.target.value})
        
      }
    let{Id, Name,Gender,Age,Email}=inputdata;


   let history=useNavigate();

    const handleSubmit=(e)=>{
        e.preventDefault();
        setInputarr([...inputarr,{Id,Name,Gender,Age,Email}])
    
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
                    <Form.Control type="text"  placeholder="Enter Name" required onChange={changehandle} >
                    </Form.Control>
                </Form.Group><br/>
                <Form.Group className="mb-3" controlId="formAge">
                    <Form.Control type="text"  placeholder="Enter Age" required onChange={changehandle} >
                    </Form.Control>
                </Form.Group><br/>
                <Form.Group className="mb-3" controlId="formGender">
                    <Form.Control type="text"  placeholder="Enter Gender" required onChange={changehandle} >
                    </Form.Control>
                </Form.Group><br/>
                <Form.Group className="mb-3" controlId="formEmail">
                    <Form.Control type="text" placeholder="Enter Email" required onChange={changehandle} >
                    </Form.Control>
                </Form.Group><br/>

                
                    <Button onClick={(e)=> handleSubmit(e)} type="submit">Submit</Button>

            </Form>
        </div>
    )
}

export default Add;