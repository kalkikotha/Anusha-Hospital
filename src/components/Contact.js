import React from 'react'
import './main.css'
import './bootstrap.min.css'
// import './aos.css'

const Contact = () => {
    return (
        <section id="contact" className="contact section">


            <div className="container section-title" data-aos="fade-up">
                <h2>Contact</h2>
            </div>

            <div className="mb-5" data-aos="fade-up" data-aos-delay="200">
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3815.308369745295!2d81.77871177330705!3d17.00853771361219!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a37a30009ceea7f%3A0x69abdba053ac2acc!2sAnusha%20Hospital!5e0!3m2!1sen!2sin!4v1723732369988!5m2!1sen!2sin"
                    style={{ border: '0', width: '100%', height: '270px' }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
            </div>

            <div className="container" data-aos="fade-up" data-aos-delay="100">

                <div className="row gy-4">

                    <div className="col-lg-4">
                        <div className="info-item d-flex" data-aos="fade-up" data-aos-delay="300">
                            <i className="bi bi-geo-alt flex-shrink-0"></i>
                            <div>
                                <h3>Location</h3>
                                <p>beside Karnataka bank street, Danavai Peta, Rajamahendravaram</p>
                            </div>
                        </div>

                        <div className="info-item d-flex" data-aos="fade-up" data-aos-delay="400">
                            <i className="bi bi-telephone flex-shrink-0"></i>
                            <div>
                                <h3>Call Us</h3>
                                <p>+91 85220 08108</p>
                            </div>
                        </div>

                        <div className="info-item d-flex" data-aos="fade-up" data-aos-delay="500">
                            <i className="bi bi-envelope flex-shrink-0"></i>
                            <div>
                                <h3>Email Us</h3>
                                <p>contact@anushahospital.in</p>
                            </div>
                        </div>

                    </div>

                    <div className="col-lg-8">
                        <form action="forms/contact.php" method="post" className="php-email-form" data-aos="fade-up" data-aos-delay="200">
                            <div className="row gy-4">

                                <div className="col-md-6">
                                    <input type="text" name="name" className="form-control" placeholder="Your Name" required="" />
                                </div>

                                <div className="col-md-6 ">
                                    <input type="email" className="form-control" name="email" placeholder="Your Email" required="" />
                                </div>

                                <div className="col-md-12">
                                    <input type="text" className="form-control" name="subject" placeholder="Subject" required="" />
                                </div>

                                <div className="col-md-12">
                                    <textarea className="form-control" name="message" rows="6" placeholder="Message" required=""></textarea>
                                </div>

                                <div className="col-md-12 text-center">
                                    <div className="loading">Loading</div>
                                    <div className="error-message"></div>
                                    <div className="sent-message">Your message has been sent. Thank you!</div>

                                    <button type="submit">Send Message</button>
                                </div>

                            </div>
                        </form>
                    </div>

                </div>

            </div>

        </section>
    )
}

export default Contact