import React from 'react'
// import './aos.css'
const About = () => {
    return (
        <section id="about" class="about section">
            <div class="container section-title" data-aos="fade-up">
                <h2>About Us</h2>
                <h4>Comprehensive Healthcare for Every Need</h4>
                <p>At Anusha Hospital, we are committed to providing exceptional medical care through our team of highly skilled specialists. Our goal is to offer comprehensive treatment for a wide range of health conditions, ensuring that each patient receives personalized and effective care.</p>
            </div>

            <div class="container">
                <div class="row gy-4">
                    <div class="col-lg-6" data-aos="fade-up" data-aos-delay="100">
                        <div class="card">
                            <div class="card-body" style={{height:'200px'}}>
                                <h5 class="card-title">General Medicine</h5>
                                <div class="card-icon">
                                    <i class="bi bi-heart pulse"></i>
                                </div>
                                <p class="card-text">Our MDs in General Medicine offer expert care for various conditions, from acute illnesses to chronic diseases. We provide thorough evaluations and customized treatment plans to meet your health needs.</p>
                            </div>
                        </div>
                    </div>

                    <div class="col-lg-6" data-aos="fade-up" data-aos-delay="200">
                        <div class="card">
                            <div class="card-body" style={{height:'200px'}}>
                                <h5 class="card-title">Endocrinology</h5>
                                <div class="card-icon">
                                    <i class="bi bi-hospital"></i>
                                </div>
                                <p class="card-text">Our Super Specialist in Endocrinology provides advanced care for hormone-related disorders, including diabetes and thyroid diseases. We use cutting-edge diagnostic tools and treatments for optimal endocrine health.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

    )
}

export default About