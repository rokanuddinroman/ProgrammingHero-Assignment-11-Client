import React, { useState } from 'react';
import { useCreateUserWithEmailAndPassword, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';

const Registration = () => {

    const [createUserWithEmailAndPassword, user, loading, error1] = useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: true });

    const location = useLocation();
    const navigate = useNavigate()
    const from = location.state?.from?.pathname || '/'

    // if (user) {
    //     navigate('/')
    // }
    if (user) {
        navigate(from, { replace: true })
    }


    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')
    const [error, setError] = useState('')

    const handleEmailBlur = event => {
        setEmail(event.target.value)
    }
    const handlePasswordBlur = event => {
        setPassword(event.target.value)
    }
    const handleConfirmPasswordBlur = event => {
        setConfirmPassword(event.target.value)
    }

    const handleCreateUser = event => {
        event.preventDefault();
        if (password !== confirmPassword) {
            setError('Your Password Didnt Matched')
            return;
        }
        if (password.length < 6) {
            setError('Add atleast 6 characters')
            return;
        }
        if (error1) {
            setError(error1.message)
            return;
        }
        createUserWithEmailAndPassword(email, password)
        alert('Verification Mail Sent')

    }

    const [signInWithGoogle, user1] = useSignInWithGoogle(auth);

    if (user1) {
        navigate(from, { replace: true })
    }

    return (
        <div className="main">
            <div className='container login__container'>
                <div></div>
                <div className="form">
                    <div>
                        <form onSubmit={handleCreateUser}>
                            <h1>Registration</h1>
                            <input onBlur={handleEmailBlur} type="email" name="email" id="" placeholder='Email' required />
                            <br />
                            <input onBlur={handlePasswordBlur} type="password" name="password" id="" placeholder='Password' required />
                            <br />
                            <input onBlur={handleConfirmPasswordBlur} type="password" name="" id="confirmpassword" placeholder='Confirm Password' required />
                            <br />
                            <input className='btn' type="submit" value="Sign Up" />
                        </form>

                        <p style={{ marginTop: "1.5rem" }}>Already registered? <Link className='formlink' to="/login">Sign In.</Link></p>
                        <p className='error' style={{ color: "red" }}>{error}</p>
                        <hr />
                        <button onClick={() => signInWithGoogle()} className="outline__button">Sign in with Google</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Registration;