import { Button, Form } from 'react-bootstrap';
export default function SignUp(){
    return(
        <Form>
            <h1>Signup</h1>
            <Form.Group controlId="formBasicEmail">
                <Form.Label>User Name</Form.Label>
                <Form.Control type="email" placeholder="Enter username" />
            </Form.Group>
            <Form.Group controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Password" />
            </Form.Group>
            <Form.Group controlId="formBasicAge">
                <Form.Label>Age</Form.Label>
                <Form.Control type="number" placeholder="Age" />
            </Form.Group>
            <Form.Group controlId="formBasicScore">
                <Form.Label>Score</Form.Label>
                <Form.Control type="number" placeholder="Score" />
            </Form.Group>
            <Button variant="primary" type="submit">
                Submit
            </Button>
        </Form>
    )
}