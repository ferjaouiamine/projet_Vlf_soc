import React, { useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
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
    // Desktop Animations
    if (window.innerWidth >= 768) {
      gsap.fromTo('.funds-item', 
        { opacity: 0, y: 100 }, 
        {
          opacity: 1,
          y: 0,
          duration: 1.5,
          ease: 'power2.out',
          stagger: 0.2,
          scrollTrigger: {
            trigger: '.section5-content',
            start: 'top 80%',
            end: 'bottom 60%',
            scrub: true,
          },
        }
      );

      gsap.fromTo('.background-image-right', 
        { scale: 1, x: 0 }, 
        { 
          scale: 1.5,
          x: 100,
          duration: 2,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: '.section5',
            start: 'top 80%',
            end: 'bottom 60%',
            scrub: true,
          },
        }
      );

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
    }

    // Mobile Animations
    if (window.innerWidth < 768) {
      gsap.fromTo('.funds-item', 
        { opacity: 0, y: 100 }, 
        {
          opacity: 1,
          y: 0,
          duration: 1.2,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: '.section5-content',
            start: 'top 90%',
            end: 'bottom 70%',
            scrub: true,
          },
        }
      );

      gsap.fromTo('.background-image-right', 
        { scale: 1, x: 0 }, 
        { 
          scale: 1.3,
          x: 50,
          duration: 1.5,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: '.section5',
            start: 'top 90%',
            end: 'bottom 70%',
            scrub: true,
          },
        }
      );

      gsap.fromTo('.star-image', 
        { rotation: 0, opacity: 0 }, 
        {
          rotation: 180,
          opacity: 1,
          duration: 1.5,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: '.section5',
            start: 'top 80%',
            end: 'bottom 60%',
            scrub: true,
          },
        }
      );
    }
  }, []);

  return (
    <section className="section5">
      <div className="background-container">
        <img src={starImage1} alt="Star 1" className="star-image star1" />
        <img src={starImage2} alt="Star 2" className="star-image star2" />
        <img src={backgroundImageRight} alt="Background Right" className="background-image-right" />
      </div>
      <div className="section5-content">
        <div className="funds-item">
          <img src={fondjaunne} alt="fondjaune" className="fondjaune" />
          <img src={fondPluriannuelImage} alt="Fonds Pluriannuel" className="funds-title-image" />
          <img src={description1Image} alt="Description 1" className="funds-description-image" />
        </div>
        <div className="funds-item">
          <img src={fondReacitifImage} alt="Fonds Réactif" className="funds-title-image" />
          <img src={description2Image} alt="Description 2" className="funds-description-image" />
        </div>
        <div className="funds-item">
          <img src={fondInnovationImage} alt="Fonds Innovation" className="funds-title-image" />
          <img src={description3Image} alt="Description 3" className="funds-description-image" />
        </div>
      </div>
    </section>
  );
};

export default Section5;
