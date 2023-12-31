import { Button, Col, Container, Form, Row } from 'react-bootstrap';
import { useLoaderData, useNavigate } from 'react-router-dom';

const Update = () => {
    const userData = useLoaderData();
    const navigate = useNavigate();
    const handleUpdate = (event) => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const user = { name, email }
        console.log(user);
        fetch(`http://localhost:5000/users/${userData._id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(user),
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data?.modifiedCount > 0) {
                    alert("successfull data Update")
                    navigate('/datafind')
                }
            })
    }
    return (
        <Container>
            <Row>
                <Col md={{ span: 6, offset: 3 }}>
                    <h1>Data insert database WOW</h1>
                    <Form onSubmit={handleUpdate}>
                        <Form.Group className="mb-3" controlId="formGroupEmail">
                            <Form.Label>Name</Form.Label>
                            <Form.Control type="text" name="name" defaultValue={userData?.name} placeholder="Enter Name" />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formGroupEmail">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control type="email" defaultValue={userData?.email} name="email" placeholder="Enter email" />
                        </Form.Group>
                        <Button variant="primary" type="submit">
                            Update
                        </Button>
                    </Form>
                </Col>
            </Row>
        </Container>
    );
};

export default Update;