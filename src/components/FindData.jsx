// import React from 'react';

import { useState } from "react";
import { Button, Card, Col, Container, Row } from "react-bootstrap";
import { Link, useLoaderData } from "react-router-dom";

const FindData = () => {
    const loadedData = useLoaderData();
    const [dataMongoDb, setDataMongoDb] = useState(loadedData)
    const handleDelete = (id) => {
        console.log("rakib hosen", id);
        fetch(`http://localhost:5000/users/${id}`, {
            method: 'DELETE'
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                const succ = data?.deletedCount;
                if (succ > 0) {
                    alert("Delete Successfull wow")
                    const remaining = dataMongoDb.filter(dta => dta._id !== id)
                    setDataMongoDb(remaining);
                }
            })
    }
    return (
        <div>
            <Container>
                <Row className="g-4">
                    {
                        dataMongoDb.map(singleData => <Col className="h-auto" md={4} key={singleData._id}>
                            <Card>
                                <Card.Header as="h5">Name:{singleData.name}</Card.Header>
                                <Card.Body>
                                    <Card.Title> Email: {singleData.email}</Card.Title>
                                    <Card.Text>Id:{singleData._id} </Card.Text>
                                    <Button onClick={() => handleDelete(singleData._id)} variant="primary">Delete</Button>
                                    <Link to={`/update/${singleData._id}`} className="mx-3" variant="secondary">Update</Link>
                                </Card.Body>
                            </Card>
                        </Col>)
                    }
                </Row >
            </Container>
        </div>
    );
};

export default FindData;