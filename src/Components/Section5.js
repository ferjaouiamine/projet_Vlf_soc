import React, { useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './Cssfile/Section5.css'; 

import starImage1 from './Pic/star1.png'; 
import starImage2 from './Pic/star2.png'; 
import backgroundImageRight from './Pic/123.png'; 
import fondjaunne from './Pic/fondjaune.png'; 

import fondPluriannuelImage from './Pic/Fonds Pluriannuel.png'; 
import fondReacitifImage from './Pic/Fonds Réactif.png'; 
import fondInnovationImage from './Pic/Fonds Innovation.png'; 

import description1Image from './Pic/description1.png'; 
import description2Image from './Pic/description2.png'; 
import description3Image from './Pic/description3.png'; 

gsap.registerPlugin(ScrollTrigger);

const Section5 = () => {
  useEffect(() => {
    // Initialisation de AOS
    AOS.init({
      duration: 1200, // Durée de l'animation AOS
    });

    // Animations GSAP pour les étoiles (stars)
    gsap.fromTo('.star-image', 
      { rotation: 0, opacity: 0 }, 
      {
        rotation: 360,
        opacity: 1,
        duration: 1.5,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: '.section5',
          start: 'top 70%',
          end: 'bottom 60%',
          scrub: true,
        },
      }
    );
  }, []);

  return (
    <section className="section5">
      <div className="background-container">
        <img src={starImage1} alt="Star 1" className="star-image star1" />
        <img src={starImage2} alt="Star 2" className="star-image star2" />
        <img src={backgroundImageRight} alt="Background Right" className="background-image-right" data-aos="fade-up" data-aos-delay="500" />
      </div>
      <div className="section5-content">
        <div className="funds-item"  >
          <img src={fondjaunne} alt="fondjaune" className="fondjaune" data-aos="fade-up" data-aos-delay="1000" />
          <img src={fondPluriannuelImage} alt="Fonds Pluriannuel" className="funds-title-image" data-aos="fade-up" data-aos-delay="1500" />
          <img src={description1Image} alt="Description 1" className="funds-description-image" data-aos="fade-up" data-aos-delay="1700" />
        </div>
        <div className="funds-item"  >
          <img src={fondReacitifImage}  data-aos="fade-up" alt="Fonds Réactif" className="funds-title-image" data-aos-delay="1800" />
          <img src={description2Image} alt="Description 2" data-aos="fade-up"  className="funds-description-image"  data-aos-delay="1900"/>
        </div>
        <div className="funds-item"  >
          <img src={fondInnovationImage} data-aos="fade-up" alt="Fonds Innovation" className="funds-title-image"  data-aos-delay="2000"/>
          <img src={description3Image} alt="Description 3" data-aos="fade-up" className="funds-description-image" data-aos-delay="2100" />
        </div>
      </div>
    </section>
  );
};

export default Section5;
