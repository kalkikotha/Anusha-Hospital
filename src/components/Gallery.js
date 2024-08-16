import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import './Gallery.css';
// import './aos.css'

// import required modules
import { Autoplay, Pagination, Navigation, FreeMode } from 'swiper/modules';

import gallery1 from '../images/gallery1.jpeg';
import gallery2 from '../images/gallery2.jpeg'
import gallery3 from '../images/gallery3.jpeg'
import gallery4 from '../images/gallery4.jpeg';
import gallery5 from '../images/gallery5.jpeg'
import gallery6 from '../images/gallery6.jpeg'

const Gallery = () => {
    return (

        <section id="gallery" className="testimonials section">
            <div className="container section-title" data-aos="fade-up">
                <h2>Gallery</h2>
                <p>Explore Our State-of-the-Art Facility.</p>
            </div>

            <div className="container">
                <div className="row gy-4">
                    <div className="col-lg-12" data-aos="fade-up" data-aos-delay="200">
                        <Swiper
                            loop={true}
                            speed={600}
                            slidesPerView={3}
                            spaceBetween={30}

                            centeredSlides={true}
                            autoplay={{
                                delay: 2500,
                                disableOnInteraction: false,
                            }}
                            pagination={{
                                clickable: true,
                            }}
                            freeMode={true}
                            // navigation={true}
                            modules={[Autoplay, Pagination, Navigation, FreeMode]}
                            className="mySwiper"
                        >
                            <SwiperSlide>
                                <div className="testimonial-item">
                                    <div className="d-flex">
                                        <img src={gallery1} alt="review1" style={{ width: '300px', height: '200px' }}/>
                                    </div>
                                </div>
                            </SwiperSlide>

                            <SwiperSlide>
                                <div className="testimonial-item">
                                    <div className="d-flex">
                                        <img src={gallery2} alt="review2" style={{ width: '300px', height: '200px' }}/>
                                    </div>
                                </div>
                            </SwiperSlide>

                            <SwiperSlide>
                                <div className="testimonial-item">
                                    <div className="d-flex">
                                        <img src={gallery3} alt="review3" style={{ width: '300px', height: '200px' }} />
                                    </div>
                                </div>
                            </SwiperSlide>

                            {/* <SwiperSlide>
                                <div className="testimonial-item">
                                    <div className="d-flex">
                                        <img src={gallery4} alt="review3" />
                                    </div>
                                </div>
                            </SwiperSlide>

                            <SwiperSlide>
                                <div className="testimonial-item">
                                    <div className="d-flex">
                                        <img src={gallery5} alt="review3" />
                                    </div>
                                </div>
                            </SwiperSlide> */}

                            <SwiperSlide>
                                <div className="testimonial-item">
                                    <div className="d-flex">
                                        <img src={gallery6} alt="review6" style={{ width: '300px', height: '200px' }}/>
                                    </div>
                                </div>
                            </SwiperSlide>

                            {/* Add more SwiperSlide components as needed */}
                        </Swiper>

                    </div>
                </div>
            </div>
        </section>

    )
}

export default Gallery