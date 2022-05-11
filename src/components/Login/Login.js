import axios from 'axios';
import React, { useState } from 'react';
import { useSendPasswordResetEmail, useSignInWithEmailAndPassword, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import auth from '../../firebase.init';
import './Login.css'
import 'react-toastify/dist/ReactToastify.css';
import useToken from '../../CustomHooks/useToken/useToken';
const Login = () => {


    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [error, setError] = useState('')
    const location = useLocation();
    const navigate = useNavigate();
    const from = location.state?.from?.pathname || '/'

    let errorMessage;
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error1,
    ] = useSignInWithEmailAndPassword(auth);

    const [sendPasswordResetEmail, sending, error2] = useSendPasswordResetEmail(
        auth
    );

    const [signInWithGoogle, user1, googleLoading, googleError] = useSignInWithGoogle(auth);

    const [token] = useToken(user || user1);

    const handleEmailBlur = event => {
        setEmail(event.target.value);
    }
    const handlePasswordBlur = event => {
        setPassword(event.target.value);
    }
    const handleUserSignIn = async event => {
        event.preventDefault();
        await signInWithEmailAndPassword(email, password);
    }


    if (loading || sending || googleLoading) {
        return <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '400px' }}>
            <img style={{ width: '200px' }} src="https://flevix.com/wp-content/uploads/2019/07/Disk-Preloader-1.gif" alt="" />
        </div>
    }

    if (error1 || googleError) {
        // alert("Something went wrong")
        errorMessage = <p className='text-danger'>Error:{googleError?.message} {error1?.message}</p>
    }
    // if (googleError) {
    //     setError(googleError.message)
    // }

    if (token) {
        navigate(from, { replace: true })
    }

    if (user1) {
        navigate(from, { replace: true })
    }






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
                <div>
                    <img src="https://i.ibb.co/jRHg9Pb/20220511-030015.png" alt="" />
                </div>
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
                            <p className='error' style={{ color: "red" }}>{errorMessage}</p>
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