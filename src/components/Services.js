import React from 'react'
import './main.css'
import './bootstrap.min.css'
import './Services.css'
const Services = () => {

    return (

        <section id="services" class="services section-bg">
            <div class="container">
                <div class="section-title">
                    <h2>Our Services</h2>
                    <p>We offer a wide range of medical services to meet the needs of our patients.</p>
                </div>

                <div class="row">
                    {/* <!-- Cardiovascular and Circulatory System --> */}
                    <div class="col-lg-4 col-md-6 d-flex align-items-stretch mb-4">
                        <div class="icon-box">
                            <div class="icon"><i class="bi bi-heart-pulse"></i></div>
                            <h4><a href="">Cardiovascular and Circulatory System</a></h4>
                            <ul>
                                <li>BP Management</li>
                                <li>Heart Disease Treatment</li>
                                <li>Cholesterol Control</li>
                            </ul>
                        </div>
                    </div>

                    {/* <!-- Endocrine and Metabolic Disorders --> */}
                    <div class="col-lg-4 col-md-6 d-flex align-items-stretch mb-4">
                        <div class="icon-box">
                            <div class="icon"><i class="bi bi-droplet"></i></div>
                            <h4><a href="">Endocrine and Metabolic Disorders</a></h4>
                            <ul>
                                <li>Diabetes Care</li>
                                <li>Thyroid Treatment</li>
                                <li>Obesity Management</li>
                                <li>PCODs Treatment</li>
                            </ul>
                        </div>
                    </div>

                    {/* <!-- Infectious Diseases --> */}
                    <div class="col-lg-4 col-md-6 d-flex align-items-stretch mb-4">
                        <div class="icon-box">
                            <div class="icon"><i class="bi bi-virus"></i></div>
                            <h4><a href="">Infectious Diseases</a></h4>
                            <ul>
                                <li>Typhoid</li>
                                <li>Chikungunya</li>
                                <li>Dengue</li>
                                <li>Tuberculosis</li>
                                <li>Hepatocellular/Liver disorders</li>
                            </ul>
                        </div>
                    </div>

                    {/* <!-- Respiratory System --> */}
                    <div class="col-lg-4 col-md-6 d-flex align-items-stretch mb-4">
                        <div class="icon-box">
                            <div class="icon"><i class="bi bi-lungs"></i></div>
                            <h4><a href="">Respiratory System</a></h4>
                            <ul>
                                <li>Asthma Treatment</li>
                                <li>Breathing Issues Management</li>
                                <li>Cough Treatment</li>
                            </ul>
                        </div>
                    </div>

                    {/* <!-- Gastrointestinal and Digestive System --> */}
                    <div class="col-lg-4 col-md-6 d-flex align-items-stretch mb-4">
                        <div class="icon-box">
                            <div class="icon"><i class="bi bi-journal-medical"></i></div>
                            <h4><a href="">Gastrointestinal and Digestive System</a></h4>
                            <ul>
                                <li>Gastric Issues Treatment</li>
                                <li>Vomiting Treatment</li>
                                <li>Loose Motions Management</li>
                            </ul>
                        </div>
                    </div>

                    {/* <!-- Neurological and Nervous System --> */}
                    <div class="col-lg-4 col-md-6 d-flex align-items-stretch mb-4">
                        <div class="icon-box">
                            <div class="icon"><i class="fa fa-brain"></i></div>
                            <h4><a href="">Neurological and Nervous System</a></h4>
                            <ul>
                                <li>Seizures (Fits) Treatment</li>
                                <li>Paralysis Treatment</li>
                                <li>Fatigue Management</li>
                            </ul>
                        </div>
                    </div>

                    {/* <!-- Musculoskeletal System --> */}
                    <div class="col-lg-4 col-md-6 d-flex align-items-stretch mb-4">
                        <div class="icon-box">
                            <div class="icon"><i class="fa fa-bone"></i></div>
                            <h4><a href="">Musculoskeletal System</a></h4>
                            <ul>
                                <li>Arthritis Treatment</li>
                            </ul>
                        </div>
                    </div>

                    {/* <!-- Renal and Urinary System --> */}
                    <div class="col-lg-4 col-md-6 d-flex align-items-stretch mb-4">
                        <div class="icon-box">
                            <div class="icon"><i class="bi bi-droplet-half"></i></div>
                            <h4><a href="">Renal and Urinary System</a></h4>
                            <ul>
                                <li>Urinary Tract Infection</li>
                                <li>Kidney Stones</li>
                                <li>urinary Incontinence</li>
                            </ul>
                        </div>
                    </div>

                    {/* <!-- Hematological and Blood Disorders --> */}
                    <div class="col-lg-4 col-md-6 d-flex align-items-stretch mb-4">
                        <div class="icon-box">
                            <div class="icon"><i class="fa fa-tint"></i></div>
                            <h4><a href="">Hematological and Blood Disorders</a></h4>
                            <ul>
                                <li>Anemia</li>
                                <li>Decreased Platelets</li>
                                <li>Heavy Bleeding Disorder</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>



    )
}

export default Services