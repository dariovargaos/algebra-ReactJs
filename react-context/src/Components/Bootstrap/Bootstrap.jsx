import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Form from "react-bootstrap/Form";

export default function Bootstrap(){
    return(
        <div>
            <Row className="nx-0">
                <Button variant="primary">Button #1</Button>
                <Button variant="secondary">Button #2</Button>
                <Button variant="success">Button #3</Button>
            </Row>

            <br/> <br/>

            <Form>
                <Form.Group>
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" />
                </Form.Group>

                <Form.Group>
                    <Form.Control type="password" placeholder="Enter password"/>
                </Form.Group>

                <Button type="submit" variant="secondary">Submit</Button>
            </Form>

        </div>


    );
}