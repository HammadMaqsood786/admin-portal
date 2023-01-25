import React, { useEffect, useState } from "react";
import "./adminMain.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import { app, analytics, auth } from "../../config/firebase";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { async } from "@firebase/util";

function AdminMain() {

    const [show, setShow] = useState(false);

    // States for Login Values

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const theEmail = email;
    const thePassword = password;

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const emailVal = (e) => {
        setEmail(e.target.value);
    }
    // console.log("Email", email)

    const passwordVal = (e) => {
        setPassword(e.target.value);
    }
    // console.log("Password", password)

    const auth = getAuth();

    const loginFunction = (auth, theEmail, thePassword) => {
        signInWithEmailAndPassword (auth, theEmail, thePassword) {
            .then((userCredential) => {
            // Signed in 
            const user = userCredential.user;
            console.log("user", user);
            // ...
        })
        .catch((error) => {
            const errorCode = error.code;
            console.log("error code", errorCode);
            const errorMessage = error.message;
            console.log("Error", errorMessage);
        });
}
    }


return (
    <div className="admin-main" >
        <div className="login-btn-div" >
            <Button variant="primary" onClick={handleShow} >Click to login</Button>{' '}
        </div>

        <Modal show={show} >
            <Modal.Header closeButton onClick={handleClose}>
                <Modal.Title>Login</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                        <Form.Label>Email</Form.Label>
                        <Form.Control
                            type="text"
                            placeholder=""
                            autoFocus
                            onChange={(e) => emailVal(e)}
                        />
                    </Form.Group>
                    <Form.Group
                        className="mb-3"
                        controlId="exampleForm.ControlTextarea1"
                    >
                        <Form.Label>Password</Form.Label>
                        <Form.Control
                            type="password"
                            autoFocus
                            onChange={(e) => passwordVal(e)}
                        />
                    </Form.Group>
                </Form>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                    Close
                </Button>
                <Button variant="primary" onClick={signInWithEmailAndPassword} >
                    Login
                </Button>
            </Modal.Footer>
        </Modal>

    </div>
)
}

export default AdminMain;
