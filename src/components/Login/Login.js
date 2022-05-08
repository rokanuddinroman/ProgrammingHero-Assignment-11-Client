import React, { useState } from 'react';
import { useSendPasswordResetEmail, useSignInWithEmailAndPassword, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import auth from '../../firebase.init';
import './Login.css'
import 'react-toastify/dist/ReactToastify.css';
const Login = () => {

    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error1,
    ] = useSignInWithEmailAndPassword(auth);

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [error, setError] = useState('')
    const location = useLocation();
    const navigate = useNavigate();
    const from = location.state?.from?.pathname || '/'

    if (user) {
        navigate(from, { replace: true })
    }
    const handleEmailBlur = event => {
        setEmail(event.target.value);
    }
    const handlePasswordBlur = event => {
        setPassword(event.target.value);
    }
    const handleUserSignIn = event => {
        event.preventDefault();
        if (error1) {
            setError(error1.message)
            return;
        }
        signInWithEmailAndPassword(email, password)
    }

    const [signInWithGoogle, user1] = useSignInWithGoogle(auth);

    if (user1) {
        navigate(from, { replace: true })
    }

    const [sendPasswordResetEmail, sending, error2] = useSendPasswordResetEmail(
        auth
    );

    const resetPassword = async () => {
        if (email) {
            await sendPasswordResetEmail(email);
            toast.error('Please Check your Mail');
        }
        else {
            toast.error('Please Enter Your Email')
        }
    }

    return (
        <div className="main">
            <ToastContainer />
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
                            <button className='formlink right' onClick={resetPassword}>Forget Password?</button>
                            <p className='error' style={{ color: "red" }}>{error}</p>
                            <input className='btn' type="submit" value="Log In" />
                        </form>

                        <p style={{ marginTop: "1.5rem" }}>Not registered yet? <Link className='formlink' to="/registration">Create an Account.</Link></p>
                        <hr />
                        <button onClick={() => signInWithGoogle()} className="outline__button">Sign in with Google</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;