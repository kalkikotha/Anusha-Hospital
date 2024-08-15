import React from 'react'
import './main.css'
import './bootstrap.min.css'
// import './aos.css'
const Appointment = () => {
    return (
        <div>
            <section id="appointment" className="appointment section">

                <div className="container section-title" data-aos="fade-up">
                    <h2>Appointment</h2>
                    <p>Please fill below details to schedule an Appointment</p>
                </div>

                <div className="container" data-aos="fade-up" data-aos-delay="100">

                    <form action="forms/appointment.php" method="post" role="form" className="php-email-form">
                        <div className="row">
                            <div className="col-md-3 form-group">
                                <input type="text" name="name" className="form-control" id="name" placeholder="Your Name" required="" />
                            </div>
                            <div className="col-md-3 form-group mt-3 mt-md-0">
                                <input type="email" className="form-control" name="email" id="email" placeholder="Your Email" required="" />
                            </div>
                            <div className="col-md-3 form-group mt-3 mt-md-0">
                                <input type="tel" className="form-control" name="phone" id="phone" placeholder="Your Phone" required="" />
                            </div>
                            <div className="col-md-3 form-group mt-3 mt-md-0">
                                <input type="datetime-local" name="date" className="form-control datepicker" id="date" placeholder="Appointment Date" required="" />
                            </div>
                        </div>

                        <div className="form-group mt-3">
                            <textarea className="form-control" name="message" rows="5" placeholder="Message (Optional)"></textarea>
                        </div>
                        <div className="mt-3">
                            <div className="loading">Loading</div>
                            <div className="error-message"></div>
                            <div className="sent-message">Your appointment request has been sent successfully. Thank you!</div>
                            <div className="text-center"><button type="submit">Make an Appointment</button></div>
                        </div>
                    </form>

                </div>

            </section>
        </div>
    )
}

export default Appointment