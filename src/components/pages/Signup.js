import Form from "../Form";
import Illustration from "../Illustration";

import Checkbox from "../Checkbox";
import Button from "../Button";
import classes from "../../styles/Signup.module.css"
import TextInput from '../TextInput';
export default function Signup() {
    return (
        <>
            <h1>Create an account</h1>
            <div class="column">
                <Illustration />
                <Form classname={`${classes.signup}`}>
                    <TextInput type="text" placeholder="enter name" icon="person"/>
                    <TextInput type="text" placeholder="enter email" icon="alternate_email"/>
                    <TextInput type="password" placeholder="enter password" icon="lock"/>
                    <TextInput type="password" placeholder="confirm password" icon="lock_clock"/>
                    <Checkbox text="I agree to the Terms &amp; Conditions"/>
                    <Button>Submit Now</Button>
                    <div class="info">Already have an account? <a href="login.html">Login</a> instead.</div>
                </Form>
            </div>
        </>
    );
}