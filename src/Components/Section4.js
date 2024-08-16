import React, { useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './Cssfile/Section4.css';
import backgroundImage from './Pic/Rectangle 170.png'; 
import durationImage from './Pic/Groupe 160.png'; 
import hourglassImage from './Pic/Groupe 162.png'; 
import handImage from './Pic/Groupe 164.png';
import r3adImage from './Pic/r3ad.png'; // New image import
import cotetImage from './Pic/cotet.png'; // New image import

gsap.registerPlugin(ScrollTrigger);

const Section4 = () => {
  useEffect(() => {
    AOS.init({
      duration: 1200, // Durée de l'animation pour AOS
    });

    // Animation GSAP pour les autres éléments
    gsap.fromTo('.section4 .hand-image', 
      { x: '100%', y: '-100%', opacity: 0 }, 
      {
        x: '0%', 
        y: '0%',
        opacity: 1, 
        ease: 'power3.out', 
        duration: 2, 
        scrollTrigger: {
          trigger: '.section4',
          start: 'top 60%',
          end: 'bottom 50%',
          scrub: true,
        },
      }
    );

    gsap.fromTo('.section4 .r3ad-image', 
      { x: '-100%', opacity: 0 }, 
      {
        x: '0%', 
        opacity: 1, 
        ease: 'power3.out', 
        duration: 2, 
        scrollTrigger: {
          trigger: '.section4',
          start: 'top 70%',
          end: 'bottom 60%',
          scrub: true,
        },
      }
    );

    gsap.fromTo('.section4 .cotet-image', 
      { y: '-100%', opacity: 0 }, 
      {
        y: '0%', 
        opacity: 1, 
        ease: 'power3.out', 
        duration: 2, 
        scrollTrigger: {
          trigger: '.section4',
          start: 'top 60%',
          end: 'bottom 50%',
          scrub: true,
        },
      }
    );
  }, []);

  return (
    <section className="section4">
      <div className="background-container">
        <img 
          src={backgroundImage} 
          alt="Background" 
          className="background-image" 
        />
      </div>
      <div className="duration-objective-container">
      <img 
          src={durationImage} 
          alt="duration" 
          className="hourglass-image" 
          data-aos="fade-up" 
          data-aos-delay="1000" 
        />
        <img 
          src={hourglassImage} 
          alt="Hourglass" 
          className="duration-image" 
          data-aos="fade-up" 
          data-aos-delay="1500" 
        />
    
        <img 
          src={handImage} 
          alt="Hand" 
          className="hand-image" 
        />
        <img 
          src={r3adImage} 
          alt="R3ad" 
          className="r3ad-image" 
        />
        <img 
          src={cotetImage} 
          alt="Cotet" 
          className="cotet-image" 
        />
      </div>
    </section>
  );
};

export default Section4;
