import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";
import Button from "./Button";
import Form from "./Form";
import TextInput from "./TextInput";

export default function LoginForm() {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const [loading, setLoading] = useState("");

    const { login } = useAuth();  //signup value property er vitor object akare diea chilam in authcontext
    const navigate = useNavigate();

    async function handleSubmit(e) {
        e.preventDefault();
        //password match validation
        // if (password !== confirmPassword) {
        //     return setError("password not match");
        // }

        try {
            setError("");
            setLoading(true);
            await login(email, password);
            navigate("/");
        } catch (error) {
            console.log(error);
            setLoading(false);
            setError("failed to login")
        }
    }

    return (
        <Form style={{ height: "300px" }} onSubmit={handleSubmit}>
            <TextInput type="text" placeholder="enter email" icon="alternate_email" required value={email} onChange={(e) => setEmail(e.target.value)} />
            <TextInput type="password" placeholder="enter password" icon="lock" required value={password} onChange={(e) => setPassword(e.target.value)} />
            <Button type="submit"><span>Submit Now</span></Button>
            {error && <p className="error">{error}</p>}
            <div class="info">Don't have an account? <Link to="/signup">Signup</Link> instead.</div>
        </Form>
    );
}