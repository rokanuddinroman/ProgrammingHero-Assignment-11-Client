import React from 'react';
import { signOut } from 'firebase/auth';
import { useAuthState } from 'react-firebase-hooks/auth';
import { NavLink, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import './Navbar.css'
const Navbar = () => {
    let navigate = useNavigate();
    const [user] = useAuthState(auth);
    const handleSignOut = () => {
        signOut(auth);
    }


    return (
        <div className="navbar__container">
            <div className="navbar">
                <div className="logo">
                    Toy Store
                </div>
                <div className="navlinks">
                    <div className="navmenu">
                        <NavLink className="menulink" to="/">Home</NavLink>
                        <NavLink className="menulink" to="/manageinventories">Inventories</NavLink>
                        <NavLink className="menulink" to="/blogs">Blogs</NavLink>
                        <NavLink className="menulink" to="/about">About</NavLink>
                    </div>
                    <div className="navbuttons">
                        {
                            user ?
                                <>
                                    <span style={{ marginLeft: "5px" }}>{user.email}</span>
                                    <button className='prime__button' onClick={handleSignOut}>Signout</button>
                                </>
                                :
                                <>
                                    <button className='prime__button' onClick={() => navigate("/login")}>Login</button>
                                    <button className='prime__button' onClick={() => navigate("/registration")}>Registration</button>
                                </>
                        }</div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;