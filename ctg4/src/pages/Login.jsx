import React, { useState } from "react";

import Form from "react-bootstrap/Form";

import Button from "react-bootstrap/Button";

import "../Login.css";

export default function Login() {

  const [user, setUser] = useState("");

  function validateForm() {

    return user.length > 0;

  }

  function handleSubmit(event) {

    event.preventDefault();

  }

  return (

    <div className="form-box">

      <Form onSubmit={handleSubmit}>

        <Form.Group size="lg" controlId="classCode">

          <Form.Label>Username</Form.Label>

          <Form.Control

            autoFocus

            type="username"

            value={user}

            onChange={(e) => setUser(e.target.value)}

          />

        </Form.Group>

        <Button className='Btn' block size="lg" type="submit" disabled={!validateForm()}>

          Login

        </Button>

        <a href="/register">
        
        <Button block size="lg">
        
            Register
        
        </Button>
        
        </a>

      </Form>

    </div>

  );

}