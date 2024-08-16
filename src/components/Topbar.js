import React from 'react'
import './main.css'
import './bootstrap.min.css'
// import './bootstrapgrid.css'
import HospitalLogo from '../images/HospitalLogo.jpeg'
const Topbar = () => {
    return (
        <header id="header" className="header sticky-top">

            <div className="topbar d-flex align-items-center">
                <div className="container d-flex justify-content-center justify-content-md-between">
                    <div className="contact-info d-flex align-items-center" >
                        <i className="bi bi-envelope d-flex align-items-center" ><a href="mailto:anushahospital2024@gmail.com">anushahospital2024@gmail.com</a></i>
                        <i className="bi bi-phone d-flex align-items-center ms-4"><span>+91 85220 08108</span></i>
                    </div>
                    <div className="social-links d-none d-md-flex align-items-center">
                        {/* <a href="#" className="twitter"><i className="bi bi-twitter-x"></i></a>
                        <a href="#" className="facebook"><i className="bi bi-facebook"></i></a>
                        <a href="#" className="instagram"><i className="bi bi-instagram"></i></a> */}
                        <i className="bi bi-clock d-flex align-items-center ms-4" style={{ color: '#3fbbc0' }}><span style={{ color: '#3fbbc0' }}>Monday-Saturday: 9am-9pm, Sunday: 10am to 12pm</span></i>
                    </div>
                </div>
            </div>

            <div className="branding d-flex align-items-center">
                <div className="container position-relative d-flex align-items-center justify-content-between">
                    <a href="index.html" className="logo d-flex align-items-center me-auto">
                        <img src={HospitalLogo} />
                    </a>

                    <nav id="navmenu" className="navmenu">
                        <ul>
                            <li><a href="#hero" className="active">Home<br /></a></li>
                            <li><a href="#about">About</a></li>
                            <li><a href="#services">Services</a></li>
                            <li><a href="#gallery">Gallery</a></li>
                            <li><a href="#contact">Contact</a></li>
                        </ul>
                        <i className="mobile-nav-toggle d-xl-none bi bi-list"></i>
                    </nav>

                    <a className="cta-btn d-none d-sm-block" style={{ backgroundColor: 'white', color: "#3fbbc0" }} href="#appointment">Make an Appointment</a>

                </div>

            </div>
        </header>
    )
}

export default Topbar