import React, { useState } from 'react';
import { signOut } from 'firebase/auth';
import { useAuthState } from 'react-firebase-hooks/auth';
import { NavLink, useNavigate } from 'react-router-dom';
import { RiUser4Fill } from 'react-icons/ri';
import { HiMenuAlt4 } from 'react-icons/hi';
import { IoClose } from 'react-icons/io5';
import auth from '../../firebase.init';
import './Navbar.css'
const Navbar = () => {
    let navigate = useNavigate();
    let [navbar, setNavbar] = useState(false)
    const [user] = useAuthState(auth);
    const handleSignOut = () => {
        signOut(auth);
    }


    return (
        <div className="navbar__container">
            <div className="navbar">
                <div className="logo">
                    <p>Marvel Bangladesh</p>
                </div>
                <div className="navlinks">
                    <button className="hamburger" onClick={() => setNavbar(!navbar)}>{navbar ? <IoClose /> : <HiMenuAlt4 />}</button>
                    <div onClick={() => setNavbar(!navbar)} className={navbar ? "navmenu__mobile" : "navmenu"}>
                        <NavLink className="menulink" to="/">Home</NavLink>
                        {
                            user &&
                            <>
                                <NavLink className="menulink" to="/manageinventory">Inventories</NavLink>
                                <NavLink className="menulink" to="/addproduct">Add Product</NavLink>
                                <NavLink className="menulink" to="/myproducts">My Products</NavLink>
                            </>
                        }
                        <NavLink className="menulink" to="/blogs">Blogs</NavLink>
                        <NavLink className="menulink" to="/about">About</NavLink>
                    </div>
                    <div className={navbar ? "navmenu__mobile__buttons" : "navbuttons"}>
                        {
                            user ?
                                <div style={{ display: "flex" }}>
                                    <span style={{ display: "flex", alignItems: "center", marginLeft: "2rem", fontWeight: "600", padding: "1px 6px", backgroundColor: "rgb(236, 236, 236)", borderRadius: "4px" }}>
                                        <RiUser4Fill style={{ marginRight: "3px" }} />{user.displayName}</span>
                                    <button className='prime__button' onClick={handleSignOut}>Signout</button>
                                </div>
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