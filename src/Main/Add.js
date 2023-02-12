import React, { useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import "bootstrap/dist/css/bootstrap.min.css";
import Userlist from './Userlist';
import { v4 as uuid } from "uuid";
import { useNavigate } from 'react-router-dom';

const Add = () => {
  const [Name, setName] = useState("");
  const [Age, setAge] = useState("");
  const [Gender, setGender] = useState("");
  const [Email, setEmail] = useState("");
  const [validated, setValidated] = useState(false);

  const history = useNavigate();
  

  const handleSubmit = (e) => {
    const form = e.currentTarget;
    if (form.checkValidity() === false) {
      e.preventDefault();
      e.stopPropagation();
      setValidated(true);
      return;
    }

    e.preventDefault();
    setValidated(false);

    const id = uuid().slice(0, 8);

    Userlist.push({ id, Name, Age, Gender, Email });

    history("/Users");
  };

  return (
    <div>
      <Form className="AddForm" style={{ margin: "15rem" }} noValidate validated={validated} onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="formName">
          <Form.Control
            type="text"
            placeholder="Enter Name"
            required
            onChange={(e) => setName(e.target.value)}
          />
        </Form.Group><br />
        <Form.Group className="mb-3" controlId="formAge">
          <Form.Control
            type="number"
            placeholder="Enter Age"
            required
            onChange={(e) => setAge(e.target.value)}
          />
        </Form.Group><br />
        <Form.Group className="mb-3" controlId="formGender">
          <Form.Control
            type="text"
            placeholder="Enter Gender"
            required
            onChange={(e) => setGender(e.target.value)}
          />
        </Form.Group><br />
        <Form.Group className="mb-3" controlId="formEmail">
          <Form.Control
            type="text"
            placeholder="Enter Email"
            required
            onChange={(e) => setEmail(e.target.value)}
          />
        </Form.Group><br />
        <Button type="submit">Submit</Button>
      </Form>
    </div>
  );
};

export default Add