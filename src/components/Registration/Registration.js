import React, { useState } from 'react';
import { useCreateUserWithEmailAndPassword, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import auth from '../../firebase.init';
import useToken from '../../CustomHooks/useToken/useToken';

const Registration = () => {

    const [createUserWithEmailAndPassword, user, loading, error1] = useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: true });

    const [signInWithGoogle, user1, googleLoading, googleError] = useSignInWithGoogle(auth);

    const [token] = useToken(user || user1)


    const location = useLocation();
    const navigate = useNavigate()
    const from = location.state?.from?.pathname || '/'

    if (token) {
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
        createUserWithEmailAndPassword(email, password)
        toast('Verification Mail Sent')

    }

    let errorMessage;
    if (error1 || googleError) {
        errorMessage = <p>{error1?.message}{googleError?.message}</p>
    }

    if (loading || googleLoading) {
        return <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '400px' }}>
            <img style={{ width: '200px' }} src="https://flevix.com/wp-content/uploads/2019/07/Disk-Preloader-1.gif" alt="" />
        </div>
    }

    return (
        <div className="main">
            <div className='container login__container'>
                <div>
                    <img src="https://i.ibb.co/fYM45S2/20220511-030611.png" alt="" />
                </div>
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
                        <p className='error' style={{ color: "red" }}>{error}{errorMessage}</p>
                        <hr />
                        <button onClick={() => signInWithGoogle()} className="outline__button">Sign in with Google</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Registration;