import React from 'react'
import './main.css'
import './bootstrap.min.css'
// import './aos.css'
const Facilities = () => {
    return (
        <section id="facilities" class="services section">

            <div class="container section-title" data-aos="fade-up">
                <h2>Facilities</h2>
                <p>Comprehensive Healthcare Solutions & Complete Care Facilities</p>
            </div>

            <div class="container">

                <div class="row gy-4">

                    {/* <!-- Computerized Laboratory --> */}
                    <div class="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay="100">
                        <div class="service-item  position-relative">
                            <div class="icon">
                                <i class="bi bi-speedometer2"></i>
                            </div>
                            <a href="#" class="stretched-link">
                                <h3>Computerized Laboratory</h3>
                            </a>
                            <p>Our state-of-the-art computerized laboratory offers a wide range of diagnostic tests with quick and accurate results, ensuring effective treatment plans for our patients.</p>
                        </div>
                    </div>

                    {/* <!-- Patient Analysis Room --> */}
                    <div class="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay="200">
                        <div class="service-item position-relative">
                            <div class="icon">
                                <i class="bi bi-clipboard-pulse"></i>
                            </div>
                            <a href="#" class="stretched-link">
                                <h3>Patient Observation Room</h3>
                            </a>
                            <p>Our Patient Analysis Room is equipped with modern technology for detailed health assessments and monitoring, providing a comfortable environment for comprehensive care.</p>
                        </div>
                    </div>

                    {/* <!-- In-house Pharmacy --> */}
                    <div class="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay="300">
                        <div class="service-item position-relative">
                            <div class="icon">
                                <i class="bi bi-capsule"></i>
                            </div>
                            <a href="#" class="stretched-link">
                                <h3>In-house Pharmacy</h3>
                            </a>
                            <p>Our in-house pharmacy is stocked with a complete range of medications and medical supplies, offering convenience and timely access to prescriptions for our patients.</p>
                        </div>
                    </div>

                </div>

            </div>

        </section>

    )
}

export default Facilities