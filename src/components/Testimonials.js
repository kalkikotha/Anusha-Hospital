import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import './main.css'
import './bootstrap.min.css'
// import './aos.css'
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import './Gallery.css';

// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

import review1 from '../images/review1.png';
import review2 from '../images/review2.png'
import review3 from '../images/review3.png'

const Testimonials = () => {
    return (

        <section id="testimonials" class="testimonials section">
            <div class="container" >
                <div class="row align-items-center">

                    <div class="col-lg-5 info" data-aos="fade-up" data-aos-delay="100">
                        <h2>What Our Customers Say</h2>
                        <p>Read reviews and testimonials from our satisfied customers.</p>
                    </div>

                    <div className="col-lg-7" data-aos="fade-up" data-aos-delay="200">
                        <div class="swiper init-swiper">
                            <Swiper
                                loop={true}
                                speed={600}
                                slidesPerView={1}
                                spaceBetween={30}

                                centeredSlides={true}
                                autoplay={{
                                    delay: 2500,
                                    disableOnInteraction: false,
                                }}
                                pagination={{
                                    clickable: true,
                                }}
                                // navigation={true}
                                modules={[Autoplay, Pagination, Navigation]}
                                className="mySwiper"
                                style={{ maxHeight: '500px' }}
                            >
                                <div class="swiper-wrapper" >

                                    <SwiperSlide >
                                        <div class="swiper-slide">
                                            <div className="testimonial-item">
                                                <div className="d-flex">
                                                    <img src={review1} alt="review1" />
                                                </div>
                                            </div>
                                        </div>
                                    </SwiperSlide>

                                    <SwiperSlide>
                                        <div className="testimonial-item">
                                            <div className="d-flex">
                                                <img src={review2} alt="review2" />
                                            </div>
                                        </div>
                                    </SwiperSlide>

                                    <SwiperSlide>
                                        <div className="testimonial-item">
                                            <div className="d-flex">
                                                <img src={review3} alt="review3" />
                                            </div>
                                        </div>
                                    </SwiperSlide>
                                </div>
                                {/* Add more SwiperSlide components as needed */}
                            </Swiper>
                        </div>
                    </div>
                </div>
            </div>
        </section>

    )
}

export default Testimonials