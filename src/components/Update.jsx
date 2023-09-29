import { Button, Col, Container, Form, Row } from 'react-bootstrap';
import { useLoaderData, useParams } from 'react-router-dom';

const Update = () => {
    const userData = useLoaderData();
    const handleUpdate = (event) => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        const user = { name, email, password }
        console.log("client site", user)
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