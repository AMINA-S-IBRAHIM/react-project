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

  const history = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    const id = uuid().slice(0, 8);

    Userlist.push({ id, Name, Age, Gender, Email });

    history("/");
  };

  return (
    <div>
      <Form className="AddForm" style={{ margin: "15rem" }}>
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
            type="text"
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
        <Button onClick={handleSubmit} type="submit">
          Submit
        </Button>
      </Form>
    </div>
  );
};

export default Add;