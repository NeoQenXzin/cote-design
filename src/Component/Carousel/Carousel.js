// Carousel.js
import React, { useState, useEffect } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import styles from './Carousel.module.css'; // Assurez-vous d'ajuster le chemin selon votre structure de fichiers

const Carousel = ({ testimonials }) => {
    const settings = {
        dots: true,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 4000,
        pauseOnHover: true
    };

    return (
        <div className={styles.carouselContainer}>
            <Slider className={styles.slider} {...settings}>
                {testimonials.map((testimonial, index) => (
                    <h3 key={index} className={styles.carouselItem}>"&nbsp; &nbsp;{testimonial.content}&nbsp; &nbsp;"</h3>
                ))}
            </Slider>
        </div>

    );
};

export default Carousel;
