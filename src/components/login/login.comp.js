import React from "react";
import {Row, Col, Form, Button, Container} from "react-bootstrap";
import PropTypes from "prop-types";

export const LoginForm = ({handleOnChange, handleOnSubmit, formSwitcher, email, password}) => {
    return  (
        <Container>
            <Row>
                <Col>
                    <h1 className="text-info text-center">Client Login</h1>
                    <hr/>
                    <Form onSubmit={handleOnSubmit}>
                        <Form.Group>
                            <Form.Label> Username </Form.Label>
                            <Form.Control
                            type="email"
                            name="email"
                            value={email}
                            onChange={handleOnChange}
                            placeholder="email"
                            required
                            />
                        </Form.Group>
                        <br/>
                        <Form.Group>
                            <Form.Label> Password </Form.Label>
                            <Form.Control
                                type="password"
                                name="password"
                                value={password}
                                onChange={handleOnChange}
                                placeholder="password"
                                required
                            />
                        </Form.Group>
                        <br/>
                        <Button type="submit" className="btn-toolbar">Login</Button>
                    </Form>
                    <hr/>
                </Col>
            </Row>

            <Row>
                <Col>
                    <a href="#" onClick={() => formSwitcher("reset")}>Forget Password?</a>
                </Col>
            </Row>
        </Container>
    )
}

LoginForm.propTypes = {
    handleOnChange: PropTypes.func.isRequired,
    handleOnSubmit: PropTypes.func.isRequired,
    formSwitcher: PropTypes.func.isRequired,
    email: PropTypes.string.isRequired,
    password: PropTypes.string.isRequired,
}