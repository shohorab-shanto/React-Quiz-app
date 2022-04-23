import classes from "../../styles/Login.module.css";
import Form from "../Form";
import Illustration from "../Illustration";

import Button from "../Button";
import TextInput from '../TextInput';

export default function Login(){
    return (
        <>
            <h1>Login to your account</h1>
            <div class="column">
                <Illustration />
                <Form classname={`${classes.login}`}>
                    <TextInput type="text" placeholder="enter email" icon="alternate_email"/>
                    <TextInput type="password" placeholder="enter password" icon="lock"/>
                    <Button>Submit Now</Button>
                    <div class="info">Don't have an account? <a href="signup.html">Signup</a> instead.</div>
                </Form>
            </div>
        </>
    );
}