import React from 'react';
import { Link } from 'react-router-dom';
import './Notfound.css'
const NotFound = () => {
    return (
        <div className='container not__found'>
            <img src={"https://www.myphukettravel.com/assets/front-end/images/404.gif"} alt="" />
            <div style={{ marginInline: "auto", textAlign: 'center' }}><Link style={{ textDecoration: 'none' }} className='btn' to='/'>Return Home</Link></div>
        </div>
    );
};

export default NotFound;