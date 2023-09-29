// import React from 'react';

import { Button, Col, Container, Form, Row } from "react-bootstrap";


const DataInsert = () => {

    const handleDatabase = (event) => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        const user = { name, email, password }
        console.log("client site", user)

        fetch('http://localhost:5000/users', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(user)
        })
            .then(response => response.json())
            .then(data => {
                console.log('Response from server:', data);
                if (data.insertedId) {
                    form.reset();
                    alert("Database send Successfull")
                }
            })
            .catch(error => {
                console.error('Error:', error);
            });
    }

    return (
        <Container>
            <Row>
                <Col md={{ span: 6, offset: 3 }}>
                    <h1>Data insert database WOW</h1>
                    <Form onSubmit={handleDatabase}>
                        <Form.Group className="mb-3" controlId="formGroupEmail">
                            <Form.Label>Name</Form.Label>
                            <Form.Control type="text" name="name" placeholder="Enter Name" />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formGroupEmail">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control type="email" name="email" placeholder="Enter email" />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formGroupPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" name="password" placeholder="Password" />
                        </Form.Group>
                        <Button variant="primary" type="submit">
                            Submit
                        </Button>
                    </Form>
                </Col>
            </Row>
        </Container>
    );
};

export default DataInsert;