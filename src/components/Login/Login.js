import React, { useState } from 'react';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../firebase.init';
import './Login.css'
const Login = () => {

    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const handleEmailBlur = event => {
        setEmail(event.target.value);
    }
    const handlePasswordBlur = event => {
        setPassword(event.target.value);
    }
    const handleUserSignIn = event => {
        event.preventDefault();
        signInWithEmailAndPassword(email, password)
    }

    if (user) {
        console.log(user)
    }

    return (
        <div className="main">
            <div className='container login__container'>
                <div></div>
                <div className="form">
                    <div>
                        <form onSubmit={handleUserSignIn}>
                            <h1>Login</h1>
                            <input onBlur={handleEmailBlur} type="email" name="email" id="" placeholder='Email' required />
                            <br />
                            <input onBlur={handlePasswordBlur} type="password" name="password" id="" placeholder='Password' required />
                            <br />
                            <Link className='formlink right' to="/">Forget Password?</Link>
                            <input className='btn' type="submit" value="Log In" />
                        </form>

                        <p style={{ marginTop: "1.5rem" }}>Not registered yet? <Link className='formlink' to="/registration">Create an Account.</Link></p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;