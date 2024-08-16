import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Autoplay, Pagination, Navigation, FreeMode } from 'swiper/modules';
import './hero.css'

import gallery1 from '../images/gallery1.jpeg';
import gallery2 from '../images/gallery2.jpeg'
import gallery3 from '../images/gallery3.jpeg'
import gallery4 from '../images/gallery4.jpeg';
import gallery5 from '../images/gallery5.jpeg'
import gallery6 from '../images/gallery6.jpeg'
import gallery6copy from '../images/gallery6copy.jpeg'


// Sample data for the carousel
const slides = [
  {
    image: gallery3,
    title: 'Emergency Services',
    description: '24/7 emergency care available with state-of-the-art facilities.',
  },
  {
    image: gallery1,
    title: 'Skilled Professionals',
    description: 'A highly skilled healthcare professional dedicated to providing exceptional care.',
  },
  {
    image: gallery6,
    title: 'Advanced Diagnostics',
    description: 'Cutting-edge diagnostic tools for accurate and timely results.',
  },
];

const Hero = () => {
  return (
    <section id="hero" style={{ padding: '0px' }}>
      <div className="carousel-container">
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
          freeMode={true}
          navigation={true}
          modules={[Autoplay, Pagination, Navigation, FreeMode]}
          className="mySwiper"
        >
          {slides.map((slide, index) => (
            <SwiperSlide key={index} className="carousel-slide">
              <img src={slide.image} alt={slide.title} className="carousel-image" />
              <div className="carousel-content">
                {/* <h2>Welcome to Our Hospital</h2> */}
                <h2 className="carousel-title">{slide.title}</h2>
                <p className="carousel-description">{slide.description}</p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Hero;
