import React from 'react'
import './main.css'
import './bootstrap.min.css'
import HospitalLogo from '../images/HospitalLogo.jpeg'
const Footer = () => {
    return (
        <footer id="footer" class="footer light-background">

            <div class="container footer-top">
                <div class="row gy-4">
                    <div class="col-lg-4 col-md-6 footer-about">
                        <a href="index.html" class="logo d-flex align-items-center">
                            <img src={HospitalLogo} alt='Hospital logo' />
                        </a>
                        <div class="footer-contact pt-3">
                            <p>beside Karnataka bank street,</p>
                            <p>Danavai Peta, Rajamahendravaram</p>
                            <p class="mt-3"><strong>Phone:</strong> <span>+91 85220 08108</span></p>
                            <p><strong>Email:</strong> <span>anushahospital2024@gmail.com</span></p>
                        </div>
                        <div class="social-links d-flex mt-4">
                            <a href=""><i class="bi bi-twitter-x"></i></a>
                            <a href=""><i class="bi bi-facebook"></i></a>
                            <a href=""><i class="bi bi-instagram"></i></a>
                            <a href=""><i class="bi bi-linkedin"></i></a>
                        </div>
                    </div>

                    <div class="col-lg-4 col-md-3 footer-links">
                        <h4>Useful Links</h4>
                        <ul>
                            <li><a href="#">Home</a></li>
                            <li><a href="#about">About us</a></li>
                            <li><a href="#services">Services</a></li>
                            <li><a href="#contact">Contact</a></li>
                        </ul>
                    </div>

                    {/* <div class="col-lg-3 col-md-3 footer-links">
                        <h4>Speciality</h4>
                        <ul>
                            <li><a href="#">Specialist1</a></li>
                            <li><a href="#">Specialist1</a></li>
                            <li><a href="#">Specialist1</a></li>
                            <li><a href="#">Specialist1</a></li>
                        </ul>
                    </div> */}

                    <div class="col-lg-4 col-md-3 footer-links">
                        <h4>Opening hours</h4>
                        <ul>
                            <li><a style={{ fontWeight: 'bold' }}>Mon-Sat: 09:00am - 01:00pm</a></li>
                            <li><a style={{ fontWeight: 'bold' }}>Mon-Sat: 02:00pm - 09:00pm</a></li>
                            <li><a style={{ fontWeight: 'bold' }}>Sunday : 10:00am - 12:00pm</a></li>
                        </ul>
                    </div>

                </div>
            </div>

            <div class="container copyright text-center mt-4">
                <p>© <span>Copyright</span> <strong class="px-1 sitename">Anusha hospital.</strong> <span>All Rights Reserved</span></p>
            </div>

        </footer>
    )
}

export default Footer