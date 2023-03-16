import React from "react";
import {Row, Col, Form, Container} from "react-bootstrap";
import PropTypes from "prop-types";

import Button from '@mui/material/Button';

export const ResetPassword = ({handleOnChange, handleOnResetSubmit, formSwitcher, email}) => {
    return  (
        <Container>
            <Row>
                <Col>
                    <h1 className="text-info text-center">Reset Password</h1>
                    <hr/>
                    <Form onSubmit={handleOnResetSubmit}>
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
                        <Button variant="outlined" href="#" disableElevation>
                            Reset
                        </Button>
                    </Form>
                    <hr/>
                </Col>
            </Row>

            <Row>
                <Col>
                    <a href="#" onClick={() => formSwitcher("login")}>Back to Login</a>
                </Col>
            </Row>
        </Container>
    )
}

ResetPassword.propTypes = {
    handleOnChange: PropTypes.func.isRequired,
    handleOnResetSubmit: PropTypes.func.isRequired,
    formSwitcher: PropTypes.func.isRequired,
    email: PropTypes.string.isRequired,
}