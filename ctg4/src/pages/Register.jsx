import React, { useState } from "react";

import Form from "react-bootstrap/Form";

import Button from "react-bootstrap/Button";

import "../Login.css";

export default function Login() {

  const [user, setUser] = useState("");

  const [classCode, setClassCode] = useState("");

  function validateForm() {

    return user.length > 0 && classCode.length > 0;

  }

  function handleSubmit(event) {

    event.preventDefault();

  }

  return (

    <div className="form-box">

      <Form onSubmit={handleSubmit}>

        <Form.Group size="lg" controlId="email">

          <Form.Label>Username</Form.Label>

          <Form.Control

            autoFocus

            type="username"

            value={user}

            onChange={(e) => setUser(e.target.value)}

          />

        </Form.Group>

        <Form.Group size="lg" controlId="classCode">

          <Form.Label>Class Code</Form.Label>

          <Form.Control

            autoFocus

            type="classCode"

            value={classCode}

            onChange={(e) => setClassCode(e.target.value)}

          />
        </Form.Group>


        <Button className='Btn' block size="lg" type="submit" disabled={!validateForm()}>

          Register

        </Button>

        <a href="/Login">
        <Button block size="lg">
        
            Back to Login
        
        </Button>
        </a>
        
      </Form>

      


    </div>

  );

}