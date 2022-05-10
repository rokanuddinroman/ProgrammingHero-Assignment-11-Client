import React from 'react';
import './Footer.css'
const Footer = () => {
    return (
        <div style={{ backgroundColor: "black" }}>
            <div className="container footer__container">
                <div className="footer__1">
                    <div className="logo">
                        <h1>Marvel Bangladesh</h1>
                        <p>Official Marchendise seller Bangladesh.</p>
                        <ul>
                            <li>Get Connect</li>
                            <li>Facebook</li>
                            <li>Instagram</li>
                            <li>LinkedIn</li>
                        </ul>
                        {/* <img style={{ width: "100px" }} src={'https://seeklogo.com/images/M/Marvel_Comics-logo-D489AEB9C1-seeklogo.com.png'} alt="" /> */}
                    </div>
                </div>
                <div className="footer__2">
                    <h2 style={{ marginTop: "1rem" }}>Subscribe for latest updates</h2>
                    <div className="subscribe__container">
                        <input type="text" placeholder='Email@gmail.com' /><button>Subscribe</button>
                    </div>
                </div>
                <div className="footer__3">
                    <p><b>Phone:</b> +88017777777</p>
                    <p><b>Address:</b> Chittagong, Bangladesh</p>
                    <p><b>Warehouse Number:</b> 05</p>
                </div>
            </div>
        </div>
    );
};

export default Footer;