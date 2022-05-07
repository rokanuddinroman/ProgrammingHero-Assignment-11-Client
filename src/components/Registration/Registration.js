import React, { useState } from 'react';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';

const Registration = () => {

    const [createUserWithEmailAndPassword, user, loading, error1] = useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: true });

    // const navigate = useNavigate()

    // if (user) {
    //     navigate('/')
    // }


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
                            <Link className='formlink right' to="/">Reset Password?</Link>
                            <input className='btn' type="submit" value="Sign Up" />
                        </form>

                        <p style={{ marginTop: "1.5rem" }}>Already registered? <Link className='formlink' to="/login">Sign In.</Link></p>
                        <p style={{ color: 'red' }}>{error}</p>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Registration;