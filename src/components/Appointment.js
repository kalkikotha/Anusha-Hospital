import React, { useState } from 'react'
import './main.css'
import './bootstrap.min.css'
import emailjs from "@emailjs/browser";
// import './aos.css'
const Appointment = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        date: '',
        message: '',
    });

    const [status, setStatus] = useState({
        loading: false,
        error: '',
        success: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const serviceId = "service_yzfi9cg";
        const templateId = "template_lfwsi8o";
        setStatus({ loading: true, error: '', success: '' });

        // EmailJS integration
        emailjs
            .send(
                serviceId,
                templateId,
                formData,
                'yAR2-DRGS4rVoSUCw'
            )
            .then(
                (response) => {
                    setStatus({
                        loading: false,
                        error: '',
                        success: 'Your appointment request has been sent successfully. Thank you!',
                    });
                    setFormData({
                        name: '',
                        email: '',
                        phone: '',
                        date: '',
                        message: '',
                    });
                    alert('Your appointment has been scheduled. Thank you! ')
                },
                (error) => {
                    setStatus({ loading: false, error: 'Failed to send the email. Please try again.', success: '' });
                }
            );
    };


    return (
        <div>
            <section id="appointment" className="appointment section">

                <div className="container section-title" data-aos="fade-up">
                    <h2>Appointment</h2>
                    <p>Please fill below details to schedule an Appointment</p>
                </div>

                <div className="container" data-aos="fade-up" data-aos-delay="100">

                    <form onSubmit={handleSubmit} role="form" className="php-email-form">
                        <div className="row">
                            <div className="col-md-3 form-group">
                                <input
                                    type="text"
                                    name="name"
                                    className="form-control"
                                    id="name"
                                    placeholder="Your Name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                            <div className="col-md-3 form-group mt-3 mt-md-0">
                                <input
                                    type="email"
                                    className="form-control"
                                    name="email"
                                    id="email"
                                    placeholder="Your Email"
                                    value={formData.email}
                                    onChange={handleChange}
                                // required
                                />
                            </div>
                            <div className="col-md-3 form-group mt-3 mt-md-0">
                                <input
                                    type="tel"
                                    className="form-control"
                                    name="phone"
                                    id="phone"
                                    placeholder="Your Phone"
                                    value={formData.phone}
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                            <div className="col-md-3 form-group mt-3 mt-md-0">
                                <input
                                    type="datetime-local"
                                    name="date"
                                    className="form-control"
                                    id="date"
                                    placeholder="Appointment Date"
                                    value={formData.date}
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                        </div>

                        <div className="form-group mt-3">
                            <textarea
                                className="form-control"
                                name="message"
                                rows="5"
                                placeholder="Message (Optional)"
                                value={formData.message}
                                onChange={handleChange}
                            ></textarea>
                        </div>
                        <div className="mt-3">
                            {status.loading && <div className="loading">Loading</div>}
                            {status.error && <div className="error-message">{status.error}</div>}
                            {status.success && <div className="sent-message">{status.success}</div>}
                            <div className="text-center">
                                <button type="submit" disabled={status.loading}>
                                    Make an Appointment
                                </button>
                            </div>
                        </div>

                    </form>


                </div>

            </section>
        </div>
    )
}

export default Appointment